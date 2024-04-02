import { Products, ProductsType, batch } from "../external/company-sales";
import DataCheck from "./data-check";
import { companySales } from "../external/company-sales";
import { BatchResponse, GetByKeyRequestBuilder, desc, or } from "@sap-cloud-sdk/odata-v4";
import { CustomError, UpdateMethodType, UpdateProductPlant, UpdateProductRouteParams } from "../types/global.types";
import { ErrorWithCause } from "@sap-cloud-sdk/util";

export default class CompanyProducts extends DataCheck {
    private destination: string;

    constructor(destination: string) {
        super();
        this.destination = destination;
    }

    public async readProducts(productId?: string, productName?: string, plant?: string): Promise<ProductsType[] | ProductsType> {
        const { productsApi } = companySales();

        try {
            if (productId) {
                const product: ProductsType = await productsApi.requestBuilder()
                    .getByKey(productId)
                    .execute({ destinationName: this.destination });

                return product;
            } else {
                if (productName && plant) {
                    const products = await productsApi.requestBuilder()
                        .getAll()
                        .filter(
                            or(
                                productsApi.schema.NAME.equals(productName),
                                productsApi.schema.PLANT.equals(plant)
                            )
                        )
                        .orderBy(desc(productsApi.schema.PRICE))
                        .execute({ destinationName: this.destination });

                    return products;
                } else if (productName) {
                    const products = await productsApi.requestBuilder()
                        .getAll()
                        .filter(
                            or(
                                productsApi.schema.NAME.equals(productName)
                            )
                        )
                        .orderBy(desc(productsApi.schema.PRICE))
                        .execute({ destinationName: this.destination });

                    return products;
                } else if (plant) {
                    const products = await productsApi.requestBuilder()
                        .getAll()
                        .filter(
                            or(
                                productsApi.schema.PLANT.equals(plant)
                            )
                        )
                        .orderBy(desc(productsApi.schema.PRICE))
                        .execute({ destinationName: this.destination });

                    return products;
                }
                else {
                    const products = await productsApi.requestBuilder().getAll().execute({ destinationName: this.destination });
                    return products;
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

    public async createProduct(newProduct: ProductsType): Promise<ProductsType> {
        const { productsApi } = companySales();

        try {
            super.checkMandatoryFields("Product", ["name", "plant", "price"], newProduct);
            const newProductEntity = productsApi.entityBuilder().fromJson(newProduct);
            const createdProduct = await productsApi.requestBuilder().create(newProductEntity).execute({ destinationName: this.destination });

            newProduct.id = createdProduct.id;
            newProduct.currency = createdProduct.currency;
        } catch (error) {
            if (error instanceof ErrorWithCause) {
                const generatedError = super.generateError(error.cause.message);
                throw new CustomError(generatedError.message, generatedError.status);
            } else {
                throw error;
            }
        }

        return newProduct;
    }

    public async updateProduct(productId: string, updatedProduct: ProductsType, updateMethod: UpdateMethodType): Promise<ProductsType> {
        const { productsApi } = companySales();

        try {
            const currentProduct = await productsApi.requestBuilder().getByKey(productId).execute({ destinationName: this.destination });

            if (updateMethod === "PUT") {
                super.checkMandatoryFields("Product", ["name", "plant", "price", "currency"], updatedProduct);
                currentProduct.name = updatedProduct.name;
                currentProduct.plant = updatedProduct.plant;
                currentProduct.plant = updatedProduct.plant;
                currentProduct.currency = updatedProduct.currency;

                await productsApi.requestBuilder()
                    .update(currentProduct)
                    .replaceWholeEntityWithPut()
                    .execute({ destinationName: this.destination });

                return currentProduct;
            } else {
                currentProduct.name = updatedProduct.name || currentProduct.name;
                currentProduct.plant = updatedProduct.plant || currentProduct.plant;
                currentProduct.price = updatedProduct.price || currentProduct.price;
                currentProduct.currency = updatedProduct.currency || currentProduct.currency;

                await productsApi.requestBuilder().update(currentProduct).execute({ destinationName: this.destination });
                return currentProduct;
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

    public async deleteProduct(productId: string): Promise<void> {
        const { productsApi } = companySales();

        try {
            const currentProduct = await productsApi.requestBuilder().getByKey(productId).execute({ destinationName: this.destination });
            await productsApi.requestBuilder().delete(currentProduct).execute({ destinationName: this.destination });
        } catch (error) {
            if (error instanceof ErrorWithCause) {
                const generatedError = super.generateError(error.cause.message);
                throw new CustomError(generatedError.message, generatedError.status);
            } else {
                throw error;
            }
        }
    }

    public async readProductsBatch(productIDs: Array<UpdateProductRouteParams>): Promise<Array<ProductsType>> {
        const { productsApi } = companySales();
        const productRequests: GetByKeyRequestBuilder<Products>[] = [];

        productIDs.forEach((product) => {
            productRequests.push(
                productsApi.requestBuilder().getByKey(product.productId)
            );
        });

        const batchResponses = await batch(productRequests)
            .withSubRequestPathType("relativeToEntity")
            .execute({ destinationName: this.destination });

        // Error handling
        if (batchResponses.some(response => !response.isSuccess())) {
            throw new CustomError("Some of the batch subrequests were not successful.", 500);
        }

        return batchResponses.reduce(
            (products: Products[], response: BatchResponse) => {
                if (response.isReadResponse()) {
                    // Transform response to an instance of Products
                    const [product] = response.as(productsApi);
                    products.push(product);
                }
                return products;
            },
            []
        );
    }

    public async updateProductPlant(productId: string, newProductPlant: UpdateProductPlant): Promise<ProductsType> {
        const { productsApi, operations: { updateProductPlant } } = companySales();

        try {
            await updateProductPlant({ productId: productId, newPlant: newProductPlant.plant }).execute({ destinationName: this.destination });
            const updatedProduct = await productsApi.requestBuilder().getByKey(productId).execute({ destinationName: this.destination });
            return updatedProduct;
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