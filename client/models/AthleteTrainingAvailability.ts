/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AthleteTrainingAvailability = {
    day_of_week?: number;
    training_availability?: AthleteTrainingAvailability.training_availability;
    max_training_time?: number;
    can_train_sports?: Array<'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other'>;
};
export namespace AthleteTrainingAvailability {
    export enum training_availability {
        NORMAL = 'NORMAL',
        LIMITED = 'LIMITED',
        UNAVAILABLE = 'UNAVAILABLE',
    }
}

