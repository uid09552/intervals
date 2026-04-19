/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityFilter } from './ActivityFilter';
import type { AthleteTrainingAvailability } from './AthleteTrainingAvailability';
import type { CoachTick } from './CoachTick';
import type { Settings } from './Settings';
import type { StravaGear } from './StravaGear';
export type Athlete = {
    id?: string;
    name?: string;
    firstname?: string;
    lastname?: string;
    profile_medium?: string;
    measurement_preference?: string;
    weight_pref_lb?: boolean;
    fahrenheit?: boolean;
    wind_speed?: Athlete.wind_speed;
    rain?: Athlete.rain;
    weight?: number;
    email?: string;
    sex?: string;
    city?: string;
    state?: string;
    country?: string;
    countries?: Array<string>;
    languages?: Array<string>;
    bikes?: Array<StravaGear>;
    shoes?: Array<StravaGear>;
    timezone?: string;
    locale?: string;
    date_format?: string;
    time_format?: string;
    visibility?: Athlete.visibility;
    icu_last_seen?: string;
    status?: Athlete.status;
    status_updated?: string;
    icu_resting_hr?: number;
    icu_weight?: number;
    icu_weight_sync?: Athlete.icu_weight_sync;
    icu_activated?: string;
    icu_queue_pos?: number;
    icu_admin?: boolean;
    icu_friend_invite_token?: string;
    icu_permission?: Athlete.icu_permission;
    icu_effort_secs?: Array<number>;
    icu_coach?: boolean;
    bio?: string;
    website?: string;
    icu_date_of_birth?: string;
    icu_api_key?: string;
    icu_type_settings?: Array<Settings>;
    icu_form_as_percent?: boolean;
    icu_mmp_days?: number;
    icu_wellness_prompt?: boolean;
    wellness_last_prompt_date?: string;
    icu_wellness_keys?: Array<string>;
    private_wellness_keys?: Array<string>;
    icu_track_menstrual_cycle?: boolean;
    icu_menstrual_cycle_perm?: Athlete.icu_menstrual_cycle_perm;
    activity_rpe_prompt?: boolean;
    coach_ticks?: Array<CoachTick>;
    icu_garmin_health?: boolean;
    icu_garmin_training?: boolean;
    icu_garmin_sync_activities?: boolean;
    garmin_sync_activity_types?: Array<'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other'>;
    garmin_sync_after?: string;
    icu_garmin_download_wellness?: boolean;
    icu_garmin_upload_workouts?: boolean;
    icu_garmin_outdoor_power_range?: number;
    icu_garmin_hr_range?: number;
    garmin_pace_range?: number;
    garmin_power_target?: Athlete.garmin_power_target;
    icu_garmin_last_upload?: string;
    icu_garmin_upload_filters?: Array<ActivityFilter>;
    icu_garmin_wellness_keys?: Array<string>;
    open_step_duration?: number;
    polar_scope?: string;
    polar_sync_activities?: boolean;
    polar_sync_activity_types?: Array<'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other'>;
    polar_download_wellness?: boolean;
    polar_wellness_keys?: Array<string>;
    suunto_scope?: string;
    suunto_user_id?: string;
    suunto_sync_activities?: boolean;
    suunto_sync_activity_types?: Array<'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other'>;
    suunto_upload_workouts?: boolean;
    suunto_outdoor_power_range?: number;
    suunto_hr_range?: number;
    suunto_pace_range?: number;
    suunto_last_upload?: string;
    suunto_upload_filters?: Array<ActivityFilter>;
    suunto_download_wellness?: boolean;
    coros_user_id?: string;
    coros_sync_activities?: boolean;
    coros_upload_workouts?: boolean;
    coros_download_wellness?: boolean;
    coros_last_upload?: string;
    concept2_user_id?: string;
    concept2_sync_activities?: boolean;
    zepp_user_id?: string;
    zepp_sync_activities?: boolean;
    zepp_upload_workouts?: boolean;
    zepp_download_wellness?: boolean;
    huawei_user_id?: string;
    huawei_sync_activities?: boolean;
    huawei_upload_workouts?: boolean;
    huawei_download_wellness?: boolean;
    wahoo_user_id?: string;
    wahoo_sync_activities?: boolean;
    wahoo_upload_workouts?: boolean;
    zwift_user_id?: string;
    zwift_sync_activities?: boolean;
    zwift_upload_workouts?: boolean;
    dropbox_scope?: string;
    oura_scope?: string;
    oura_wellness_keys?: Array<string>;
    whoop_scope?: string;
    whoop_wellness_keys?: Array<string>;
    google_scope?: string;
    google_wellness_keys?: Array<string>;
    icu_email_verified?: boolean;
    icu_email_disabled?: string;
    icu_send_achievements?: boolean;
    icu_send_newsletter?: boolean;
    icu_send_private_chat?: boolean;
    icu_send_private_msg?: boolean;
    icu_send_follow_req?: boolean;
    icu_send_group_chat?: boolean;
    icu_send_group_msg?: boolean;
    icu_send_activity_chat?: boolean;
    icu_send_followed_activity_chat?: boolean;
    icu_send_coached_activity_chat?: boolean;
    icu_send_activity_msg?: boolean;
    icu_send_coach_me_req?: boolean;
    icu_send_gear_alerts?: boolean;
    icu_send_plan_for_week?: boolean;
    include_descr_in_plan_for_week?: boolean;
    icu_send_followed_new_activity?: boolean;
    icu_send_coached_new_activity?: boolean;
    icu_send_coach_tick?: boolean;
    strava_allowed?: boolean;
    strava_id?: number;
    scope?: string;
    strava_sync_activities?: boolean;
    strava_sync_activity_types?: Array<'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other'>;
    strava_sync_other_activities?: boolean;
    ignore_strava_gear?: boolean;
    update_strava_name?: boolean;
    add_weather_to_strava_descr?: boolean;
    height?: number;
    height_units?: Athlete.height_units;
    plan?: Athlete.plan;
    plan_expires?: string;
    trial_end_date?: string;
    sponsored_by_chat_id?: number;
    has_password?: boolean;
    beta_user?: boolean;
    currency?: string;
    training_plan_id?: number;
    training_plan_start_date?: string;
    training_availability?: Array<AthleteTrainingAvailability>;
    strava_authorized?: boolean;
};
export namespace Athlete {
    export enum wind_speed {
        MPS = 'MPS',
        KNOTS = 'KNOTS',
        KMH = 'KMH',
        MPH = 'MPH',
        BFT = 'BFT',
    }
    export enum rain {
        MM = 'MM',
        INCHES = 'INCHES',
    }
    export enum visibility {
        PRIVATE = 'PRIVATE',
        PUBLIC = 'PUBLIC',
        HIDDEN = 'HIDDEN',
    }
    export enum status {
        ACTIVE = 'ACTIVE',
        DORMANT = 'DORMANT',
        ARCHIVED = 'ARCHIVED',
    }
    export enum icu_weight_sync {
        NONE = 'NONE',
        STRAVA = 'STRAVA',
    }
    export enum icu_permission {
        NONE = 'NONE',
        READ = 'READ',
        WRITE = 'WRITE',
    }
    export enum icu_menstrual_cycle_perm {
        NONE = 'NONE',
        READ = 'READ',
        WRITE = 'WRITE',
    }
    export enum garmin_power_target {
        POWER_LAP = 'POWER_LAP',
        POWER = 'POWER',
        POWER_3S = 'POWER_3S',
        POWER_10S = 'POWER_10S',
        POWER_30S = 'POWER_30S',
    }
    export enum height_units {
        CM = 'CM',
        FEET = 'FEET',
    }
    export enum plan {
        FREE = 'FREE',
        PREMIUM = 'PREMIUM',
        SUPPORTER = 'SUPPORTER',
        WHITELABEL = 'WHITELABEL',
    }
}

