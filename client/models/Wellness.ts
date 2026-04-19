/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SportInfo } from './SportInfo';
export type Wellness = {
    id?: string;
    ctl?: number;
    atl?: number;
    rampRate?: number;
    ctlLoad?: number;
    atlLoad?: number;
    sportInfo?: Array<SportInfo>;
    updated?: string;
    weight?: number;
    restingHR?: number;
    hrv?: number;
    hrvSDNN?: number;
    menstrualPhase?: Wellness.menstrualPhase;
    menstrualPhasePredicted?: Wellness.menstrualPhasePredicted;
    kcalConsumed?: number;
    sleepSecs?: number;
    sleepScore?: number;
    sleepQuality?: number;
    avgSleepingHR?: number;
    soreness?: number;
    fatigue?: number;
    stress?: number;
    mood?: number;
    motivation?: number;
    injury?: number;
    spO2?: number;
    systolic?: number;
    diastolic?: number;
    hydration?: number;
    hydrationVolume?: number;
    readiness?: number;
    baevskySI?: number;
    bloodGlucose?: number;
    lactate?: number;
    bodyFat?: number;
    abdomen?: number;
    vo2max?: number;
    comments?: string;
    steps?: number;
    respiration?: number;
    carbohydrates?: number;
    protein?: number;
    fatTotal?: number;
    locked?: boolean;
    tempWeight?: boolean;
    tempRestingHR?: boolean;
};
export namespace Wellness {
    export enum menstrualPhase {
        PERIOD = 'PERIOD',
        FOLLICULAR = 'FOLLICULAR',
        OVULATING = 'OVULATING',
        LUTEAL = 'LUTEAL',
        NONE = 'NONE',
    }
    export enum menstrualPhasePredicted {
        PERIOD = 'PERIOD',
        FOLLICULAR = 'FOLLICULAR',
        OVULATING = 'OVULATING',
        LUTEAL = 'LUTEAL',
        NONE = 'NONE',
    }
}

