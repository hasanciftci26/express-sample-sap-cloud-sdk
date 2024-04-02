import { ReturnCompanySales_GenerateSalesReport, SalesHeadersType, SalesItems, SalesItemsType, batch, changeset, companySales } from "../external/company-sales";
import DataCheck from "./data-check";
import { ErrorWithCause } from "@sap-cloud-sdk/util";
import { CustomError } from "../types/global.types";
import { CreateRequestBuilder } from "@sap-cloud-sdk/odata-v4";

export default class CompanySales extends DataCheck {
    private destination: string;

    constructor(destination: string) {
        super();
        this.destination = destination;
    }

    public async generateSalesReport(): Promise<ReturnCompanySales_GenerateSalesReport[]> {
        const { operations: { generateSalesReport } } = companySales();

        try {
            const salesReport = await generateSalesReport({}).execute({ destinationName: this.destination });
            return salesReport;
        } catch (error) {
            if (error instanceof ErrorWithCause) {
                const generatedError = super.generateError(error.cause.message);
                throw new CustomError(generatedError.message, generatedError.status);
            } else {
                throw error;
            }
        }
    }

    public async createSales(newSales: SalesHeadersType): Promise<SalesHeadersType> {
        const { salesHeadersApi } = companySales();

        try {
            super.checkMandatoryFields("Sales Header", ["currency"], newSales);
            super.checkComputedFields(["totalPrice"], newSales);

            if (!newSales.toSalesItems) {
                throw new CustomError("At least 1 item must be created!", 422);
            } else {
                if (!newSales.toSalesItems.length) {
                    throw new CustomError("At least 1 item must be created!", 422);
                }

                newSales.toSalesItems.forEach((item) => {
                    super.checkMandatoryFields("Sales Items", ["itemNo", "productId", "quantity"], item);
                    super.checkComputedFields(["unitPrice", "currency"], item);
                });
            }

            const newSalesEntity = salesHeadersApi.entityBuilder().fromJson(newSales);
            const createdSales = await salesHeadersApi.requestBuilder().create(newSalesEntity).execute({ destinationName: this.destination });

            newSales.id = createdSales.id;
            newSales.currency = createdSales.currency;
            newSales.totalPrice = createdSales.totalPrice;

            createdSales.toSalesItems.forEach((item) => {
                const createdItem = newSales.toSalesItems.find(salesItem => salesItem.itemNo === item.itemNo);

                if (createdItem) {
                    createdItem.salesId = item.salesId;
                    createdItem.currency = item.currency;
                }
            });
        } catch (error) {
            if (error instanceof ErrorWithCause) {
                const generatedError = super.generateError(error.cause.message);
                throw new CustomError(generatedError.message, generatedError.status);
            } else {
                throw error;
            }
        }

        return newSales;
    }

    public async createSalesItems(salesId: string, salesItems: SalesItemsType[]): Promise<SalesItemsType[]> {
        const { salesHeadersApi, salesItemsApi } = companySales();

        try {
            const salesHeader = await salesHeadersApi.requestBuilder().getByKey(salesId).execute({ destinationName: this.destination });
            const salesItemRequests: CreateRequestBuilder<SalesItems>[] = [];

            salesItems.forEach((item) => {
                const salesItemEntity = salesItemsApi.entityBuilder().fromJson(item);
                salesItemRequests.push(
                    salesItemsApi.requestBuilder().create(salesItemEntity).asChildOf(salesHeader, salesHeadersApi.schema.TO_SALES_ITEMS)
                )
            });

            const batchResponse = await batch(
                changeset(...salesItemRequests)
            )
            .withSubRequestPathType("relativeToEntity")
            .execute({ destinationName: this.destination });

            const changesetResponse = batchResponse[0];

            if (changesetResponse.isWriteResponses()) {
                return changesetResponse.responses.map(response => response.as!(salesItemsApi));
            }

            throw new CustomError(changesetResponse.body.error.message, changesetResponse.body.error.code);
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