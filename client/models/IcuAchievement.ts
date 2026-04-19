/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataCurvePt } from './DataCurvePt';
export type IcuAchievement = {
    id?: string;
    type?: IcuAchievement.type;
    message?: string;
    watts?: number;
    secs?: number;
    value?: number;
    distance?: number;
    pace?: number;
    point?: DataCurvePt;
};
export namespace IcuAchievement {
    export enum type {
        BEST_POWER = 'BEST_POWER',
        FTP_UP = 'FTP_UP',
        LTHR_UP = 'LTHR_UP',
        BEST_PACE = 'BEST_PACE',
    }
}

