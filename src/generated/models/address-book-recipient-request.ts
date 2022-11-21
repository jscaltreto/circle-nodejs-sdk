/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AddressBookRecipientMetadata } from "./address-book-recipient-metadata";
import { Chain } from "./chain";

/**
 *
 * @export
 * @interface AddressBookRecipientRequest
 */
export interface AddressBookRecipientRequest {
  /**
   * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
   * @type {string}
   * @memberof AddressBookRecipientRequest
   */
  idempotencyKey: string;
  /**
   *
   * @type {Chain}
   * @memberof AddressBookRecipientRequest
   */
  chain: Chain;
  /**
   * An alphanumeric string representing a blockchain address. Will be in different formats for different chains. It is important to preserve the exact formatting and capitalization of the address.
   * @type {string}
   * @memberof AddressBookRecipientRequest
   */
  address: string;
  /**
   * The secondary identifier for a blockchain address. An example of this is the memo field on the Stellar network, which can be text, id, or hash format.
   * @type {string}
   * @memberof AddressBookRecipientRequest
   */
  addressTag?: string | null;
  /**
   *
   * @type {AddressBookRecipientMetadata}
   * @memberof AddressBookRecipientRequest
   */
  metadata: AddressBookRecipientMetadata;
}
