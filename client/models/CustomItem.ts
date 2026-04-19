/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AthleteSearchResult } from './AthleteSearchResult';
export type CustomItem = {
    id?: number;
    athlete_id?: string;
    type?: CustomItem.type;
    visibility?: CustomItem.visibility;
    name?: string;
    description?: string;
    image?: string;
    content?: Record<string, Record<string, any>>;
    usage_count?: number;
    index?: number;
    hide_script?: boolean;
    hidden_by_id?: string;
    updated?: string;
    from_athlete?: AthleteSearchResult;
    from_id?: number;
};
export namespace CustomItem {
    export enum type {
        FITNESS_CHART = 'FITNESS_CHART',
        FITNESS_TABLE = 'FITNESS_TABLE',
        TRACE_CHART = 'TRACE_CHART',
        INPUT_FIELD = 'INPUT_FIELD',
        ACTIVITY_FIELD = 'ACTIVITY_FIELD',
        INTERVAL_FIELD = 'INTERVAL_FIELD',
        ACTIVITY_STREAM = 'ACTIVITY_STREAM',
        ACTIVITY_CHART = 'ACTIVITY_CHART',
        ACTIVITY_HISTOGRAM = 'ACTIVITY_HISTOGRAM',
        ACTIVITY_HEATMAP = 'ACTIVITY_HEATMAP',
        ACTIVITY_MAP = 'ACTIVITY_MAP',
        ACTIVITY_PANEL = 'ACTIVITY_PANEL',
        ZONES = 'ZONES',
    }
    export enum visibility {
        PRIVATE = 'PRIVATE',
        FOLLOWERS = 'FOLLOWERS',
        PUBLIC = 'PUBLIC',
    }
}

