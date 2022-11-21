/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FiatMoneyUsd } from "./fiat-money-usd";
import { FiatPayoutDestination } from "./fiat-payout-destination";
import { FinalAdjustments } from "./final-adjustments";
import { PayoutErrorCode } from "./payout-error-code";
import { PayoutMoney } from "./payout-money";
import { PayoutStatus } from "./payout-status";
import { RiskEvaluation } from "./risk-evaluation";
import { UnwithdrawalObject } from "./unwithdrawal-object";

/**
 *
 * @export
 * @interface FiatPayout
 */
export interface FiatPayout {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof FiatPayout
   */
  id?: string;
  /**
   * The identifier of the source wallet used to fund a payout.
   * @type {string}
   * @memberof FiatPayout
   */
  sourceWalletId?: string;
  /**
   *
   * @type {FiatPayoutDestination}
   * @memberof FiatPayout
   */
  destination?: FiatPayoutDestination;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof FiatPayout
   */
  amount?: FiatMoneyUsd;
  /**
   *
   * @type {PayoutMoney}
   * @memberof FiatPayout
   */
  toAmount?: PayoutMoney;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof FiatPayout
   */
  fees?: FiatMoneyUsd;
  /**
   *
   * @type {PayoutStatus}
   * @memberof FiatPayout
   */
  status?: PayoutStatus;
  /**
   * A payout tracking reference. Will be present once known.
   * @type {any}
   * @memberof FiatPayout
   */
  trackingRef?: any | null;
  /**
   *
   * @type {PayoutErrorCode}
   * @memberof FiatPayout
   */
  errorCode?: PayoutErrorCode | null;
  /**
   *
   * @type {RiskEvaluation}
   * @memberof FiatPayout
   */
  riskEvaluation?: RiskEvaluation | null;
  /**
   *
   * @type {FinalAdjustments}
   * @memberof FiatPayout
   */
  adjustments?: FinalAdjustments | null;
  /**
   *
   * @type {UnwithdrawalObject}
   * @memberof FiatPayout
   */
  return?: UnwithdrawalObject | null;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof FiatPayout
   */
  createDate?: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof FiatPayout
   */
  updateDate?: string;
}
