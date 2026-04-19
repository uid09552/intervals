/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachment } from './Attachment';
import type { HRRecovery } from './HRRecovery';
import type { IcuAchievement } from './IcuAchievement';
import type { Ignore } from './Ignore';
import type { StravaGear } from './StravaGear';
import type { ZoneSet } from './ZoneSet';
import type { ZoneTime } from './ZoneTime';
export type Activity = {
    id?: string;
    start_date_local?: string;
    type?: string;
    icu_ignore_time?: boolean;
    icu_pm_cp?: number;
    icu_pm_w_prime?: number;
    icu_pm_p_max?: number;
    icu_pm_ftp?: number;
    icu_pm_ftp_secs?: number;
    icu_pm_ftp_watts?: number;
    icu_ignore_power?: boolean;
    icu_rolling_cp?: number;
    icu_rolling_w_prime?: number;
    icu_rolling_p_max?: number;
    icu_rolling_ftp?: number;
    icu_rolling_ftp_delta?: number;
    icu_training_load?: number;
    icu_atl?: number;
    icu_ctl?: number;
    ss_p_max?: number;
    ss_w_prime?: number;
    ss_cp?: number;
    paired_event_id?: number;
    icu_ftp?: number;
    icu_joules?: number;
    icu_recording_time?: number;
    elapsed_time?: number;
    icu_weighted_avg_watts?: number;
    carbs_used?: number;
    name?: string;
    description?: string;
    start_date?: string;
    distance?: number;
    icu_distance?: number;
    moving_time?: number;
    coasting_time?: number;
    total_elevation_gain?: number;
    total_elevation_loss?: number;
    timezone?: string;
    trainer?: boolean;
    sub_type?: Activity.sub_type;
    commute?: boolean;
    race?: boolean;
    max_speed?: number;
    average_speed?: number;
    device_watts?: boolean;
    has_heartrate?: boolean;
    max_heartrate?: number;
    average_heartrate?: number;
    average_cadence?: number;
    calories?: number;
    average_temp?: number;
    min_temp?: number;
    max_temp?: number;
    avg_lr_balance?: number;
    gap?: number;
    gap_model?: Activity.gap_model;
    use_elevation_correction?: boolean;
    gear?: StravaGear;
    perceived_exertion?: number;
    device_name?: string;
    power_meter?: string;
    power_meter_serial?: string;
    power_meter_battery?: string;
    crank_length?: number;
    external_id?: string;
    file_sport_index?: number;
    file_type?: string;
    icu_athlete_id?: string;
    created?: string;
    icu_sync_date?: string;
    analyzed?: string;
    icu_w_prime?: number;
    p_max?: number;
    threshold_pace?: number;
    icu_hr_zones?: Array<number>;
    pace_zones?: Array<number>;
    lthr?: number;
    icu_resting_hr?: number;
    icu_weight?: number;
    icu_power_zones?: Array<number>;
    icu_sweet_spot_min?: number;
    icu_sweet_spot_max?: number;
    icu_power_spike_threshold?: number;
    trimp?: number;
    icu_warmup_time?: number;
    icu_cooldown_time?: number;
    icu_chat_id?: number;
    icu_ignore_hr?: boolean;
    ignore_velocity?: boolean;
    ignore_pace?: boolean;
    ignore_parts?: Array<Ignore>;
    icu_training_load_data?: number;
    interval_summary?: Array<string>;
    skyline_chart_bytes?: Array<string>;
    stream_types?: Array<string>;
    has_weather?: boolean;
    has_segments?: boolean;
    power_field_names?: Array<string>;
    power_field?: string;
    icu_zone_times?: Array<ZoneTime>;
    icu_hr_zone_times?: Array<number>;
    pace_zone_times?: Array<number>;
    gap_zone_times?: Array<number>;
    use_gap_zone_times?: boolean;
    custom_zones?: Array<ZoneSet>;
    tiz_order?: Activity.tiz_order;
    polarization_index?: number;
    icu_achievements?: Array<IcuAchievement>;
    icu_intervals_edited?: boolean;
    lock_intervals?: boolean;
    icu_lap_count?: number;
    icu_joules_above_ftp?: number;
    icu_max_wbal_depletion?: number;
    icu_hrr?: HRRecovery;
    icu_sync_error?: string;
    icu_color?: string;
    icu_power_hr_z2?: number;
    icu_power_hr_z2_mins?: number;
    icu_cadence_z2?: number;
    icu_rpe?: number;
    feel?: number;
    kg_lifted?: number;
    decoupling?: number;
    icu_median_time_delta?: number;
    p30s_exponent?: number;
    workout_shift_secs?: number;
    strava_id?: string;
    lengths?: number;
    pool_length?: number;
    compliance?: number;
    coach_tick?: number;
    source?: Activity.source;
    oauth_client_id?: number;
    oauth_client_name?: string;
    average_altitude?: number;
    min_altitude?: number;
    max_altitude?: number;
    power_load?: number;
    hr_load?: number;
    pace_load?: number;
    hr_load_type?: Activity.hr_load_type;
    pace_load_type?: Activity.pace_load_type;
    tags?: Array<string>;
    attachments?: Array<Attachment>;
    recording_stops?: Array<number>;
    average_weather_temp?: number;
    min_weather_temp?: number;
    max_weather_temp?: number;
    average_feels_like?: number;
    min_feels_like?: number;
    max_feels_like?: number;
    average_wind_speed?: number;
    average_wind_gust?: number;
    prevailing_wind_deg?: number;
    headwind_percent?: number;
    tailwind_percent?: number;
    average_clouds?: number;
    max_rain?: number;
    max_snow?: number;
    carbs_ingested?: number;
    route_id?: number;
    pace?: number;
    athlete_max_hr?: number;
    group?: string;
    icu_intensity?: number;
    icu_efficiency_factor?: number;
    icu_power_hr?: number;
    session_rpe?: number;
    average_stride?: number;
    icu_average_watts?: number;
    icu_variability_index?: number;
    strain_score?: number;
};
export namespace Activity {
    export enum sub_type {
        NONE = 'NONE',
        COMMUTE = 'COMMUTE',
        WARMUP = 'WARMUP',
        COOLDOWN = 'COOLDOWN',
        RACE = 'RACE',
    }
    export enum gap_model {
        NONE = 'NONE',
        STRAVA_RUN = 'STRAVA_RUN',
    }
    export enum tiz_order {
        POWER_HR_PACE = 'POWER_HR_PACE',
        POWER_PACE_HR = 'POWER_PACE_HR',
        HR_POWER_PACE = 'HR_POWER_PACE',
        HR_PACE_POWER = 'HR_PACE_POWER',
        PACE_POWER_HR = 'PACE_POWER_HR',
        PACE_HR_POWER = 'PACE_HR_POWER',
    }
    export enum source {
        STRAVA = 'STRAVA',
        UPLOAD = 'UPLOAD',
        MANUAL = 'MANUAL',
        GARMIN_CONNECT = 'GARMIN_CONNECT',
        OAUTH_CLIENT = 'OAUTH_CLIENT',
        DROPBOX = 'DROPBOX',
        POLAR = 'POLAR',
        SUUNTO = 'SUUNTO',
        COROS = 'COROS',
        WAHOO = 'WAHOO',
        ZWIFT = 'ZWIFT',
        ZEPP = 'ZEPP',
        CONCEPT2 = 'CONCEPT2',
        HUAWEI = 'HUAWEI',
    }
    export enum hr_load_type {
        AVG_HR = 'AVG_HR',
        HR_ZONES = 'HR_ZONES',
        HRSS = 'HRSS',
    }
    export enum pace_load_type {
        SWIM = 'SWIM',
        RUN = 'RUN',
    }
}

