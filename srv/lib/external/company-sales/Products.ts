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
import type { ProductsApi } from './ProductsApi';
import { Plants, PlantsType } from './Plants';

/**
 * This class represents the entity "Products" of service "CompanySales".
 */
export class Products<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductsType<T>
{
  /**
   * Technical entity name for Products.
   */
  static _entityName = 'Products';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/odata/v4/company-sales/';
  /**
   * All key fields of the Products entity
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Name.
   * Maximum length: 100.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plant.
   * Maximum length: 4.
   * @nullable
   */
  declare plant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price.
   * @nullable
   */
  declare price?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Plants} entity.
   */
  declare toPlant?: Plants<T> | null;

  constructor(_entityApi: ProductsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductsType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Guid'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  plant?: DeserializedType<T, 'Edm.String'> | null;
  price?: DeserializedType<T, 'Edm.Decimal'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  toPlant?: PlantsType<T> | null;
}
