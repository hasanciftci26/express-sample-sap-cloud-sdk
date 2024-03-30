/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { SalesItems } from './SalesItems';

/**
 * Request builder class for operations supported on the {@link SalesItems} entity.
 */
export class SalesItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesItems<T>, T> {
  /**
   * Returns a request builder for querying all `SalesItems` entities.
   * @returns A request builder for creating requests to retrieve all `SalesItems` entities.
   */
  getAll(): GetAllRequestBuilder<SalesItems<T>, T> {
    return new GetAllRequestBuilder<SalesItems<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesItems`.
   */
  create(entity: SalesItems<T>): CreateRequestBuilder<SalesItems<T>, T> {
    return new CreateRequestBuilder<SalesItems<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SalesItems` entity based on its keys.
   * @param salesId Key property. See {@link SalesItems.salesId}.
   * @param itemNo Key property. See {@link SalesItems.itemNo}.
   * @returns A request builder for creating requests to retrieve one `SalesItems` entity based on its keys.
   */
  getByKey(
    salesId: DeserializedType<T, 'Edm.Guid'>,
    itemNo: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SalesItems<T>, T> {
    return new GetByKeyRequestBuilder<SalesItems<T>, T>(this.entityApi, {
      salesID: salesId,
      itemNo: itemNo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesItems`.
   */
  update(entity: SalesItems<T>): UpdateRequestBuilder<SalesItems<T>, T> {
    return new UpdateRequestBuilder<SalesItems<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesItems`.
   * @param salesId Key property. See {@link SalesItems.salesId}.
   * @param itemNo Key property. See {@link SalesItems.itemNo}.
   * @returns A request builder for creating requests that delete an entity of type `SalesItems`.
   */
  delete(
    salesId: string,
    itemNo: number
  ): DeleteRequestBuilder<SalesItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesItems` by taking the entity as a parameter.
   */
  delete(entity: SalesItems<T>): DeleteRequestBuilder<SalesItems<T>, T>;
  delete(
    salesIdOrEntity: any,
    itemNo?: number
  ): DeleteRequestBuilder<SalesItems<T>, T> {
    return new DeleteRequestBuilder<SalesItems<T>, T>(
      this.entityApi,
      salesIdOrEntity instanceof SalesItems
        ? salesIdOrEntity
        : {
            salesID: salesIdOrEntity!,
            itemNo: itemNo!
          }
    );
  }
}
