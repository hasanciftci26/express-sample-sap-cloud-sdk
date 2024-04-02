import express, { Router, Request, Response, NextFunction } from "express";
import { ReadProductQueryParams, ReadProductRouteParams, UpdateProductRouteParams } from "../types/global.types";
import { ProductsType } from "../external/company-sales";
import CompanyProducts from "../utils/company-products";

const router: Router = express.Router();

router.get("/:productId?", async (req: Request<ReadProductRouteParams, {}, {}, ReadProductQueryParams>, res: Response<ProductsType[] | ProductsType>, next: NextFunction) => {
    const compProducts: CompanyProducts = new CompanyProducts("company-sales");

    try {
        const products = await compProducts.readProducts(req.params.productId, req.query.productName, req.query.plant);
        res.json(products);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req: Request<{}, {}, ProductsType>, res: Response<ProductsType>, next: NextFunction) => {
    const compProducts: CompanyProducts = new CompanyProducts("company-sales");

    try {
        const newProduct = await compProducts.createProduct(req.body);
        res.json(newProduct);
    } catch (error) {
        next(error);
    }
});

router.patch("/:productId", async (req: Request<UpdateProductRouteParams, {}, ProductsType>, res: Response<ProductsType>, next: NextFunction) => {
    const compProducts: CompanyProducts = new CompanyProducts("company-sales");

    try {
        const updatedProduct = await compProducts.updateProduct(req.params.productId, req.body, "PATCH");
        res.json(updatedProduct);
    } catch (error) {
        next(error);
    }
});

router.put("/:productId", async (req: Request<UpdateProductRouteParams, {}, ProductsType>, res: Response<ProductsType>, next: NextFunction) => {
    const compProducts: CompanyProducts = new CompanyProducts("company-sales");

    try {
        const updatedProduct = await compProducts.updateProduct(req.params.productId, req.body, "PUT");
        res.json(updatedProduct);
    } catch (error) {
        next(error);
    }
});

router.delete("/:productId", async (req: Request<UpdateProductRouteParams, {}, ProductsType>, res: Response, next: NextFunction) => {
    const compProducts: CompanyProducts = new CompanyProducts("company-sales");

    try {
        await compProducts.deleteProduct(req.params.productId);
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
});

router.post("/batch", async (req: Request<{}, {}, Array<UpdateProductRouteParams>>, res: Response<Array<ProductsType>>, next: NextFunction) => {
    const compProducts: CompanyProducts = new CompanyProducts("company-sales");

    try {
        const products = await compProducts.readProductsBatch(req.body);
        res.json(products);
    } catch (error) {
        next(error);
    }
});

export { router as productRouter };