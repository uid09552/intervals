/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Gear } from '../models/Gear';
import type { GearReminder } from '../models/GearReminder';
import type { GearStats } from '../models/GearStats';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AusrStungService {
    /**
     * Update a reminder
     * @param id
     * @param gearId
     * @param reminderId
     * @param reset
     * @param snoozeDays
     * @param requestBody
     * @returns Gear OK
     * @throws ApiError
     */
    public static updateReminder(
        id: string,
        gearId: string,
        reminderId: number,
        reset: boolean,
        snoozeDays: number,
        requestBody: GearReminder,
    ): CancelablePromise<Gear> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/gear/{gearId}/reminder/{reminderId}',
            path: {
                'id': id,
                'gearId': gearId,
                'reminderId': reminderId,
            },
            query: {
                'reset': reset,
                'snoozeDays': snoozeDays,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a reminder
     * @param id
     * @param gearId
     * @param reminderId
     * @returns Gear OK
     * @throws ApiError
     */
    public static deleteReminder(
        id: string,
        gearId: string,
        reminderId: number,
    ): CancelablePromise<Gear> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/athlete/{id}/gear/{gearId}/reminder/{reminderId}',
            path: {
                'id': id,
                'gearId': gearId,
                'reminderId': reminderId,
            },
        });
    }
    /**
     * Update a gear or component
     * @param id
     * @param gearId
     * @param requestBody
     * @returns Gear OK
     * @throws ApiError
     */
    public static updateGear(
        id: string,
        gearId: string,
        requestBody: Gear,
    ): CancelablePromise<Gear> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/gear/{gearId}',
            path: {
                'id': id,
                'gearId': gearId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a gear or component
     * @param id
     * @param gearId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteGear(
        id: string,
        gearId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/athlete/{id}/gear/{gearId}',
            path: {
                'id': id,
                'gearId': gearId,
            },
        });
    }
    /**
     * Retire a component and replace it with a copy with the same reminders etc.
     * @param id
     * @param gearId
     * @param requestBody
     * @returns Gear OK
     * @throws ApiError
     */
    public static replaceGear(
        id: string,
        gearId: string,
        requestBody: Gear,
    ): CancelablePromise<Array<Gear>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/gear/{gearId}/replace',
            path: {
                'id': id,
                'gearId': gearId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create a new reminder
     * @param id
     * @param gearId
     * @param requestBody
     * @returns Gear OK
     * @throws ApiError
     */
    public static createReminder(
        id: string,
        gearId: string,
        requestBody: GearReminder,
    ): CancelablePromise<Gear> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/gear/{gearId}/reminder',
            path: {
                'id': id,
                'gearId': gearId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create a new gear or component
     * @param id
     * @param requestBody
     * @returns Gear OK
     * @throws ApiError
     */
    public static createGear(
        id: string,
        requestBody: Gear,
    ): CancelablePromise<Gear> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/gear',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List athlete gear (use .csv for CSV format)
     * @param id
     * @param ext
     * @returns Gear OK
     * @throws ApiError
     */
    public static listGear(
        id: string,
        ext: string,
    ): CancelablePromise<Array<Gear>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/gear{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
        });
    }
    /**
     * Recalculate gear stats
     * @param id
     * @param gearId
     * @returns GearStats OK
     * @throws ApiError
     */
    public static calcDistanceEtc(
        id: string,
        gearId: string,
    ): CancelablePromise<GearStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/gear/{gearId}/calc',
            path: {
                'id': id,
                'gearId': gearId,
            },
        });
    }
}
