/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Indicates the failure reason of a payout. Only present for payouts in failed state. Possible values are [`insufficient_funds`, `transaction_denied`, `transaction_failed`, `transaction_returned`, `bank_transaction_error`, `fiat_account_limit_exceeded`, `invalid_bank_account_number`, `invalid_ach_rtn`, `invalid_wire_rtn`, `vendor_inactive`]\'
 * @export
 * @enum {string}
 */

export const PayoutErrorCode = {
  InsufficientFunds: "insufficient_funds",
  TransactionDenied: "transaction_denied",
  TransactionFailed: "transaction_failed",
  TransactionReturned: "transaction_returned",
  BankTransactionError: "bank_transaction_error",
  FiatAccountLimitExceeded: "fiat_account_limit_exceeded",
  InvalidBankAccountNumber: "invalid_bank_account_number",
  InvalidAchRtn: "invalid_ach_rtn",
  InvalidWireRtn: "invalid_wire_rtn",
  VendorInactive: "vendor_inactive"
} as const;

export type PayoutErrorCode =
  typeof PayoutErrorCode[keyof typeof PayoutErrorCode];
