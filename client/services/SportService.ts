/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityMini } from '../models/ActivityMini';
import type { PaceDistancesDTO } from '../models/PaceDistancesDTO';
import type { SportSettings } from '../models/SportSettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SportService {
    /**
     * Apply sport settings to matching activities (updates zones), done asynchronously
     * @param athleteId
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static applyToActivities(
        athleteId: string,
        id: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{athleteId}/sport-settings/{id}/apply',
            path: {
                'athleteId': athleteId,
                'id': id,
            },
        });
    }
    /**
     * Get sport settings by id or activity type e.g. Run, Ride etc.
     * @param athleteId
     * @param id
     * @returns SportSettings OK
     * @throws ApiError
     */
    public static getSettings1(
        athleteId: string,
        id: string,
    ): CancelablePromise<SportSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{athleteId}/sport-settings/{id}',
            path: {
                'athleteId': athleteId,
                'id': id,
            },
        });
    }
    /**
     * Update sport settings by id or activity type e.g. Run, Ride etc.
     * @param athleteId
     * @param id
     * @param recalcHrZones
     * @param requestBody
     * @returns SportSettings OK
     * @throws ApiError
     */
    public static updateSettings(
        athleteId: string,
        id: string,
        recalcHrZones: boolean,
        requestBody: SportSettings,
    ): CancelablePromise<SportSettings> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{athleteId}/sport-settings/{id}',
            path: {
                'athleteId': athleteId,
                'id': id,
            },
            query: {
                'recalcHrZones': recalcHrZones,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete sport settings
     * @param athleteId
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSettings(
        athleteId: string,
        id: number,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/athlete/{athleteId}/sport-settings/{id}',
            path: {
                'athleteId': athleteId,
                'id': id,
            },
        });
    }
    /**
     * List sport settings for the athlete
     * @param athleteId
     * @returns SportSettings OK
     * @throws ApiError
     */
    public static listSettings(
        athleteId: string,
    ): CancelablePromise<Array<SportSettings>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{athleteId}/sport-settings',
            path: {
                'athleteId': athleteId,
            },
        });
    }
    /**
     * Update multiple sport settings
     * @param athleteId
     * @param recalcHrZones
     * @param requestBody
     * @returns SportSettings OK
     * @throws ApiError
     */
    public static updateSettingsMulti(
        athleteId: string,
        recalcHrZones: boolean,
        requestBody: Array<SportSettings>,
    ): CancelablePromise<Array<SportSettings>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{athleteId}/sport-settings',
            path: {
                'athleteId': athleteId,
            },
            query: {
                'recalcHrZones': recalcHrZones,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create settings for a sport with default values
     * @param athleteId
     * @param requestBody
     * @returns SportSettings OK
     * @throws ApiError
     */
    public static createSettings(
        athleteId: string,
        requestBody: SportSettings,
    ): CancelablePromise<SportSettings> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{athleteId}/sport-settings',
            path: {
                'athleteId': athleteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List pace curve distances
     * @returns PaceDistancesDTO OK
     * @throws ApiError
     */
    public static listPaceDistances(): CancelablePromise<PaceDistancesDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/pace_distances',
        });
    }
    /**
     * List pace curve distances and best effort defaults for the sport
     * @param athleteId
     * @param id
     * @returns PaceDistancesDTO OK
     * @throws ApiError
     */
    public static listPaceDistancesForSport(
        athleteId: string,
        id: string,
    ): CancelablePromise<PaceDistancesDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{athleteId}/sport-settings/{id}/pace_distances',
            path: {
                'athleteId': athleteId,
                'id': id,
            },
        });
    }
    /**
     * List activities matching the settings
     * @param athleteId
     * @param id
     * @returns ActivityMini OK
     * @throws ApiError
     */
    public static listMatchingActivities(
        athleteId: string,
        id: string,
    ): CancelablePromise<Array<ActivityMini>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{athleteId}/sport-settings/{id}/matching-activities',
            path: {
                'athleteId': athleteId,
                'id': id,
            },
        });
    }
}
