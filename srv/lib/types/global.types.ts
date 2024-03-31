import { PlantsType, ProductsType } from "../external/company-sales";
import { BigNumber } from "bignumber.js";

export interface CreatePlantType {
    id: string;
    name: string;
    location?: string;
}

export interface PlantQueryParams {
    location?: string
}

export interface CreateProductType {
    id?: string;
    name: string;
    plant: string;
    price: BigNumber;
    currency?: string | null;
}

export interface ProductQueryParams {
    name?: string;
    plant?: string;
}

export default interface ICompanySales {
    readPlants: (location?: string | null) => Promise<Array<PlantsType>> | Promise<[]>;
    createPlant: (plant: PlantsType) => Promise<PlantsType>;
    readProducts: (name?: string | null, plant?: string | null) => Promise<Array<ProductsType>> | Promise<[]>;
    createProduct: (product: CreateProductType) => Promise<CreateProductType>;
}

export class CustomError extends Error {
    public status: number;

    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}