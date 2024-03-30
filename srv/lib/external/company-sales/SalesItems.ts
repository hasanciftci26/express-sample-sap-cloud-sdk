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
import type { SalesItemsApi } from './SalesItemsApi';
import { SalesHeaders, SalesHeadersType } from './SalesHeaders';
import { Products, ProductsType } from './Products';

/**
 * This class represents the entity "SalesItems" of service "CompanySales".
 */
export class SalesItems<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesItemsType<T>
{
  /**
   * Technical entity name for SalesItems.
   */
  static _entityName = 'SalesItems';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/odata/v4/company-sales/';
  /**
   * All key fields of the SalesItems entity
   */
  static _keys = ['salesID', 'itemNo'];
  /**
   * Sales Id.
   */
  declare salesId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Item No.
   */
  declare itemNo: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Id.
   * @nullable
   */
  declare productId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Quantity.
   * @nullable
   */
  declare quantity?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Unit Price.
   * @nullable
   */
  declare unitPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SalesHeaders} entity.
   */
  declare toSalesHeader?: SalesHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link Products} entity.
   */
  declare toProduct?: Products<T> | null;

  constructor(_entityApi: SalesItemsApi<T>) {
    super(_entityApi);
  }
}

export interface SalesItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesId: DeserializedType<T, 'Edm.Guid'>;
  itemNo: DeserializedType<T, 'Edm.Int32'>;
  productId?: DeserializedType<T, 'Edm.Guid'> | null;
  quantity?: DeserializedType<T, 'Edm.Int32'> | null;
  unitPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  toSalesHeader?: SalesHeadersType<T> | null;
  toProduct?: ProductsType<T> | null;
}
