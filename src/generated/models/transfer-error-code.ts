/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Indicates the failure reason of a transfer. Only present for transfers in a `failed` state. Possible values are `insufficient_funds`, `blockchain_error` and `transfer_denied` and `transfer_failed`
 * @export
 * @enum {string}
 */

export const TransferErrorCode = {
  TransferFailed: "transfer_failed",
  TransferDenied: "transfer_denied",
  BlockchainError: "blockchain_error",
  InsufficientFunds: "insufficient_funds"
} as const;

export type TransferErrorCode =
  typeof TransferErrorCode[keyof typeof TransferErrorCode];
