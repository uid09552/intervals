/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Anomaly } from './Anomaly';
export type ActivityStream = {
    type?: string;
    name?: string;
    data?: Record<string, any>;
    data2?: Record<string, any>;
    valueTypeIsArray?: boolean;
    anomalies?: Array<Anomaly>;
    custom?: boolean;
    allNull?: boolean;
};

