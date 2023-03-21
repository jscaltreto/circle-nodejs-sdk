/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { PresignMessageTypesItems } from "./presign-message-types-items";

/**
 * The data schema of the message
 * @export
 * @interface PresignMessageTypes
 */
export interface PresignMessageTypes {
  /**
   * Data schema of the domain field in typedData. It\'s a list of (name, type) pair
   * @type {Array<PresignMessageTypesItems>}
   * @memberof PresignMessageTypes
   */
  EIP712Domain?: Array<PresignMessageTypesItems>;
  /**
   * Data schema of the message in typedData. It\'s a list of (name, type) pair
   * @type {Array<PresignMessageTypesItems>}
   * @memberof PresignMessageTypes
   */
  TransferWithAuthorization?: Array<PresignMessageTypesItems>;
}
