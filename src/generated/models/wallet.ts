/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Money } from "./money";

/**
 *
 * @export
 * @interface Wallet
 */
export interface Wallet {
  /**
   * Wallet identifier. Numeric value but should be treated as a string as format may change in the future\'
   * @type {string}
   * @memberof Wallet
   */
  walletId?: string;
  /**
   * Universally unique identifier (UUID v4) of the entity that owns the wallet.
   * @type {string}
   * @memberof Wallet
   */
  entityId?: string;
  /**
   * Wallet type.
   * @type {string}
   * @memberof Wallet
   */
  type?: WalletTypeEnum;
  /**
   * A human-friendly, non-unique identifier for a wallet.
   * @type {string}
   * @memberof Wallet
   */
  description?: string;
  /**
   * A list of balances for currencies owned by the wallet.
   * @type {Array<Money>}
   * @memberof Wallet
   */
  balances?: Array<Money>;
}

export const WalletTypeEnum = {
  EndUserWallet: "end_user_wallet"
} as const;

export type WalletTypeEnum = typeof WalletTypeEnum[keyof typeof WalletTypeEnum];
