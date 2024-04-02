import { companySales, PlantsType } from "../external/company-sales";
import { desc } from "@sap-cloud-sdk/odata-v4";
import DataCheck from "./data-check";
import { CustomError, UpdateMethodType } from "../types/global.types";
import { ErrorWithCause } from "@sap-cloud-sdk/util";

export default class CompanyPlants extends DataCheck {
    private destination: string;

    constructor(destination: string) {
        super();
        this.destination = destination;
    }

    public async readPlants(plantId?: string, location?: string): Promise<Array<PlantsType> | PlantsType> {
        const { plantsApi } = companySales();

        try {
            if (plantId) {
                const plant: PlantsType = await plantsApi.requestBuilder()
                    .getByKey(plantId)
                    .execute({ destinationName: this.destination });

                return plant;
            } else {
                if (location) {
                    const plants = await plantsApi.requestBuilder()
                        .getAll()
                        .filter(
                            plantsApi.schema.LOCATION.equals(location)
                        )
                        .orderBy(desc(plantsApi.schema.ID))
                        .execute({ destinationName: this.destination });

                    return plants;
                } else {
                    const plants = await plantsApi.requestBuilder().getAll().execute({ destinationName: this.destination });
                    return plants;
                }
            }
        } catch (error) {
            if (error instanceof ErrorWithCause) {
                const generatedError = super.generateError(error.cause.message);
                throw new CustomError(generatedError.message, generatedError.status);
            } else {
                throw error;
            }
        }
    }

    public async createPlant(newPlant: PlantsType): Promise<PlantsType> {
        const { plantsApi } = companySales();

        try {
            super.checkMandatoryFields("Plant", ["id", "name"], newPlant);
            const newPlantEntity = plantsApi.entityBuilder().fromJson(newPlant);
            await plantsApi.requestBuilder().create(newPlantEntity).execute({ destinationName: this.destination });
        } catch (error) {
            if (error instanceof ErrorWithCause) {
                const generatedError = super.generateError(error.cause.message);
                throw new CustomError(generatedError.message, generatedError.status);
            } else {
                throw error;
            }
        }

        return newPlant;
    }

    public async updatePlant(plantId: string, updatedPlant: PlantsType, updateMethod: UpdateMethodType): Promise<PlantsType> {
        const { plantsApi } = companySales();

        try {
            const currentPlant = await plantsApi.requestBuilder().getByKey(plantId).execute({ destinationName: this.destination });

            if (updateMethod === "PUT") {
                super.checkMandatoryFields("Plant", ["name", "location"], updatedPlant);
                currentPlant.name = updatedPlant.name;
                currentPlant.location = updatedPlant.location;

                await plantsApi.requestBuilder()
                    .update(currentPlant)
                    .replaceWholeEntityWithPut()
                    .execute({ destinationName: this.destination });

                return currentPlant;
            } else {
                currentPlant.name = updatedPlant.name || currentPlant.name;
                currentPlant.location = updatedPlant.location || currentPlant.location;

                await plantsApi.requestBuilder().update(currentPlant).execute({ destinationName: this.destination });
                return currentPlant;
            }
        } catch (error) {
            if (error instanceof ErrorWithCause) {
                const generatedError = super.generateError(error.cause.message);
                throw new CustomError(generatedError.message, generatedError.status);
            } else {
                throw error;
            }
        }
    }

    public async deletePlant(plantId: string): Promise<void> {
        const { plantsApi } = companySales();

        try {
            const currentPlant = await plantsApi.requestBuilder().getByKey(plantId).execute({ destinationName: this.destination });
            await plantsApi.requestBuilder().delete(currentPlant).execute({ destinationName: this.destination });
        } catch (error) {
            if (error instanceof ErrorWithCause) {
                const generatedError = super.generateError(error.cause.message);
                throw new CustomError(generatedError.message, generatedError.status);
            } else {
                throw error;
            }
        }
    }
}