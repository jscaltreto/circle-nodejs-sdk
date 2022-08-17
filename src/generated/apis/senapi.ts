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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BadRequest } from '../models';
// @ts-ignore
import { CreateBusinessAccountSenBankAccountResponse } from '../models';
// @ts-ignore
import { GetBusinessAccountSenBankAccountResponse } from '../models';
// @ts-ignore
import { GetBusinessAccountSenBankAccountsResponse } from '../models';
// @ts-ignore
import { GetBusinessAccountSenInstructionsBankAccountResponse } from '../models';
// @ts-ignore
import { NotAuthorized } from '../models';
// @ts-ignore
import { NotFound } from '../models';
// @ts-ignore
import { SenFiatAccountCreationRequest } from '../models';
/**
 * SENApi - axios parameter creator
 * @export
 */
export const SENApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a Silvergate SEN bank account (BETA)
         * @param {SenFiatAccountCreationRequest} [senFiatAccountCreationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBusinessAccountSenBankAccount: async (senFiatAccountCreationRequest?: SenFiatAccountCreationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/businessAccount/banks/sen`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(senFiatAccountCreationRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a Silvergate SEN bank account (BETA)
         * @param {string} id Universally unique identifier (UUID v4) of a resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBusinessAccountSenBankAccount: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getBusinessAccountSenBankAccount', 'id', id)
            const localVarPath = `/v1/businessAccount/banks/sen/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List all Silvergate SEN bank accounts (BETA).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBusinessAccountSenBankAccounts: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/businessAccount/banks/sen`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the Silvergate SEN transfer instructions into the Circle bank account given your bank account id (BETA).
         * @summary Get Silvergate SEN instructions (BETA)
         * @param {string} id Universally unique identifier (UUID v4) of a resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBusinessAccountSenInstructionsBankAccount: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getBusinessAccountSenInstructionsBankAccount', 'id', id)
            const localVarPath = `/v1/businessAccount/banks/sen/{id}/instructions`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SENApi - functional programming interface
 * @export
 */
export const SENApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SENApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a Silvergate SEN bank account (BETA)
         * @param {SenFiatAccountCreationRequest} [senFiatAccountCreationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createBusinessAccountSenBankAccount(senFiatAccountCreationRequest?: SenFiatAccountCreationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateBusinessAccountSenBankAccountResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createBusinessAccountSenBankAccount(senFiatAccountCreationRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a Silvergate SEN bank account (BETA)
         * @param {string} id Universally unique identifier (UUID v4) of a resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBusinessAccountSenBankAccount(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBusinessAccountSenBankAccountResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBusinessAccountSenBankAccount(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List all Silvergate SEN bank accounts (BETA).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBusinessAccountSenBankAccounts(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBusinessAccountSenBankAccountsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBusinessAccountSenBankAccounts(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the Silvergate SEN transfer instructions into the Circle bank account given your bank account id (BETA).
         * @summary Get Silvergate SEN instructions (BETA)
         * @param {string} id Universally unique identifier (UUID v4) of a resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBusinessAccountSenInstructionsBankAccount(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBusinessAccountSenInstructionsBankAccountResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBusinessAccountSenInstructionsBankAccount(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SENApi - factory interface
 * @export
 */
export const SENApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SENApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a Silvergate SEN bank account (BETA)
         * @param {SenFiatAccountCreationRequest} [senFiatAccountCreationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBusinessAccountSenBankAccount(senFiatAccountCreationRequest?: SenFiatAccountCreationRequest, options?: any): AxiosPromise<CreateBusinessAccountSenBankAccountResponse> {
            return localVarFp.createBusinessAccountSenBankAccount(senFiatAccountCreationRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a Silvergate SEN bank account (BETA)
         * @param {string} id Universally unique identifier (UUID v4) of a resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBusinessAccountSenBankAccount(id: string, options?: any): AxiosPromise<GetBusinessAccountSenBankAccountResponse> {
            return localVarFp.getBusinessAccountSenBankAccount(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List all Silvergate SEN bank accounts (BETA).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBusinessAccountSenBankAccounts(options?: any): AxiosPromise<GetBusinessAccountSenBankAccountsResponse> {
            return localVarFp.getBusinessAccountSenBankAccounts(options).then((request) => request(axios, basePath));
        },
        /**
         * Get the Silvergate SEN transfer instructions into the Circle bank account given your bank account id (BETA).
         * @summary Get Silvergate SEN instructions (BETA)
         * @param {string} id Universally unique identifier (UUID v4) of a resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBusinessAccountSenInstructionsBankAccount(id: string, options?: any): AxiosPromise<GetBusinessAccountSenInstructionsBankAccountResponse> {
            return localVarFp.getBusinessAccountSenInstructionsBankAccount(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SENApi - object-oriented interface
 * @export
 * @class SENApi
 * @extends {BaseAPI}
 */
export class SENApi extends BaseAPI {
    /**
     * 
     * @summary Create a Silvergate SEN bank account (BETA)
     * @param {SenFiatAccountCreationRequest} [senFiatAccountCreationRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SENApi
     */
    public createBusinessAccountSenBankAccount(senFiatAccountCreationRequest?: SenFiatAccountCreationRequest, options?: AxiosRequestConfig) {
        return SENApiFp(this.configuration).createBusinessAccountSenBankAccount(senFiatAccountCreationRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a Silvergate SEN bank account (BETA)
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SENApi
     */
    public getBusinessAccountSenBankAccount(id: string, options?: AxiosRequestConfig) {
        return SENApiFp(this.configuration).getBusinessAccountSenBankAccount(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List all Silvergate SEN bank accounts (BETA).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SENApi
     */
    public getBusinessAccountSenBankAccounts(options?: AxiosRequestConfig) {
        return SENApiFp(this.configuration).getBusinessAccountSenBankAccounts(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the Silvergate SEN transfer instructions into the Circle bank account given your bank account id (BETA).
     * @summary Get Silvergate SEN instructions (BETA)
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SENApi
     */
    public getBusinessAccountSenInstructionsBankAccount(id: string, options?: AxiosRequestConfig) {
        return SENApiFp(this.configuration).getBusinessAccountSenInstructionsBankAccount(id, options).then((request) => request(this.axios, this.basePath));
    }
}