/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesHeaders } from './SalesHeaders';
import { SalesHeadersRequestBuilder } from './SalesHeadersRequestBuilder';
import { SalesItemsApi } from './SalesItemsApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SalesHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesHeaders<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): SalesHeadersApi<DeSerializersT> {
    return new SalesHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toSalesItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ITEMS: OneToManyLink<
      SalesHeaders<DeSerializersT>,
      DeSerializersT,
      SalesItemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [SalesItemsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TO_SALES_ITEMS: new OneToManyLink('toSalesItems', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = SalesHeaders;

  requestBuilder(): SalesHeadersRequestBuilder<DeSerializersT> {
    return new SalesHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesHeaders<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SalesHeaders<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SalesHeaders, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SalesHeaders, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      SalesHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    TOTAL_PRICE: OrderableEdmTypeField<
      SalesHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      SalesHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_AT: OrderableEdmTypeField<
      SalesHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSalesItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ITEMS: OneToManyLink<
      SalesHeaders<DeSerializersT>,
      DeSerializersT,
      SalesItemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesHeaders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Guid', false),
        /**
         * Static representation of the {@link totalPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PRICE: fieldBuilder.buildEdmTypeField(
          'totalPrice',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdAt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_AT: fieldBuilder.buildEdmTypeField(
          'createdAt',
          'Edm.DateTimeOffset',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesHeaders)
      };
    }

    return this._schema;
  }
}
