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
import { Plants } from './Plants';

/**
 * Request builder class for operations supported on the {@link Plants} entity.
 */
export class PlantsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Plants<T>, T> {
  /**
   * Returns a request builder for querying all `Plants` entities.
   * @returns A request builder for creating requests to retrieve all `Plants` entities.
   */
  getAll(): GetAllRequestBuilder<Plants<T>, T> {
    return new GetAllRequestBuilder<Plants<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Plants` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Plants`.
   */
  create(entity: Plants<T>): CreateRequestBuilder<Plants<T>, T> {
    return new CreateRequestBuilder<Plants<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Plants` entity based on its keys.
   * @param id Key property. See {@link Plants.id}.
   * @returns A request builder for creating requests to retrieve one `Plants` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Plants<T>, T> {
    return new GetByKeyRequestBuilder<Plants<T>, T>(this.entityApi, { ID: id });
  }

  /**
   * Returns a request builder for updating an entity of type `Plants`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Plants`.
   */
  update(entity: Plants<T>): UpdateRequestBuilder<Plants<T>, T> {
    return new UpdateRequestBuilder<Plants<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Plants`.
   * @param id Key property. See {@link Plants.id}.
   * @returns A request builder for creating requests that delete an entity of type `Plants`.
   */
  delete(id: string): DeleteRequestBuilder<Plants<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Plants`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Plants` by taking the entity as a parameter.
   */
  delete(entity: Plants<T>): DeleteRequestBuilder<Plants<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<Plants<T>, T> {
    return new DeleteRequestBuilder<Plants<T>, T>(
      this.entityApi,
      idOrEntity instanceof Plants ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
