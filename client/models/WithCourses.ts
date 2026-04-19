/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AthleteSearchResult } from './AthleteSearchResult';
import type { Course } from './Course';
export type WithCourses = {
    id?: number;
    external_id?: string;
    slug?: string;
    athlete_id?: string;
    category?: WithCourses.category;
    types?: Array<'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other'>;
    name?: string;
    start_date_local?: string;
    updated?: string;
    visibility?: WithCourses.visibility;
    chat_id?: number;
    description?: string;
    website?: string;
    closing_date_local?: string;
    location?: string;
    address?: string;
    country?: string;
    region?: string;
    lat?: number;
    lon?: number;
    route_file?: string;
    polyline?: string;
    banner_image_url?: string;
    banner_image_width?: number;
    banner_image_height?: number;
    usage_count?: number;
    owner?: AthleteSearchResult;
    courses?: Array<Course>;
};
export namespace WithCourses {
    export enum category {
        RACE = 'RACE',
        WORKOUT = 'WORKOUT',
    }
    export enum visibility {
        PUBLIC = 'PUBLIC',
        GROUP = 'GROUP',
    }
}

