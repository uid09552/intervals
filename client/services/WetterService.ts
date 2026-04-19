/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { WeatherConfig } from '../models/WeatherConfig';
import type { WeatherDTO } from '../models/WeatherDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WetterService {
    /**
     * Get the athlete's weather forecast configuration
     * @param id
     * @returns WeatherConfig OK
     * @throws ApiError
     */
    public static getWeatherConfig(
        id: string,
    ): CancelablePromise<WeatherConfig> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/weather-config',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update the athlete's weather forecast configuration
     * @param id
     * @param requestBody
     * @returns WeatherConfig OK
     * @throws ApiError
     */
    public static updateWeatherConfig(
        id: string,
        requestBody: WeatherConfig,
    ): CancelablePromise<WeatherConfig> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/weather-config',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get weather forecast information
     * @param id
     * @returns WeatherDTO OK
     * @throws ApiError
     */
    public static getForecast(
        id: string,
    ): CancelablePromise<WeatherDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/weather-forecast',
            path: {
                'id': id,
            },
        });
    }
}
