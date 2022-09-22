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

import { Fee } from "./fee";
import { Money } from "./money";
import { TransferDestinationLocation } from "./transfer-destination-location";
import { TransferErrorCode } from "./transfer-error-code";
import { TransferSourceLocation } from "./transfer-source-location";

/**
 * A transfer of funds.
 * @export
 * @interface Transfer
 */
export interface Transfer {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof Transfer
   */
  id: string;
  /**
   *
   * @type {TransferSourceLocation}
   * @memberof Transfer
   */
  source: TransferSourceLocation;
  /**
   *
   * @type {TransferDestinationLocation}
   * @memberof Transfer
   */
  destination: TransferDestinationLocation;
  /**
   *
   * @type {Money}
   * @memberof Transfer
   */
  amount: Money;
  /**
   * An array of fees applied to a transaction. This is only available when there is at least one non-zero fee.
   * @type {Array<Fee>}
   * @memberof Transfer
   */
  fees?: Array<Fee>;
  /**
   * A hash that uniquely identifies the onchain transaction. This is only available where either source or destination are of type blockchain.
   * @type {string}
   * @memberof Transfer
   */
  transactionHash?: string;
  /**
   * Status of the transfer. Status `pending` indicates that the transfer is in the process of running; `complete` indicates it finished successfully; `failed` indicates it failed.
   * @type {string}
   * @memberof Transfer
   */
  status: TransferStatusEnum;
  /**
   *
   * @type {TransferErrorCode}
   * @memberof Transfer
   */
  errorCode?: TransferErrorCode | null;
  /**
   * The create date of the transfer.
   * @type {string}
   * @memberof Transfer
   */
  createDate?: string;
}

export const TransferStatusEnum = {
  Pending: "pending",
  Complete: "complete",
  Failed: "failed"
} as const;

export type TransferStatusEnum =
  typeof TransferStatusEnum[keyof typeof TransferStatusEnum];
