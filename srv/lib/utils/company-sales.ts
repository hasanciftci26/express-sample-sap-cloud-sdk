import ICompanySales, { CreateProductType, CustomError } from "../types/global.types";
import { companySales, PlantsType, Plants, Products, ProductsType } from "../external/company-sales";
import { and, or } from "@sap-cloud-sdk/odata-v4";

export default class CompanySales implements ICompanySales {
    private destinationName: string;

    constructor(destinationName: string) {
        this.destinationName = destinationName;
    }

    public async readPlants(location: string | null = null) {
        const { plantsApi } = companySales();
        let plants: PlantsType[] | [] = [];

        try {
            if (location) {
                plants = await plantsApi.requestBuilder()
                    .getAll()
                    .filter(
                        plantsApi.schema.LOCATION.equals(location)
                    )
                    .execute({ destinationName: this.destinationName });
            } else {
                plants = await plantsApi.requestBuilder().getAll().execute({ destinationName: this.destinationName });
            }
        } catch (error) {
            throw error;
        }

        return plants;
    }

    public async createPlant(plant: PlantsType) {
        const { plantsApi } = companySales();
        const buildPlant: Plants = plantsApi.entityBuilder()
            .id(plant.id)
            .name(plant.name)
            .location(plant.location)
            .build();

        try {
            this.checkMandatoryFields(["id", "name"], plant);
            await plantsApi.requestBuilder().create(buildPlant).execute({ destinationName: this.destinationName });
        } catch (error) {
            throw error;
        }

        return plant;
    }

    public async readProducts(name: string | null = null, plant: string | null = null) {
        const { productsApi, plantsApi } = companySales();
        let products: ProductsType[] | [] = [];

        try {
            if (name || plant) {
                products = await productsApi.requestBuilder()
                    .getAll()
                    .select(
                        productsApi.schema.ID,
                        productsApi.schema.NAME,
                        productsApi.schema.PLANT,
                        productsApi.schema.PRICE,
                        productsApi.schema.CURRENCY
                    )
                    .filter(
                        or(
                            productsApi.schema.NAME.equals(name),
                            productsApi.schema.PLANT.equals(plant)
                        )
                    )
                    .expand(productsApi.schema.TO_PLANT.select(
                        plantsApi.schema.NAME
                    ))
                    .execute({ destinationName: this.destinationName });
            } else {
                products = await productsApi.requestBuilder()
                    .getAll()
                    .execute({ destinationName: this.destinationName });
            }
        } catch (error) {
            throw error;
        }

        return products;
    }

    public async createProduct(product: CreateProductType) {
        const { productsApi } = companySales();
        const buildProduct: Products = productsApi.entityBuilder().fromJson(product);

        try {
            this.checkMandatoryFields(["name", "plant", "price"], product);
            const newProduct = await productsApi.requestBuilder().create(buildProduct).execute({ destinationName: this.destinationName });
            product.id = newProduct.id;
            product.currency = newProduct.currency;
        } catch (error) {
            throw error;
        }

        return product;
    }

    private checkMandatoryFields(fields: string[], requestBody: object) {
        let missingMandatoryFields: string[] = [];

        fields.forEach((field) => {
            if (!requestBody.hasOwnProperty(field)) {
                missingMandatoryFields.push(field);
            }
        });

        if (missingMandatoryFields.length) {
            const errorMessage = "Missing mandatory field" + (missingMandatoryFields.length === 1 ? ": " : "s: ") + missingMandatoryFields.join();
            throw new CustomError(errorMessage, 422);
        }
    }
}