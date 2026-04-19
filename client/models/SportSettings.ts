/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityCharts } from './ActivityCharts';
import type { Display } from './Display';
import type { PowerModel } from './PowerModel';
export type SportSettings = {
    id?: number;
    athlete_id?: string;
    types?: Array<'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other'>;
    warmup_time?: number;
    cooldown_time?: number;
    ftp?: number;
    indoor_ftp?: number;
    w_prime?: number;
    p_max?: number;
    power_zones?: Array<number>;
    sweet_spot_min?: number;
    sweet_spot_max?: number;
    power_spike_threshold?: number;
    power_zone_names?: Array<string>;
    ftp_est_min_secs?: number;
    use_laps_for_power_intervals?: boolean;
    keep_all_laps_for_power_intervals?: boolean;
    power_intervals_start_locked?: boolean;
    after_kj0?: number;
    after_kj1?: number;
    power_field?: string;
    lthr?: number;
    max_hr?: number;
    hr_zones?: Array<number>;
    hr_zone_names?: Array<string>;
    hr_load_type?: SportSettings.hr_load_type;
    hrrc_min_percent?: number;
    threshold_pace?: number;
    pace_units?: SportSettings.pace_units;
    pace_zones?: Array<number>;
    pace_zone_names?: Array<string>;
    pace_load_type?: SportSettings.pace_load_type;
    gap_model?: SportSettings.gap_model;
    elevation_correction?: SportSettings.elevation_correction;
    use_gap_zone_times?: boolean;
    best_effort_distances?: Array<number>;
    pace_curve_start?: number;
    load_order?: SportSettings.load_order;
    tiz_order?: SportSettings.tiz_order;
    workout_order?: SportSettings.workout_order;
    interval_display?: SportSettings.interval_display;
    default_gear_id?: string;
    default_indoor_gear_id?: string;
    extract_workouts?: boolean;
    show_pauses?: number;
    ignore_velocity?: boolean;
    default_workout_time?: string;
    update_activity_name_from_workout?: boolean;
    created?: string;
    updated?: string;
    mmp_model?: PowerModel;
    display?: Display;
    activity_field_ids?: Array<number>;
    activity_charts?: ActivityCharts;
    custom_field_ids?: Array<number>;
    custom_field_values?: Record<string, Record<string, any>>;
    custom_zones_ids?: Array<number>;
    calendar_tile_activity_panel_id?: number;
    other?: boolean;
    iseFTPSupported?: boolean;
    use_distance_for_intervals?: boolean;
};
export namespace SportSettings {
    export enum hr_load_type {
        AVG_HR = 'AVG_HR',
        HR_ZONES = 'HR_ZONES',
        HRSS = 'HRSS',
    }
    export enum pace_units {
        SECS_100M = 'SECS_100M',
        SECS_100Y = 'SECS_100Y',
        MINS_KM = 'MINS_KM',
        MINS_MILE = 'MINS_MILE',
        SECS_500M = 'SECS_500M',
        SECS_400M = 'SECS_400M',
        SECS_250M = 'SECS_250M',
        NONE = 'NONE',
    }
    export enum pace_load_type {
        SWIM = 'SWIM',
        RUN = 'RUN',
    }
    export enum gap_model {
        NONE = 'NONE',
        STRAVA_RUN = 'STRAVA_RUN',
    }
    export enum elevation_correction {
        NO = 'NO',
        AUTO = 'AUTO',
        YES = 'YES',
    }
    export enum load_order {
        POWER_HR_PACE = 'POWER_HR_PACE',
        POWER_PACE_HR = 'POWER_PACE_HR',
        HR_POWER_PACE = 'HR_POWER_PACE',
        HR_PACE_POWER = 'HR_PACE_POWER',
        PACE_POWER_HR = 'PACE_POWER_HR',
        PACE_HR_POWER = 'PACE_HR_POWER',
    }
    export enum tiz_order {
        POWER_HR_PACE = 'POWER_HR_PACE',
        POWER_PACE_HR = 'POWER_PACE_HR',
        HR_POWER_PACE = 'HR_POWER_PACE',
        HR_PACE_POWER = 'HR_PACE_POWER',
        PACE_POWER_HR = 'PACE_POWER_HR',
        PACE_HR_POWER = 'PACE_HR_POWER',
    }
    export enum workout_order {
        POWER_HR_PACE = 'POWER_HR_PACE',
        POWER_PACE_HR = 'POWER_PACE_HR',
        HR_POWER_PACE = 'HR_POWER_PACE',
        HR_PACE_POWER = 'HR_PACE_POWER',
        PACE_POWER_HR = 'PACE_POWER_HR',
        PACE_HR_POWER = 'PACE_HR_POWER',
    }
    export enum interval_display {
        POWER_HR_PACE = 'POWER_HR_PACE',
        POWER_PACE_HR = 'POWER_PACE_HR',
        HR_POWER_PACE = 'HR_POWER_PACE',
        HR_PACE_POWER = 'HR_PACE_POWER',
        PACE_POWER_HR = 'PACE_POWER_HR',
        PACE_HR_POWER = 'PACE_HR_POWER',
    }
}

