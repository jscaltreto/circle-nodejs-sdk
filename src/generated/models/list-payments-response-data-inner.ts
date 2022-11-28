/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { CancelRefundReversalStatus } from "./cancel-refund-reversal-status";
// May contain unused imports in some cases
// @ts-ignore
import { CryptoPayment } from "./crypto-payment";
// May contain unused imports in some cases
// @ts-ignore
import { CryptoPaymentDepositAddress } from "./crypto-payment-deposit-address";
// May contain unused imports in some cases
// @ts-ignore
import { FiatCancel } from "./fiat-cancel";
// May contain unused imports in some cases
// @ts-ignore
import { FiatMoney } from "./fiat-money";
// May contain unused imports in some cases
// @ts-ignore
import { FiatMoneyUsd } from "./fiat-money-usd";
// May contain unused imports in some cases
// @ts-ignore
import { FiatPayment } from "./fiat-payment";
// May contain unused imports in some cases
// @ts-ignore
import { FiatRefund } from "./fiat-refund";
// May contain unused imports in some cases
// @ts-ignore
import { PaymentInfoCancel } from "./payment-info-cancel";
// May contain unused imports in some cases
// @ts-ignore
import { PaymentInfoPaymentAndRefund } from "./payment-info-payment-and-refund";
// May contain unused imports in some cases
// @ts-ignore
import { RequiredAction } from "./required-action";
// May contain unused imports in some cases
// @ts-ignore
import { SourceResponse } from "./source-response";

/**
 * @type ListPaymentsResponseDataInner
 * @export
 */
export type ListPaymentsResponseDataInner =
  | ({ type: "Crypto Payment" } & CryptoPayment)
  | ({ type: "Fiat Cancel" } & FiatCancel)
  | ({ type: "Fiat Payment" } & FiatPayment)
  | ({ type: "Fiat Refund" } & FiatRefund);
