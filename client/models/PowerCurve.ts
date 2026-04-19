/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { ActivityFilter } from './ActivityFilter';
import type { Plot } from './Plot';
import type { PowerModel } from './PowerModel';
import type { Rank } from './Rank';
export type PowerCurve = {
    id?: string;
    after_kj?: number;
    filters?: Array<ActivityFilter>;
    label?: string;
    filter_label?: string;
    percentile?: number;
    start_date_local?: string;
    end_date_local?: string;
    days?: number;
    moving_time?: number;
    training_load?: number;
    weight?: number;
    secs?: Array<number>;
    values?: Array<number>;
    submax_values?: Array<Array<number>>;
    submax_activity_id?: Array<Array<string>>;
    start_index?: Array<number>;
    end_index?: Array<number>;
    activity_id?: Array<string>;
    watts_per_kg?: Array<number>;
    wkg_activity_id?: Array<string>;
    submax_watts_per_kg?: Array<Array<number>>;
    submax_wkg_activity_id?: Array<Array<string>>;
    powerModels?: Array<PowerModel>;
    ranks?: Record<string, Rank>;
    mapPlot?: Plot;
    stream_type?: string;
    stream_name?: string;
    watts?: Array<number>;
    vo2max_5m?: number;
    compound_score_5m?: number;
};

