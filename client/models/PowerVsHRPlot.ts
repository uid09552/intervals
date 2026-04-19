/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { Bucket } from './Bucket';
import type { Curve } from './Curve';
export type PowerVsHRPlot = {
    bucketSize?: number;
    warmup?: number;
    cooldown?: number;
    elapsedTime?: number;
    hrLag?: number;
    powerHr?: number;
    powerHrFirst?: number;
    powerHrSecond?: number;
    decoupling?: number;
    powerHrZ2?: number;
    medianCadenceZ2?: number;
    avgCadenceZ2?: number;
    hrZ2BucketCount?: number;
    start?: number;
    mid?: number;
    end?: number;
    series?: Array<Bucket>;
    curves?: Array<Curve>;
    ratioCoefficients?: Array<number>;
};

