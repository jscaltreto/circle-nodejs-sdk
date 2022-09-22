/* tslint:disable */
/* eslint-disable */
/**
 * All Circle APIs
 * Circle\'s General, Core Functionality, Payments, Payouts, and Accounts APIs bundled into one OpenAPI Specification.
 *
 * The version of the OpenAPI document: 1.0.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface PaymentIntentFees
 */
export interface PaymentIntentFees {
  /**
   *
   * @type {string}
   * @memberof PaymentIntentFees
   */
  type: PaymentIntentFeesTypeEnum;
  /**
   * Magnitude of the amount, in units of the currency, with a `.`.
   * @type {string}
   * @memberof PaymentIntentFees
   */
  amount: string;
  /**
   * Currency code.
   * @type {string}
   * @memberof PaymentIntentFees
   */
  currency: PaymentIntentFeesCurrencyEnum;
}

export const PaymentIntentFeesTypeEnum = {
  BlockchainLeaseFee: "blockchainLeaseFee",
  TotalPaymentFees: "totalPaymentFees"
} as const;

export type PaymentIntentFeesTypeEnum =
  typeof PaymentIntentFeesTypeEnum[keyof typeof PaymentIntentFeesTypeEnum];
export const PaymentIntentFeesCurrencyEnum = {
  Usd: "USD"
} as const;

export type PaymentIntentFeesCurrencyEnum =
  typeof PaymentIntentFeesCurrencyEnum[keyof typeof PaymentIntentFeesCurrencyEnum];