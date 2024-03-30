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
import { SalesHeaders } from './SalesHeaders';

/**
 * Request builder class for operations supported on the {@link SalesHeaders} entity.
 */
export class SalesHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `SalesHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `SalesHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<SalesHeaders<T>, T> {
    return new GetAllRequestBuilder<SalesHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesHeaders`.
   */
  create(entity: SalesHeaders<T>): CreateRequestBuilder<SalesHeaders<T>, T> {
    return new CreateRequestBuilder<SalesHeaders<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SalesHeaders` entity based on its keys.
   * @param id Key property. See {@link SalesHeaders.id}.
   * @returns A request builder for creating requests to retrieve one `SalesHeaders` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<SalesHeaders<T>, T> {
    return new GetByKeyRequestBuilder<SalesHeaders<T>, T>(this.entityApi, {
      ID: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesHeaders`.
   */
  update(entity: SalesHeaders<T>): UpdateRequestBuilder<SalesHeaders<T>, T> {
    return new UpdateRequestBuilder<SalesHeaders<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesHeaders`.
   * @param id Key property. See {@link SalesHeaders.id}.
   * @returns A request builder for creating requests that delete an entity of type `SalesHeaders`.
   */
  delete(id: string): DeleteRequestBuilder<SalesHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesHeaders` by taking the entity as a parameter.
   */
  delete(entity: SalesHeaders<T>): DeleteRequestBuilder<SalesHeaders<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<SalesHeaders<T>, T> {
    return new DeleteRequestBuilder<SalesHeaders<T>, T>(
      this.entityApi,
      idOrEntity instanceof SalesHeaders ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
