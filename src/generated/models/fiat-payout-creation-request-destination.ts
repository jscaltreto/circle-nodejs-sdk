/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FiatPayoutDestinationType } from "./fiat-payout-destination-type";

/**
 * The destination.
 * @export
 * @interface FiatPayoutCreationRequestDestination
 */
export interface FiatPayoutCreationRequestDestination {
  /**
   *
   * @type {FiatPayoutDestinationType}
   * @memberof FiatPayoutCreationRequestDestination
   */
  type: FiatPayoutDestinationType;
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof FiatPayoutCreationRequestDestination
   */
  id: string;
}