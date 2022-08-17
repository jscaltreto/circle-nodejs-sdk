/* tslint:disable */
/* eslint-disable */
/**
 * Circle APIs
 * APIs for managing your account balance. These endpoints are available with all Circle APIs.
 *
 * The version of the OpenAPI document: ${version}
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { BasicCancel } from './basic-cancel';
import { BasicPayment } from './basic-payment';
import { BasicRefund } from './basic-refund';
import { FiatMoneyUsd } from './fiat-money-usd';
import { MetadataPhoneEmail } from './metadata-phone-email';
import { PaymentErrorCode } from './payment-error-code';
import { PaymentStatus } from './payment-status';
import { PaymentVerificationResponse } from './payment-verification-response';
import { RequiredAction } from './required-action';
import { RiskEvaluation } from './risk-evaluation';
import { SourceResponse } from './source-response';

/**
 * 
 * @export
 * @interface DetailedPaymentPolymorphic
 */
export interface DetailedPaymentPolymorphic {
    /**
     * Unique system generated identifier for the entity.
     * @type {string}
     * @memberof DetailedPaymentPolymorphic
     */
    'id': string;
    /**
     * Type of the payment object.
     * @type {string}
     * @memberof DetailedPaymentPolymorphic
     */
    'type': DetailedPaymentPolymorphicTypeEnum;
    /**
     * Unique system generated identifier for the merchant.
     * @type {string}
     * @memberof DetailedPaymentPolymorphic
     */
    'merchantId': string;
    /**
     * Unique system generated identifier for the wallet of the merchant.
     * @type {string}
     * @memberof DetailedPaymentPolymorphic
     */
    'merchantWalletId'?: string;
    /**
     * 
     * @type {FiatMoneyUsd}
     * @memberof DetailedPaymentPolymorphic
     */
    'amount': FiatMoneyUsd;
    /**
     * 
     * @type {SourceResponse}
     * @memberof DetailedPaymentPolymorphic
     */
    'source': SourceResponse;
    /**
     * Enumerated description of the payment.
     * @type {string}
     * @memberof DetailedPaymentPolymorphic
     */
    'description'?: DetailedPaymentPolymorphicDescriptionEnum;
    /**
     * 
     * @type {PaymentStatus}
     * @memberof DetailedPaymentPolymorphic
     */
    'status': PaymentStatus;
    /**
     * 
     * @type {RequiredAction}
     * @memberof DetailedPaymentPolymorphic
     */
    'requiredAction'?: RequiredAction;
    /**
     * 
     * @type {PaymentVerificationResponse}
     * @memberof DetailedPaymentPolymorphic
     */
    'verification'?: PaymentVerificationResponse;
    /**
     * 
     * @type {BasicPayment}
     * @memberof DetailedPaymentPolymorphic
     */
    'originalPayment'?: BasicPayment;
    /**
     * 
     * @type {BasicCancel}
     * @memberof DetailedPaymentPolymorphic
     */
    'cancel'?: BasicCancel | null;
    /**
     * 
     * @type {Array<BasicRefund>}
     * @memberof DetailedPaymentPolymorphic
     */
    'refunds'?: Array<BasicRefund> | null;
    /**
     * 
     * @type {FiatMoneyUsd}
     * @memberof DetailedPaymentPolymorphic
     */
    'fees'?: FiatMoneyUsd;
    /**
     * Payment tracking reference. Will be present once known.
     * @type {string}
     * @memberof DetailedPaymentPolymorphic
     */
    'trackingRef'?: string | null;
    /**
     * External network identifier which will be present once provided from the applicable network.   Examples: * **Input/Output Message Accountability Data (IMAD/OMAD)**: unique number given to each FedWire payment when using the Federal Reserve Bank Service which can be used to investigate and track wire transfers. 
     * @type {string}
     * @memberof DetailedPaymentPolymorphic
     */
    'externalRef'?: string;
    /**
     * 
     * @type {PaymentErrorCode}
     * @memberof DetailedPaymentPolymorphic
     */
    'errorCode'?: PaymentErrorCode | null;
    /**
     * 
     * @type {MetadataPhoneEmail}
     * @memberof DetailedPaymentPolymorphic
     */
    'metadata'?: MetadataPhoneEmail;
    /**
     * The channel identifier that can be set for the payment. When not provided, the default channel is used.
     * @type {string}
     * @memberof DetailedPaymentPolymorphic
     */
    'channel'?: string;
    /**
     * 
     * @type {RiskEvaluation}
     * @memberof DetailedPaymentPolymorphic
     */
    'riskEvaluation'?: RiskEvaluation | null;
    /**
     * ISO-8601 UTC date/time format.
     * @type {string}
     * @memberof DetailedPaymentPolymorphic
     */
    'createDate'?: string;
    /**
     * ISO-8601 UTC date/time format.
     * @type {string}
     * @memberof DetailedPaymentPolymorphic
     */
    'updateDate'?: string;
}

export const DetailedPaymentPolymorphicTypeEnum = {
    Payment: 'payment',
    Refund: 'refund',
    Cancel: 'cancel'
} as const;

export type DetailedPaymentPolymorphicTypeEnum = typeof DetailedPaymentPolymorphicTypeEnum[keyof typeof DetailedPaymentPolymorphicTypeEnum];
export const DetailedPaymentPolymorphicDescriptionEnum = {
    Payment: 'Payment'
} as const;

export type DetailedPaymentPolymorphicDescriptionEnum = typeof DetailedPaymentPolymorphicDescriptionEnum[keyof typeof DetailedPaymentPolymorphicDescriptionEnum];

