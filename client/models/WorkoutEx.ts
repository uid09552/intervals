/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachment } from './Attachment';
export type WorkoutEx = {
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
    target?: WorkoutEx.target;
    targets?: Array<'AUTO' | 'POWER' | 'HR' | 'PACE'>;
    carbs_per_hour?: number;
    tags?: Array<string>;
    attachments?: Array<Attachment>;
    time?: string;
    sub_type?: WorkoutEx.sub_type;
    for_week?: boolean;
    file_contents?: string;
    file_contents_base64?: string;
    filename?: string;
    distance?: number;
    icu_intensity?: number;
};
export namespace WorkoutEx {
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

