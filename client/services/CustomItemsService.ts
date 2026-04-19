/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomItem } from '../models/CustomItem';
import type { NewCustomItem } from '../models/NewCustomItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomItemsService {
    /**
     * Get a custom item
     * @param id
     * @param itemId
     * @returns CustomItem OK
     * @throws ApiError
     */
    public static getCustomItem(
        id: string,
        itemId: number,
    ): CancelablePromise<CustomItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/custom-item/{itemId}',
            path: {
                'id': id,
                'itemId': itemId,
            },
        });
    }
    /**
     * Update a custom item
     * @param id
     * @param itemId
     * @param requestBody
     * @returns CustomItem OK
     * @throws ApiError
     */
    public static updateCustomItem(
        id: string,
        itemId: number,
        requestBody: CustomItem,
    ): CancelablePromise<CustomItem> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/custom-item/{itemId}',
            path: {
                'id': id,
                'itemId': itemId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a custom item
     * @param id
     * @param itemId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCustomItem(
        id: string,
        itemId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/athlete/{id}/custom-item/{itemId}',
            path: {
                'id': id,
                'itemId': itemId,
            },
        });
    }
    /**
     * Re-order custom items
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static updateCustomItemIndexes(
        id: string,
        requestBody: Array<CustomItem>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/custom-item-indexes',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Upload a new image for a custom item as multipart/form-data
     * @param id
     * @param itemId
     * @param requestBody
     * @returns CustomItem OK
     * @throws ApiError
     */
    public static updateCustomItemImage(
        id: string,
        itemId: number,
        requestBody?: {
            file: Blob;
        },
    ): CancelablePromise<CustomItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/custom-item/{itemId}/image',
            path: {
                'id': id,
                'itemId': itemId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List custom items (charts, custom fields etc.)
     * @param id
     * @returns CustomItem OK
     * @throws ApiError
     */
    public static listCustomItems(
        id: string,
    ): CancelablePromise<Array<CustomItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/custom-item',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Create a custom item
     * @param id
     * @param requestBody
     * @returns NewCustomItem OK
     * @throws ApiError
     */
    public static createCustomItem(
        id: string,
        requestBody: CustomItem,
    ): CancelablePromise<NewCustomItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/custom-item',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
