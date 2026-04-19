/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AthleteSearchResult } from './AthleteSearchResult';
import type { Workout } from './Workout';
export type CreateFolderDTO = {
    athlete_id?: string;
    id?: number;
    type?: CreateFolderDTO.type;
    name?: string;
    description?: string;
    children?: Array<Workout>;
    visibility?: CreateFolderDTO.visibility;
    start_date_local?: string;
    rollout_weeks?: number;
    auto_rollout_day?: number;
    read_only_workouts?: boolean;
    starting_ctl?: number;
    starting_atl?: number;
    activity_types?: Array<'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other'>;
    num_workouts?: number;
    duration_weeks?: number;
    hours_per_week_min?: number;
    hours_per_week_max?: number;
    workout_targets?: Array<'AUTO' | 'POWER' | 'HR' | 'PACE'>;
    blurb?: string;
    canEdit?: boolean;
    sharedWithCount?: number;
    shareToken?: string;
    owner?: AthleteSearchResult;
    copy_folder_id?: number;
};
export namespace CreateFolderDTO {
    export enum type {
        FOLDER = 'FOLDER',
        PLAN = 'PLAN',
    }
    export enum visibility {
        PRIVATE = 'PRIVATE',
        PUBLIC = 'PUBLIC',
    }
}

