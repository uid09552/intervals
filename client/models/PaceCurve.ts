/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityFilter } from './ActivityFilter';
import type { PaceModel } from './PaceModel';
export type PaceCurve = {
    id?: string;
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
    distance?: Array<number>;
    values?: Array<number>;
    submax_values?: Array<Array<number>>;
    submax_activity_id?: Array<Array<string>>;
    start_index?: Array<number>;
    end_index?: Array<number>;
    activity_id?: Array<string>;
    type?: PaceCurve.type;
    paceModels?: Array<PaceModel>;
};
export namespace PaceCurve {
    export enum type {
        POWER = 'POWER',
        HR = 'HR',
        PACE = 'PACE',
        GAP = 'GAP',
    }
}

