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


import { Money } from './money';
import { RiskEvaluation } from './risk-evaluation';
import { TransferDestinationLocation } from './transfer-destination-location';
import { TransferErrorCode } from './transfer-error-code';
import { TransferSourceLocation } from './transfer-source-location';

/**
 * A transfer of funds.
 * @export
 * @interface TransferDetailedTransfer
 */
export interface TransferDetailedTransfer {
    /**
     * Unique system generated identifier for the entity.
     * @type {string}
     * @memberof TransferDetailedTransfer
     */
    'id': string;
    /**
     * 
     * @type {TransferSourceLocation}
     * @memberof TransferDetailedTransfer
     */
    'source': TransferSourceLocation;
    /**
     * 
     * @type {TransferDestinationLocation}
     * @memberof TransferDetailedTransfer
     */
    'destination': TransferDestinationLocation;
    /**
     * 
     * @type {Money}
     * @memberof TransferDetailedTransfer
     */
    'amount': Money;
    /**
     * A hash that uniquely identifies the onchain transaction. This is only available where either source or destination are of type blockchain.
     * @type {string}
     * @memberof TransferDetailedTransfer
     */
    'transactionHash'?: string;
    /**
     * Status of the transfer. Status `pending` indicates that the transfer is in the process of running; `complete` indicates it finished successfully; `failed` indicates it failed.
     * @type {string}
     * @memberof TransferDetailedTransfer
     */
    'status': TransferDetailedTransferStatusEnum;
    /**
     * 
     * @type {TransferErrorCode}
     * @memberof TransferDetailedTransfer
     */
    'errorCode'?: TransferErrorCode | null;
    /**
     * 
     * @type {RiskEvaluation}
     * @memberof TransferDetailedTransfer
     */
    'riskEvaluation'?: RiskEvaluation | null;
    /**
     * ISO-8601 UTC date/time format.
     * @type {string}
     * @memberof TransferDetailedTransfer
     */
    'createDate'?: string;
}

export const TransferDetailedTransferStatusEnum = {
    Failed: 'failed',
    Pending: 'pending',
    Complete: 'complete'
} as const;

export type TransferDetailedTransferStatusEnum = typeof TransferDetailedTransferStatusEnum[keyof typeof TransferDetailedTransferStatusEnum];

