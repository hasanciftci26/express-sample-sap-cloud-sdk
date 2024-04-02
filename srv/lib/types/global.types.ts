export type UpdateMethodType = "PATCH" | "PUT";

export interface ReadPlantRouteParams {
    plantId?: string;
}

export interface ReadPlantQueryParams {
    location?: string;
}

export interface UpdatePlantRouteParams {
    plantId: string;
}

export interface ReadProductRouteParams {
    productId?: string;
}

export interface ReadProductQueryParams {
    productName?: string;
    plant?: string;
}

export interface UpdateProductRouteParams {
    productId: string;
}

export interface SalesRouteParams {
    salesId: string;
}

export interface GeneratedError {
    message: string;
    status: number;
}

export interface IncomingErrorMessage {
    code: string;
    message: string;
}

export class CustomError extends Error {
    public status: number;

    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}