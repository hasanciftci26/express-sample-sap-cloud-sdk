/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  OperationRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v4';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  Products,
  Plants,
  SalesHeaders,
  SalesItems,
  GenerateSalesReportParameters,
  UpdateProductPlantParameters,
  ReturnCompanySales_GenerateSalesReport
} from './index';

/**
 * Batch builder for operations supported on the Company Sales.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadCompanySalesRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadCompanySalesRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadCompanySalesRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadCompanySalesRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadCompanySalesRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultCompanySalesPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Company Sales.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteCompanySalesRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteCompanySalesRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteCompanySalesRequestBuilder<DeSerializersT>
    | Array<WriteCompanySalesRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteCompanySalesRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultCompanySalesPath = '/odata/v4/company-sales/';
export type ReadCompanySalesRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Plants<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SalesHeaders<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SalesItems<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Plants<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SalesHeaders<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SalesItems<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      GenerateSalesReportParameters<DeSerializersT>,
      ReturnCompanySales_GenerateSalesReport[]
    >;
export type WriteCompanySalesRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Plants<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Plants<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Plants<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SalesHeaders<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesHeaders<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesHeaders<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SalesItems<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesItems<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesItems<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      UpdateProductPlantParameters<DeSerializersT>,
      boolean | null
    >;
