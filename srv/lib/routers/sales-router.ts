import express, { Router, Request, Response, NextFunction } from "express";
import { SalesRouteParams } from "../types/global.types";
import { ReturnCompanySales_GenerateSalesReport, SalesHeadersType, SalesItemsType } from "../external/company-sales";
import CompanySales from "../utils/company-sales";

const router: Router = express.Router();

router.get("/report", async (req: Request, res: Response<ReturnCompanySales_GenerateSalesReport[]>, next: NextFunction) => {
    const compSales: CompanySales = new CompanySales("company-sales");

    try {
        const salesReport = await compSales.generateSalesReport();
        res.json(salesReport);
    } catch (error) {
        next(error);
    }
});

router.post("/:salesId/items", async (req: Request<SalesRouteParams, {}, SalesItemsType[]>, res: Response<SalesItemsType[]>, next: NextFunction) => {
    const compSales: CompanySales = new CompanySales("company-sales");

    try {
        const newSalesItems = await compSales.createSalesItems(req.params.salesId, req.body);
        res.json(newSalesItems);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req: Request<{}, {}, SalesHeadersType>, res: Response<SalesHeadersType>, next: NextFunction) => {
    const compSales: CompanySales = new CompanySales("company-sales");

    try {
        const newSales = await compSales.createSales(req.body);
        res.json(newSales);
    } catch (error) {
        next(error);
    }
});

export { router as salesRouter };