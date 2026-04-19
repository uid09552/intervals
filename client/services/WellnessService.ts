/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Wellness } from '../models/Wellness';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WellnessService {
    /**
     * Get wellness record for date (local ISO-8601 day)
     * @param id
     * @param date
     * @returns Wellness OK
     * @throws ApiError
     */
    public static getRecord(
        id: string,
        date: string,
    ): CancelablePromise<Wellness> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/wellness/{date}',
            path: {
                'id': id,
                'date': date,
            },
        });
    }
    /**
     * Update the wellness record for the date (ISO-8601)
     * Only fields provided are changed
     * @param id
     * @param date
     * @param requestBody
     * @returns Wellness OK
     * @throws ApiError
     */
    public static updateWellness(
        id: string,
        date: string,
        requestBody: Wellness,
    ): CancelablePromise<Wellness> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/wellness/{date}',
            path: {
                'id': id,
                'date': date,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update an array of wellness records all for the same athlete
     * The id of each record is the day (ISO-8601). Only fields provided are changed
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static updateWellnessBulk(
        id: string,
        requestBody: Array<Wellness>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/wellness-bulk',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update a wellness record, id is the day (ISO-8601)
     * Only fields provided are changed
     * @param id
     * @param requestBody
     * @returns Wellness OK
     * @throws ApiError
     */
    public static updateWellness1(
        id: string,
        requestBody: Wellness,
    ): CancelablePromise<Wellness> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/wellness',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Upload wellness records in CSV format as multipart/form-data
     * @param id
     * @param ignoreMissingFields
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static uploadWellness(
        id: string,
        ignoreMissingFields: boolean = false,
        requestBody?: {
            file: Blob;
        },
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/wellness',
            path: {
                'id': id,
            },
            query: {
                'ignoreMissingFields': ignoreMissingFields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List wellness records for date range (use .csv for CSV format)
     * @param id
     * @param ext
     * @param oldest Local date of oldest record (ISO-8601)
     * @param newest Local date of newest record (ISO-8601), inclusive
     * @param cols Comma separated list of column names to include in CSV (default is all)
     * @param fields Comma separated list of field names to include in the returned objects (default is all), also excludes null values
     * @returns Wellness OK
     * @throws ApiError
     */
    public static listWellnessRecords(
        id: string,
        ext: string,
        oldest?: string,
        newest?: string,
        cols?: Array<string>,
        fields?: Array<string>,
    ): CancelablePromise<Array<Wellness>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/wellness{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
            query: {
                'oldest': oldest,
                'newest': newest,
                'cols': cols,
                'fields': fields,
            },
        });
    }
}
