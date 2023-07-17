/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface UpdateBillingDetails
 */
export interface UpdateBillingDetails {
  /**
   * First name of the card or bank account holder.
   * @type {string}
   * @memberof UpdateBillingDetails
   */
  firstName?: string;
  /**
   * Last name of the card or bank account holder.
   * @type {string}
   * @memberof UpdateBillingDetails
   */
  lastName?: string;
  /**
   * Line one of the street address.
   * @type {string}
   * @memberof UpdateBillingDetails
   */
  line1?: string;
  /**
   * Line two of the street address.
   * @type {string}
   * @memberof UpdateBillingDetails
   */
  line2?: string;
  /**
   * City portion of the address.
   * @type {string}
   * @memberof UpdateBillingDetails
   */
  city?: string;
  /**
   * State / County / Province / Region portion of the address. If the country is US or Canada, then district is required and should use the two-letter code for the subdivision.
   * @type {string}
   * @memberof UpdateBillingDetails
   */
  district?: string;
  /**
   * Postal / ZIP code of the address.
   * @type {string}
   * @memberof UpdateBillingDetails
   */
  postalCode?: string;
  /**
   * Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.
   * @type {string}
   * @memberof UpdateBillingDetails
   */
  country?: string;
  /**
   * Phone number of the user in E.164 format. We recommend using a library such as [libphonenumber](https://github.com/google/libphonenumber) to parse and validate phone numbers.
   * @type {string}
   * @memberof UpdateBillingDetails
   */
  phone?: string;
  /**
   * Email of the user.
   * @type {string}
   * @memberof UpdateBillingDetails
   */
  email?: string;
}