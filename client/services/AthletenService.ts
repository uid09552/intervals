/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Athlete } from '../models/Athlete';
import type { AthleteProfile } from '../models/AthleteProfile';
import type { AthleteTrainingPlan } from '../models/AthleteTrainingPlan';
import type { AthleteTrainingPlanUpdate } from '../models/AthleteTrainingPlanUpdate';
import type { AthleteUpdateDTO } from '../models/AthleteUpdateDTO';
import type { SummaryWithCats } from '../models/SummaryWithCats';
import type { WithSportSettings } from '../models/WithSportSettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AthletenService {
    /**
     * Get the athlete's training plan
     * @param id
     * @returns AthleteTrainingPlan OK
     * @throws ApiError
     */
    public static getAthleteTrainingPlan(
        id: string,
    ): CancelablePromise<AthleteTrainingPlan> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/training-plan',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Change the athlete's training plan
     * @param id
     * @param requestBody
     * @returns AthleteTrainingPlan OK
     * @throws ApiError
     */
    public static updateAthletePlan(
        id: string,
        requestBody: AthleteTrainingPlanUpdate,
    ): CancelablePromise<AthleteTrainingPlan> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/training-plan',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get the athlete with sportSettings and custom_items
     * @param id
     * @returns WithSportSettings OK
     * @throws ApiError
     */
    public static getAthlete(
        id: string,
    ): CancelablePromise<WithSportSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update an athlete
     * @param id
     * @param requestBody
     * @returns Athlete OK
     * @throws ApiError
     */
    public static updateAthlete(
        id: string,
        requestBody: AthleteUpdateDTO,
    ): CancelablePromise<Athlete> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Change training plans for a list of athletes
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static updateAthletePlans(
        requestBody: Array<AthleteTrainingPlanUpdate>,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete-plans',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get the athlete's settings for phone, tablet or desktop
     * @param id
     * @param deviceClass
     * @returns any OK
     * @throws ApiError
     */
    public static getSettings(
        id: string,
        deviceClass: string,
    ): CancelablePromise<Record<string, Record<string, any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/settings/{deviceClass}',
            path: {
                'id': id,
                'deviceClass': deviceClass,
            },
        });
    }
    /**
     * Get athlete profile info
     * @param id
     * @returns AthleteProfile OK
     * @throws ApiError
     */
    public static getAthleteProfile(
        id: string,
    ): CancelablePromise<AthleteProfile> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/profile',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Summary information for followed athletes
     * Note that when this endpoint is called with a bearer token then only the athlete the token is for is returned
     * @param id
     * @param ext
     * @param start Local date and optional time (ISO-8601) for oldest data to return, default is 6 days ago
     * @param end Local date and optional time (ISO-8601) for newest data to return, default is today
     * @param tags Optional list of athlete tags, only athletes with one of these tags are returned
     * @returns SummaryWithCats OK
     * @throws ApiError
     */
    public static getAthleteSummary(
        id: string,
        ext: string,
        start?: string,
        end?: string,
        tags?: Array<string>,
    ): CancelablePromise<Array<SummaryWithCats>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/athlete-summary{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
            query: {
                'start': start,
                'end': end,
                'tags': tags,
            },
        });
    }
}
