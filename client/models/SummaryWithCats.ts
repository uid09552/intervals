/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { CategorySummary } from './CategorySummary';
export type SummaryWithCats = {
    count?: number;
    time?: number;
    moving_time?: number;
    elapsed_time?: number;
    calories?: number;
    total_elevation_gain?: number;
    training_load?: number;
    srpe?: number;
    distance?: number;
    eftp?: number;
    eftpPerKg?: number;
    date?: string;
    athlete_id?: string;
    athlete_name?: string;
    email?: string;
    external_id?: string;
    fitness?: number;
    fatigue?: number;
    form?: number;
    rampRate?: number;
    weight?: number;
    timeInZones?: Array<number>;
    timeInZonesTot?: number;
    byCategory?: Array<CategorySummary>;
    mostRecentWellnessId?: string;
};

