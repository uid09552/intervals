/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachment } from './Attachment';
import type { PushError } from './PushError';
export type Event = {
    id?: number;
    start_date_local?: string;
    icu_training_load?: number;
    icu_atl?: number;
    icu_ctl?: number;
    type?: string;
    carbs_used?: number;
    ss_p_max?: number;
    ss_w_prime?: number;
    ss_cp?: number;
    calendar_id?: number;
    uid?: string;
    athlete_id?: string;
    category?: Event.category;
    end_date_local?: string;
    name?: string;
    description?: string;
    indoor?: boolean;
    color?: string;
    moving_time?: number;
    icu_ftp?: number;
    w_prime?: number;
    p_max?: number;
    atl_days?: number;
    ctl_days?: number;
    updated?: string;
    not_on_fitness_chart?: boolean;
    show_as_note?: boolean;
    show_on_ctl_line?: boolean;
    for_week?: boolean;
    target?: Event.target;
    joules?: number;
    joules_above_ftp?: number;
    workout_doc?: Record<string, Record<string, any>>;
    push_errors?: Array<PushError>;
    athlete_cannot_edit?: boolean;
    hide_from_athlete?: boolean;
    structure_read_only?: boolean;
    created_by_id?: string;
    shared_event_id?: number;
    entered?: boolean;
    carbs_per_hour?: number;
    sub_type?: Event.sub_type;
    distance?: number;
    tags?: Array<string>;
    attachments?: Array<Attachment>;
    oauth_client_id?: number;
    external_id?: string;
    load_target?: number;
    time_target?: number;
    distance_target?: number;
    training_availability?: Event.training_availability;
    max_training_time?: number;
    can_train_sports?: Array<'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other'>;
    plan_athlete_id?: string;
    plan_folder_id?: number;
    plan_workout_id?: number;
    plan_applied?: string;
    icu_intensity?: number;
    strain_score?: number;
};
export namespace Event {
    export enum category {
        WORKOUT = 'WORKOUT',
        RACE_A = 'RACE_A',
        RACE_B = 'RACE_B',
        RACE_C = 'RACE_C',
        NOTE = 'NOTE',
        PLAN = 'PLAN',
        HOLIDAY = 'HOLIDAY',
        SICK = 'SICK',
        INJURED = 'INJURED',
        SET_EFTP = 'SET_EFTP',
        FITNESS_DAYS = 'FITNESS_DAYS',
        SEASON_START = 'SEASON_START',
        TARGET = 'TARGET',
        SET_FITNESS = 'SET_FITNESS',
    }
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
    export enum training_availability {
        NORMAL = 'NORMAL',
        LIMITED = 'LIMITED',
        UNAVAILABLE = 'UNAVAILABLE',
    }
}

