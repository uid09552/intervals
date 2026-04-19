/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { AthleteRoute } from './AthleteRoute';
export type RouteSimilarity = {
    route?: AthleteRoute;
    route_distance?: number;
    route_activity_count?: number;
    other?: AthleteRoute;
    other_distance?: number;
    other_activity_count?: number;
    similarity?: number;
    bounds?: Array<Array<number>>;
};

