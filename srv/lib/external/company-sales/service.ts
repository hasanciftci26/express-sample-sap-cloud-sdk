/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductsApi } from './ProductsApi';
import { PlantsApi } from './PlantsApi';
import { SalesHeadersApi } from './SalesHeadersApi';
import { SalesItemsApi } from './SalesItemsApi';
import {
  generateSalesReport,
  updateProductPlant,
  GenerateSalesReportParameters,
  UpdateProductPlantParameters
} from './operations';
import { BigNumber } from 'bignumber.js';
import { Moment, Duration } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v4';
import { batch, changeset } from './BatchRequest';

export function companySales<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateT = Moment,
  DurationT = Duration,
  TimeOfDayT = Time,
  EnumT = any
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateT,
      DurationT,
      TimeOfDayT,
      EnumT
    >
  > = defaultDeSerializers as any
): CompanySales<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateT,
    DurationT,
    TimeOfDayT,
    EnumT
  >
> {
  return new CompanySales(mergeDefaultDeSerializersWith(deSerializers));
}
class CompanySales<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get productsApi(): ProductsApi<DeSerializersT> {
    const api = this.initApi('productsApi', ProductsApi);
    const linkedApis = [this.initApi('plantsApi', PlantsApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get plantsApi(): PlantsApi<DeSerializersT> {
    return this.initApi('plantsApi', PlantsApi);
  }

  get salesHeadersApi(): SalesHeadersApi<DeSerializersT> {
    const api = this.initApi('salesHeadersApi', SalesHeadersApi);
    const linkedApis = [this.initApi('salesItemsApi', SalesItemsApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesItemsApi(): SalesItemsApi<DeSerializersT> {
    const api = this.initApi('salesItemsApi', SalesItemsApi);
    const linkedApis = [
      this.initApi('salesHeadersApi', SalesHeadersApi),
      this.initApi('productsApi', ProductsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get operations() {
    return {
      generateSalesReport: (
        parameter: GenerateSalesReportParameters<DeSerializersT>
      ) => generateSalesReport(parameter, this.deSerializers),
      updateProductPlant: (
        parameter: UpdateProductPlantParameters<DeSerializersT>
      ) => updateProductPlant(parameter, this.deSerializers)
    };
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
