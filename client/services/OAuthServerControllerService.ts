/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OAuthServerControllerService {
    /**
     * Disconnect the athlete from the app matching the bearer token
     * @returns any Success
     * @throws ApiError
     */
    public static disconnectApp(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/disconnect-app',
            errors: {
                401: `Missing or invalid access token`,
            },
        });
    }
}
