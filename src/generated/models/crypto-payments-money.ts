/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface CryptoPaymentsMoney
 */
export interface CryptoPaymentsMoney {
  /**
   * Magnitude of the amount, in units of the currency, with a `.`.
   * @type {string}
   * @memberof CryptoPaymentsMoney
   */
  amount: string;
  /**
   * Currency code.
   * @type {string}
   * @memberof CryptoPaymentsMoney
   */
  currency: CryptoPaymentsMoneyCurrencyEnum;
}

export const CryptoPaymentsMoneyCurrencyEnum = {
  Usd: "USD",
  Eth: "ETH",
  Btc: "BTC"
} as const;

export type CryptoPaymentsMoneyCurrencyEnum =
  typeof CryptoPaymentsMoneyCurrencyEnum[keyof typeof CryptoPaymentsMoneyCurrencyEnum];
