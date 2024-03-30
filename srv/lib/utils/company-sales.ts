import ICompanySales, { Plants } from "../types/global.types";

export default class CompanySales implements ICompanySales {
    public async readAllPlants() {
        const test: Plants[] = [{ ID: "1", name: "test", location: "5" }];
        return test;
    }
}