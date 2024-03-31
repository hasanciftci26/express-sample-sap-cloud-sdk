import express, { Express, Request, Response, NextFunction } from "express";
import CompanySales from "./lib/utils/company-sales";
import { PlantsType, ProductsType } from "./lib/external/company-sales";
import { CreatePlantType, CreateProductType, PlantQueryParams, ProductQueryParams } from "./lib/types/global.types";
import { loadEnv } from "@sap/xsenv";
import path from "path";

loadEnv(path.join(__dirname, "default-env.json"));

const port: number | string = process.env.PORT || 3000;
const app: Express = express();

app.use(express.json());

app.get("/plant", async (req: Request<{}, {}, {}, PlantQueryParams>, res: Response, next: NextFunction) => {
    const sales: CompanySales = new CompanySales("company-sales");

    try {
        const plants: PlantsType[] | [] = await sales.readPlants(req.query.location);
        return res.json(plants);
    } catch (error) {
        return next(error);
    }
});

app.post("/plant", async (req: Request<{}, {}, CreatePlantType>, res: Response, next: NextFunction) => {
    const sales: CompanySales = new CompanySales("company-sales");

    try {
        const createdPlant: PlantsType = await sales.createPlant(req.body);
        return res.json(createdPlant);
    } catch (error) {
        return next(error);
    }
});

app.get("/product", async (req: Request<{}, {}, {}, ProductQueryParams>, res: Response, next: NextFunction) => {
    const sales: CompanySales = new CompanySales("company-sales");

    try {
        const products: ProductsType[] | [] = await sales.readProducts(req.query.name, req.query.plant);
        return res.json(products);
    } catch (error) {
        return next(error);
    }
});

app.post("/product", async (req: Request<{}, {}, CreateProductType>, res: Response, next: NextFunction) => {
    const sales: CompanySales = new CompanySales("company-sales");

    try {
        const createdProduct: CreateProductType = await sales.createProduct(req.body);
        return res.json(createdProduct);
    } catch (error) {
        return next(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});