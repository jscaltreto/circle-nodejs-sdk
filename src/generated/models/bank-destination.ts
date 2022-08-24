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

import { PayoutDestinationType } from "./payout-destination-type";

/**
 * The destination bank account.
 * @export
 * @interface BankDestination
 */
export interface BankDestination {
  /**
   *
   * @type {PayoutDestinationType}
   * @memberof BankDestination
   */
  type: PayoutDestinationType;
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof BankDestination
   */
  id: string;
  /**
   * Bank name plus last four digits of the bank account number or IBAN.
   * @type {string}
   * @memberof BankDestination
   */
  name?: string;
}
