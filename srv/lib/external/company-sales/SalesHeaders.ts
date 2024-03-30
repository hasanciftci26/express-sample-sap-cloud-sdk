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
import type { SalesHeadersApi } from './SalesHeadersApi';
import { SalesItems, SalesItemsType } from './SalesItems';

/**
 * This class represents the entity "SalesHeaders" of service "CompanySales".
 */
export class SalesHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesHeadersType<T>
{
  /**
   * Technical entity name for SalesHeaders.
   */
  static _entityName = 'SalesHeaders';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/odata/v4/company-sales/';
  /**
   * All key fields of the SalesHeaders entity
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Total Price.
   * @nullable
   */
  declare totalPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created At.
   * @nullable
   */
  declare createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * One-to-many navigation property to the {@link SalesItems} entity.
   */
  declare toSalesItems: SalesItems<T>[];

  constructor(_entityApi: SalesHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface SalesHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  totalPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  toSalesItems: SalesItemsType<T>[];
}
