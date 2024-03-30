/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * ReturnCompanySales_GenerateSalesReport
 */
export interface ReturnCompanySales_GenerateSalesReport<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Sales Id.
   * @nullable
   */
  salesId?: DeserializedType<DeSerializersT, 'Edm.Guid'>;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Product Id.
   * @nullable
   */
  productId?: DeserializedType<DeSerializersT, 'Edm.Guid'>;
  /**
   * Product Name.
   * @nullable
   */
  productName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Plant.
   * @nullable
   */
  plant?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Plant Name.
   * @nullable
   */
  plantName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Plant Location.
   * @nullable
   */
  plantLocation?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Price.
   * @nullable
   */
  price?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * ReturnCompanySales_GenerateSalesReportField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReturnCompanySales_GenerateSalesReportField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ReturnCompanySales_GenerateSalesReport,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ReturnCompanySales_GenerateSalesReport.salesId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Guid',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('salesID', 'Edm.Guid', true);
  /**
   * Representation of the {@link ReturnCompanySales_GenerateSalesReport.itemNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('itemNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReturnCompanySales_GenerateSalesReport.productId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  productId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Guid',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('productID', 'Edm.Guid', true);
  /**
   * Representation of the {@link ReturnCompanySales_GenerateSalesReport.productName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  productName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('productName', 'Edm.String', true);
  /**
   * Representation of the {@link ReturnCompanySales_GenerateSalesReport.plant} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plant: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('plant', 'Edm.String', true);
  /**
   * Representation of the {@link ReturnCompanySales_GenerateSalesReport.plantName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plantName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('plantName', 'Edm.String', true);
  /**
   * Representation of the {@link ReturnCompanySales_GenerateSalesReport.plantLocation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plantLocation: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('plantLocation', 'Edm.String', true);
  /**
   * Representation of the {@link ReturnCompanySales_GenerateSalesReport.price} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('price', 'Edm.Decimal', true);
  /**
   * Representation of the {@link ReturnCompanySales_GenerateSalesReport.currency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('currency', 'Edm.String', true);
  /**
   * Representation of the {@link ReturnCompanySales_GenerateSalesReport.quantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('quantity', 'Edm.Int32', true);

  /**
   * Creates an instance of ReturnCompanySales_GenerateSalesReportField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      ReturnCompanySales_GenerateSalesReport,
      fieldOptions
    );
  }
}

export namespace ReturnCompanySales_GenerateSalesReport {
  /**
   * Metadata information on all properties of the `ReturnCompanySales_GenerateSalesReport` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReturnCompanySales_GenerateSalesReport>[] =
    [
      {
        originalName: 'salesID',
        name: 'salesId',
        type: 'Edm.Guid',
        isCollection: false
      },
      {
        originalName: 'itemNo',
        name: 'itemNo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'productID',
        name: 'productId',
        type: 'Edm.Guid',
        isCollection: false
      },
      {
        originalName: 'productName',
        name: 'productName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'plant',
        name: 'plant',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'plantName',
        name: 'plantName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'plantLocation',
        name: 'plantLocation',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'price',
        name: 'price',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'currency',
        name: 'currency',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'quantity',
        name: 'quantity',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
