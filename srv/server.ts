import express, { Express, Request, Response, NextFunction } from "express";
import CompanySales from "./lib/utils/company-sales";
import { Plants } from "./lib/types/global.types";

const port: number | string = process.env.PORT || 3000;
const app: Express = express();

app.get("/read/plants", async (req: Request, res: Response, next: NextFunction) => {
    const sales: CompanySales = new CompanySales();
    const plants: Plants[] = await sales.readAllPlants();
    res.json(plants);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});