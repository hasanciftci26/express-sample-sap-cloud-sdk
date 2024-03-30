/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesItems } from './SalesItems';
import { SalesItemsRequestBuilder } from './SalesItemsRequestBuilder';
import { SalesHeadersApi } from './SalesHeadersApi';
import { ProductsApi } from './ProductsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SalesItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesItems<DeSerializersT>, DeSerializersT>
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
  ): SalesItemsApi<DeSerializersT> {
    return new SalesItemsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toSalesHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_HEADER: OneToOneLink<
      SalesItems<DeSerializersT>,
      DeSerializersT,
      SalesHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT: OneToOneLink<
      SalesItems<DeSerializersT>,
      DeSerializersT,
      ProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SalesHeadersApi<DeSerializersT>, ProductsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TO_SALES_HEADER: new OneToOneLink('toSalesHeader', this, linkedApis[0]),
      TO_PRODUCT: new OneToOneLink('toProduct', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = SalesItems;

  requestBuilder(): SalesItemsRequestBuilder<DeSerializersT> {
    return new SalesItemsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesItems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesItems<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SalesItems<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SalesItems, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SalesItems, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ID: OrderableEdmTypeField<
      SalesItems<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ITEM_NO: OrderableEdmTypeField<
      SalesItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_ID: OrderableEdmTypeField<
      SalesItems<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      SalesItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      SalesItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      SalesItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_HEADER: OneToOneLink<
      SalesItems<DeSerializersT>,
      DeSerializersT,
      SalesHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT: OneToOneLink<
      SalesItems<DeSerializersT>,
      DeSerializersT,
      ProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesItems<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField('salesID', 'Edm.Guid', false),
        /**
         * Static representation of the {@link itemNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NO: fieldBuilder.buildEdmTypeField('itemNo', 'Edm.Int32', false),
        /**
         * Static representation of the {@link productId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'productID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField('quantity', 'Edm.Int32', true),
        /**
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'unitPrice',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesItems)
      };
    }

    return this._schema;
  }
}
