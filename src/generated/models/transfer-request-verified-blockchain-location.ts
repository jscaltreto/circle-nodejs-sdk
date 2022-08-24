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
 *
 * @export
 * @interface TransferRequestVerifiedBlockchainLocation
 */
export interface TransferRequestVerifiedBlockchainLocation {
  /**
   *
   * @type {string}
   * @memberof TransferRequestVerifiedBlockchainLocation
   */
  type: TransferRequestVerifiedBlockchainLocationTypeEnum;
  /**
   * The ID of the verified blockchain recipient address.
   * @type {string}
   * @memberof TransferRequestVerifiedBlockchainLocation
   */
  addressId: string;
}

export const TransferRequestVerifiedBlockchainLocationTypeEnum = {
  VerifiedBlockchain: "verified_blockchain"
} as const;

export type TransferRequestVerifiedBlockchainLocationTypeEnum =
  typeof TransferRequestVerifiedBlockchainLocationTypeEnum[keyof typeof TransferRequestVerifiedBlockchainLocationTypeEnum];
