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

/**
 * The destination bank account type.
 * @export
 * @enum {string}
 */

export const PayoutDestinationType = {
  Wire: "wire",
  Ach: "ach",
  Sepa: "sepa"
} as const;

export type PayoutDestinationType =
  typeof PayoutDestinationType[keyof typeof PayoutDestinationType];
