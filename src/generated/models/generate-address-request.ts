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

import { Chain } from "./chain";
import { Currency } from "./currency";

/**
 *
 * @export
 * @interface GenerateAddressRequest
 */
export interface GenerateAddressRequest {
  /**
   * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
   * @type {string}
   * @memberof GenerateAddressRequest
   */
  idempotencyKey: string;
  /**
   *
   * @type {Currency}
   * @memberof GenerateAddressRequest
   */
  currency: Currency | null;
  /**
   *
   * @type {Chain}
   * @memberof GenerateAddressRequest
   */
  chain: Chain;
}
