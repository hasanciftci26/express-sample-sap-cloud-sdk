import { CustomError, GeneratedError, IncomingErrorMessage } from "../types/global.types";

export default class DataCheck {
    protected checkMandatoryFields(context: string, fields: string[], requestBody: object) {
        let missingMandatoryFields: string[] = [];

        fields.forEach((field) => {
            if (!requestBody.hasOwnProperty(field)) {
                missingMandatoryFields.push(field);
            }
        });

        if (missingMandatoryFields.length) {
            const errorMessage = context + " missing mandatory field" + (missingMandatoryFields.length === 1 ? ": " : "s: ") + missingMandatoryFields.join(", ");
            throw new CustomError(errorMessage, 422);
        }
    }

    protected checkComputedFields(fields: string[], requestBody: object) {
        let computedFields: string[] = [];

        fields.forEach((field) => {
            if (requestBody.hasOwnProperty(field)) {
                computedFields.push(field);
            }
        });

        if (computedFields.length) {
            const errorMessage = "Following fields are computed by the system and must not be included into the body. Fields: " + computedFields.join(", ");
            throw new CustomError(errorMessage, 422);
        }
    }

    protected generateError(errorMessage: string): GeneratedError {
        const messageLines = errorMessage.split("\n");

        if (messageLines.length > 1) {
            try {
                const messageContent: IncomingErrorMessage = JSON.parse(messageLines[1]);

                if (messageContent.hasOwnProperty("code") && messageContent.hasOwnProperty("message")) {
                    return {
                        status: parseInt(messageContent.code),
                        message: messageContent.message
                    };
                } else {
                    return {
                        message: errorMessage,
                        status: 500
                    };
                }
            } catch (error) {
                return {
                    message: errorMessage,
                    status: 500
                };
            }
        } else {
            return {
                message: errorMessage,
                status: 500
            };
        }
    }
}