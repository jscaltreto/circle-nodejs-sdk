/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { Chain } from "./chain";
// May contain unused imports in some cases
// @ts-ignore
import { Identity } from "./identity";
// May contain unused imports in some cases
// @ts-ignore
import { TransferSourceBlockchainLocation } from "./transfer-source-blockchain-location";
// May contain unused imports in some cases
// @ts-ignore
import { TransferSourceWalletLocation } from "./transfer-source-wallet-location";

/**
 * @type TransferSourceLocation
 * A source of funds.
 * @export
 */
export type TransferSourceLocation =
  | TransferSourceBlockchainLocation
  | TransferSourceWalletLocation;
