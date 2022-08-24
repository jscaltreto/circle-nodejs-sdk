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

import globalAxios, {
  AxiosPromise,
  AxiosInstance,
  AxiosRequestConfig
} from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setBearerAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError
} from "../base";
// @ts-ignore
import { GetConfigResponse } from "../models";
/**
 * ManagementApi - axios parameter creator
 * @export
 */
export const ManagementApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Retrieves general configuration information.
     * @summary Get configuration info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getConfig: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/configuration`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};

/**
 * ManagementApi - functional programming interface
 * @export
 */
export const ManagementApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    ManagementApiAxiosParamCreator(configuration);
  return {
    /**
     * Retrieves general configuration information.
     * @summary Get configuration info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getConfig(
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetConfigResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getConfig(
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    }
  };
};

/**
 * ManagementApi - factory interface
 * @export
 */
export const ManagementApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ManagementApiFp(configuration);
  return {
    /**
     * Retrieves general configuration information.
     * @summary Get configuration info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getConfig(options?: any): AxiosPromise<GetConfigResponse> {
      return localVarFp
        .getConfig(options)
        .then((request) => request(axios, basePath));
    }
  };
};

/**
 * ManagementApi - object-oriented interface
 * @export
 * @class ManagementApi
 * @extends {BaseAPI}
 */
export class ManagementApi extends BaseAPI {
  /**
   * Retrieves general configuration information.
   * @summary Get configuration info
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ManagementApi
   */
  public getConfig(options?: AxiosRequestConfig) {
    return ManagementApiFp(this.configuration)
      .getConfig(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
