/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Identity } from "./identity";

/**
 * A source wallet location.
 * @export
 * @interface TransferSourceWalletLocation
 */
export interface TransferSourceWalletLocation {
  /**
   *
   * @type {string}
   * @memberof TransferSourceWalletLocation
   */
  type: TransferSourceWalletLocationTypeEnum;
  /**
   * The id of the wallet.
   * @type {string}
   * @memberof TransferSourceWalletLocation
   */
  id: string;
  /**
   *
   * @type {Array<Identity>}
   * @memberof TransferSourceWalletLocation
   */
  identities?: Array<Identity>;
}

export const TransferSourceWalletLocationTypeEnum = {
  Wallet: "wallet"
} as const;

export type TransferSourceWalletLocationTypeEnum =
  typeof TransferSourceWalletLocationTypeEnum[keyof typeof TransferSourceWalletLocationTypeEnum];
