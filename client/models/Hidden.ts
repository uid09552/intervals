/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Hidden = {
    id?: string;
    icu_athlete_id?: string;
    start_date_local?: string;
    source?: Hidden.source;
    _note?: string;
};
export namespace Hidden {
    export enum source {
        STRAVA = 'STRAVA',
        UPLOAD = 'UPLOAD',
        MANUAL = 'MANUAL',
        GARMIN_CONNECT = 'GARMIN_CONNECT',
        OAUTH_CLIENT = 'OAUTH_CLIENT',
        DROPBOX = 'DROPBOX',
        POLAR = 'POLAR',
        SUUNTO = 'SUUNTO',
        COROS = 'COROS',
        WAHOO = 'WAHOO',
        ZWIFT = 'ZWIFT',
        ZEPP = 'ZEPP',
        CONCEPT2 = 'CONCEPT2',
        HUAWEI = 'HUAWEI',
    }
}

