/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Enumerated status of the chargeback. `active` means you’ve received a dispute and you need to submit evidence if you want to defend against it. \'resolved\' means the disputed payment had been refunded previously. Your account has not been debited. `pending` means we have acknowledged your evidence and forwarded it to the card issuer. `won` means you have won the dispute and your account has been credited. `lost` means the issuing bank has rejected your evidence and you have lost the dispute. There are no further financial implications. `canceled` means the issuing bank has canceled the dispute and your account has been credited. `closed` means the time to respond to this dispute has run out. No evidence can be submitted at this point.
 * @export
 * @enum {string}
 */

export const ChargebackStatus = {
  Active: "active",
  Resolved: "resolved",
  Pending: "pending",
  Won: "won",
  Lost: "lost",
  Canceled: "canceled",
  Closed: "closed"
} as const;

export type ChargebackStatus =
  typeof ChargebackStatus[keyof typeof ChargebackStatus];