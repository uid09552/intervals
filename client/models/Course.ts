/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { ActivityStream } from './ActivityStream';
import type { ActivityWeather } from './ActivityWeather';
import type { Marker } from './Marker';
export type Course = {
    id?: number;
    shared_event_id?: number;
    created?: string;
    updated?: string;
    name?: string;
    types?: Array<'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other'>;
    file_type?: string;
    file_sport_index?: number;
    start_time?: string;
    description?: string;
    distance?: number;
    min_altitude?: number;
    max_altitude?: number;
    average_altitude?: number;
    total_elevation_gain?: number;
    total_elevation_loss?: number;
    start_lat?: number;
    start_lng?: number;
    weather_updated?: string;
    full?: boolean;
    markers?: Array<Marker>;
    streams?: Array<ActivityStream>;
    bounds?: Array<Array<number>>;
    latlngs?: Array<Array<number>>;
    weather?: ActivityWeather;
};

