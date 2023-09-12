/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * A blockchain that a given currency is available on.
 * @export
 * @enum {string}
 */

export const Chain = {
  Algo: "ALGO",
  Arb: "ARB",
  Avax: "AVAX",
  Base: "BASE",
  Btc: "BTC",
  Eth: "ETH",
  Flow: "FLOW",
  Hbar: "HBAR",
  Matic: "MATIC",
  Noble: "NOBLE",
  Op: "OP",
  Sol: "SOL",
  Trx: "TRX",
  Xlm: "XLM"
} as const;

export type Chain = typeof Chain[keyof typeof Chain];
