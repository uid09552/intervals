/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { WithCourses } from '../models/WithCourses';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SharedEventsService {
    /**
     * Get a shared event (e.g. race)
     * @param id
     * @returns WithCourses OK
     * @throws ApiError
     */
    public static getSharedEvent(
        id: number,
    ): CancelablePromise<WithCourses> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/shared-event/{id}',
            path: {
                'id': id,
            },
        });
    }
}
