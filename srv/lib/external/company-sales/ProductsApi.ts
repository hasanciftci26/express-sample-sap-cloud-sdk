/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Products } from './Products';
import { ProductsRequestBuilder } from './ProductsRequestBuilder';
import { PlantsApi } from './PlantsApi';
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
export class ProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Products<DeSerializersT>, DeSerializersT>
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
  ): ProductsApi<DeSerializersT> {
    return new ProductsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PLANT: OneToOneLink<
      Products<DeSerializersT>,
      DeSerializersT,
      PlantsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [PlantsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TO_PLANT: new OneToOneLink('toPlant', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Products;

  requestBuilder(): ProductsRequestBuilder<DeSerializersT> {
    return new ProductsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Products<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Products<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Products<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Products, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Products, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANT: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PLANT: OneToOneLink<
      Products<DeSerializersT>,
      DeSerializersT,
      PlantsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Products<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
        /**
         * Static representation of the {@link plant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANT: fieldBuilder.buildEdmTypeField('plant', 'Edm.String', true),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('price', 'Edm.Decimal', true),
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
        ALL_FIELDS: new AllFields('*', Products)
      };
    }

    return this._schema;
  }
}
