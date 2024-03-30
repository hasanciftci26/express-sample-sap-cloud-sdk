/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { PlantsApi } from './PlantsApi';

/**
 * This class represents the entity "Plants" of service "CompanySales".
 */
export class Plants<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PlantsType<T>
{
  /**
   * Technical entity name for Plants.
   */
  static _entityName = 'Plants';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/odata/v4/company-sales/';
  /**
   * All key fields of the Plants entity
   */
  static _keys = ['ID'];
  /**
   * Id.
   * Maximum length: 4.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 40.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location.
   * Maximum length: 40.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PlantsApi<T>) {
    super(_entityApi);
  }
}

export interface PlantsType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  location?: DeserializedType<T, 'Edm.String'> | null;
}
