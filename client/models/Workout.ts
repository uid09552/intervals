/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachment } from './Attachment';
export type Workout = {
    athlete_id?: string;
    id?: number;
    icu_training_load?: number;
    name?: string;
    description?: string;
    type?: string;
    indoor?: boolean;
    color?: string;
    moving_time?: number;
    updated?: string;
    joules?: number;
    joules_above_ftp?: number;
    workout_doc?: Record<string, Record<string, any>>;
    folder_id?: number;
    day?: number;
    days?: number;
    plan_applied?: string;
    hide_from_athlete?: boolean;
    target?: Workout.target;
    targets?: Array<'AUTO' | 'POWER' | 'HR' | 'PACE'>;
    carbs_per_hour?: number;
    tags?: Array<string>;
    attachments?: Array<Attachment>;
    time?: string;
    sub_type?: Workout.sub_type;
    for_week?: boolean;
    distance?: number;
    icu_intensity?: number;
};
export namespace Workout {
    export enum target {
        AUTO = 'AUTO',
        POWER = 'POWER',
        HR = 'HR',
        PACE = 'PACE',
    }
    export enum sub_type {
        NONE = 'NONE',
        COMMUTE = 'COMMUTE',
        WARMUP = 'WARMUP',
        COOLDOWN = 'COOLDOWN',
        RACE = 'RACE',
    }
}

