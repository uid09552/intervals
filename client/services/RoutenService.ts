/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { AthleteRoute } from '../models/AthleteRoute';
import type { RouteSimilarity } from '../models/RouteSimilarity';
import type { WithCount } from '../models/WithCount';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RoutenService {
    /**
     * Get a route for an athlete
     * @param id
     * @param routeId
     * @param includePath Include latlngs for the route GPS path
     * @returns AthleteRoute OK
     * @throws ApiError
     */
    public static getAthleteRoute(
        id: string,
        routeId: number,
        includePath: boolean = false,
    ): CancelablePromise<AthleteRoute> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/routes/{route_id}',
            path: {
                'id': id,
                'route_id': routeId,
            },
            query: {
                'includePath': includePath,
            },
        });
    }
    /**
     * Update a route for an athlete
     * @param id
     * @param routeId
     * @param requestBody
     * @returns AthleteRoute OK
     * @throws ApiError
     */
    public static updateAthleteRoute(
        id: string,
        routeId: number,
        requestBody: AthleteRoute,
    ): CancelablePromise<AthleteRoute> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/routes/{route_id}',
            path: {
                'id': id,
                'route_id': routeId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * How similar is this route to another?
     * Returned routes include path information
     * @param id
     * @param routeId
     * @param otherId
     * @returns RouteSimilarity OK
     * @throws ApiError
     */
    public static checkMerge(
        id: string,
        routeId: number,
        otherId: number,
    ): CancelablePromise<RouteSimilarity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/routes/{route_id}/similarity/{other_id}',
            path: {
                'id': id,
                'route_id': routeId,
                'other_id': otherId,
            },
        });
    }
    /**
     * List routes for an athlete with activity counts
     * The path (latlngs) is not included
     * @param id
     * @returns WithCount OK
     * @throws ApiError
     */
    public static listAthleteRoutes(
        id: string,
    ): CancelablePromise<Array<WithCount>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/routes',
            path: {
                'id': id,
            },
        });
    }
}
