/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FiatMoney } from "./fiat-money";
import { MockSenPaymentBeneficiaryBankInstruction } from "./mock-sen-payment-beneficiary-bank-instruction";

/**
 *
 * @export
 * @interface MockSenPaymentRequest
 */
export interface MockSenPaymentRequest {
  /**
   * Circle tracking reference that needs to be set in the memo filed. This field is retrievable through the response during SEN account creation or via the bank instruction endpoint.
   * @type {string}
   * @memberof MockSenPaymentRequest
   */
  trackingRef: string;
  /**
   *
   * @type {FiatMoney}
   * @memberof MockSenPaymentRequest
   */
  amount: FiatMoney;
  /**
   *
   * @type {MockSenPaymentBeneficiaryBankInstruction}
   * @memberof MockSenPaymentRequest
   */
  beneficiaryBank: MockSenPaymentBeneficiaryBankInstruction;
}
