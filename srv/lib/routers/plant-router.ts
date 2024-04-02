import express, { Router, Request, Response, NextFunction } from "express";
import { ReadPlantQueryParams, ReadPlantRouteParams, UpdatePlantRouteParams } from "../types/global.types";
import CompanyPlants from "../utils/company-plants";
import { PlantsType } from "../external/company-sales";

const router: Router = express.Router();

router.get("/:plantId?", async (req: Request<ReadPlantRouteParams, {}, {}, ReadPlantQueryParams>, res: Response<PlantsType[] | PlantsType>, next: NextFunction) => {
    const compPlants: CompanyPlants = new CompanyPlants("company-sales");

    try {
        const plants = await compPlants.readPlants(req.params.plantId, req.query.location);
        res.json(plants);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req: Request<{}, {}, PlantsType>, res: Response<PlantsType>, next: NextFunction) => {
    const compPlants: CompanyPlants = new CompanyPlants("company-sales");

    try {
        const newPlant = await compPlants.createPlant(req.body);
        res.json(newPlant);
    } catch (error) {
        next(error);
    }
});

router.patch("/:plantId", async (req: Request<UpdatePlantRouteParams, {}, PlantsType>, res: Response<PlantsType>, next: NextFunction) => {
    const compPlants: CompanyPlants = new CompanyPlants("company-sales");

    try {
        const updatedPlant = await compPlants.updatePlant(req.params.plantId, req.body, "PATCH");
        res.json(updatedPlant);
    } catch (error) {
        next(error);
    }
});

router.put("/:plantId", async (req: Request<UpdatePlantRouteParams, {}, PlantsType>, res: Response<PlantsType>, next: NextFunction) => {
    const compPlants: CompanyPlants = new CompanyPlants("company-sales");

    try {
        const updatedPlant = await compPlants.updatePlant(req.params.plantId, req.body, "PUT");
        res.json(updatedPlant);
    } catch (error) {
        next(error);
    }
});

router.delete("/:plantId", async (req: Request<UpdatePlantRouteParams, {}, PlantsType>, res: Response, next: NextFunction) => {
    const compPlants: CompanyPlants = new CompanyPlants("company-sales");

    try {
        await compPlants.deletePlant(req.params.plantId);
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
});

export { router as plantRouter };