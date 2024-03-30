/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  edmToTs,
  entityDeserializer,
  transformReturnValueForComplexTypeList,
  transformReturnValueForEdmType,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  OperationParameter,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { companySales } from './service';
import { ReturnCompanySales_GenerateSalesReport } from './ReturnCompanySales_GenerateSalesReport';

/**
 * Type of the parameters to be passed to {@link generateSalesReport}.
 */
export interface GenerateSalesReportParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Generate Sales Report.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function generateSalesReport<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: GenerateSalesReportParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  GenerateSalesReportParameters<DeSerializersT>,
  ReturnCompanySales_GenerateSalesReport[]
> {
  const params = {};

  return new OperationRequestBuilder(
    '/odata/v4/company-sales/',
    'generateSalesReport',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ReturnCompanySales_GenerateSalesReport)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link updateProductPlant}.
 */
export interface UpdateProductPlantParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Product Id.
   */
  productId?: string | null;
  /**
   * New Plant.
   */
  newPlant?: string | null;
}

/**
 * Update Product Plant.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function updateProductPlant<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: UpdateProductPlantParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  UpdateProductPlantParameters<DeSerializersT>,
  boolean | null
> {
  const params = {
    productId: new OperationParameter(
      'productID',
      'Edm.Guid',
      parameters.productId
    ),
    newPlant: new OperationParameter(
      'newPlant',
      'Edm.String',
      parameters.newPlant
    )
  };

  return new OperationRequestBuilder(
    '/odata/v4/company-sales/',
    'updateProductPlant',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.value, 'Edm.Boolean', deSerializers)
      ),
    params,
    deSerializers,
    'action'
  );
}

export const operations = {
  generateSalesReport,
  updateProductPlant
};
