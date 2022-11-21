/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The payment source.
 * @export
 * @interface SourceResponse
 */
export interface SourceResponse {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof SourceResponse
   */
  id?: string;
  /**
   * Type of the source.
   * @type {string}
   * @memberof SourceResponse
   */
  type?: SourceResponseTypeEnum;
}

export const SourceResponseTypeEnum = {
  Card: "card",
  Ach: "ach",
  Wire: "wire",
  Sepa: "sepa"
} as const;

export type SourceResponseTypeEnum =
  typeof SourceResponseTypeEnum[keyof typeof SourceResponseTypeEnum];
