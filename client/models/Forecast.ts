/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Forecast = {
    id?: number;
    provider?: Forecast.provider;
    location?: string;
    label?: string;
    lat?: number;
    lon?: number;
    enabled?: boolean;
};
export namespace Forecast {
    export enum provider {
        OPEN_WEATHER = 'OPEN_WEATHER',
    }
}

