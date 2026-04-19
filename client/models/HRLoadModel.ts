/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type HRLoadModel = {
    type?: HRLoadModel.type;
    icu_training_load?: number;
    trainingDataCount?: number;
};
export namespace HRLoadModel {
    export enum type {
        AVG_HR = 'AVG_HR',
        HR_ZONES = 'HR_ZONES',
        HRSS = 'HRSS',
    }
}

