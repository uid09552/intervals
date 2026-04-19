/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Activity } from '../models/Activity';
import type { ActivityFilter } from '../models/ActivityFilter';
import type { ActivityHRCurvePayload } from '../models/ActivityHRCurvePayload';
import type { ActivityId } from '../models/ActivityId';
import type { ActivityPowerCurvePayload } from '../models/ActivityPowerCurvePayload';
import type { ActivitySearchResult } from '../models/ActivitySearchResult';
import type { ActivityStream } from '../models/ActivityStream';
import type { ActivityWeatherSummary } from '../models/ActivityWeatherSummary';
import type { ActivityWithIntervals } from '../models/ActivityWithIntervals';
import type { BestEfforts } from '../models/BestEfforts';
import type { Bucket } from '../models/Bucket';
import type { DataCurveSetHRCurve } from '../models/DataCurveSetHRCurve';
import type { DataCurveSetPaceCurve } from '../models/DataCurveSetPaceCurve';
import type { DataCurveSetPowerCurve } from '../models/DataCurveSetPowerCurve';
import type { Hidden } from '../models/Hidden';
import type { HRCurve } from '../models/HRCurve';
import type { HRLoadModel } from '../models/HRLoadModel';
import type { IcuSegment } from '../models/IcuSegment';
import type { Interval } from '../models/Interval';
import type { IntervalsDTO } from '../models/IntervalsDTO';
import type { MapData } from '../models/MapData';
import type { PaceCurve } from '../models/PaceCurve';
import type { Plot } from '../models/Plot';
import type { PowerCurve } from '../models/PowerCurve';
import type { PowerHRCurve } from '../models/PowerHRCurve';
import type { PowerModel } from '../models/PowerModel';
import type { PowerVsHRPlot } from '../models/PowerVsHRPlot';
import type { UpdateStreamsResult } from '../models/UpdateStreamsResult';
import type { UploadResponse } from '../models/UploadResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AktivitTenService {
    /**
     * Update streams for the activity from CSV
     * Column headers for streams to be updated must match those returned from the /streams.csv endpoint
     * @param id
     * @param requestBody
     * @returns UpdateStreamsResult OK
     * @throws ApiError
     */
    public static uploadActivityStreamsCsv(
        id: string,
        requestBody?: {
            /**
             * Activity streams CSV file
             */
            file: Blob;
        },
    ): CancelablePromise<UpdateStreamsResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/activity/{id}/streams.csv',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update streams for the activity from JSON
     * @param id
     * @param requestBody
     * @returns UpdateStreamsResult OK
     * @throws ApiError
     */
    public static updateActivityStreams(
        id: string,
        requestBody: Array<ActivityStream>,
    ): CancelablePromise<UpdateStreamsResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/activity/{id}/streams',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Split an interval
     * @param id
     * @param splitAt Index to split interval at
     * @returns IntervalsDTO OK
     * @throws ApiError
     */
    public static splitInterval(
        id: string,
        splitAt: number,
    ): CancelablePromise<IntervalsDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/activity/{id}/split-interval',
            path: {
                'id': id,
            },
            query: {
                'splitAt': splitAt,
            },
        });
    }
    /**
     * Update/create an interval
     * @param id
     * @param intervalId
     * @param requestBody
     * @returns IntervalsDTO OK
     * @throws ApiError
     */
    public static updateInterval(
        id: string,
        intervalId: number,
        requestBody: Interval,
    ): CancelablePromise<IntervalsDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/activity/{id}/intervals/{intervalId}',
            path: {
                'id': id,
                'intervalId': intervalId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get activity intervals
     * @param id
     * @returns IntervalsDTO OK
     * @throws ApiError
     */
    public static getIntervals(
        id: string,
    ): CancelablePromise<IntervalsDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/intervals',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update intervals for an activity
     * @param id
     * @param requestBody
     * @param all Any existing intervals are replaced, otherwise a merge is done
     * @returns IntervalsDTO OK
     * @throws ApiError
     */
    public static updateIntervals(
        id: string,
        requestBody: Array<Interval>,
        all: boolean = true,
    ): CancelablePromise<IntervalsDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/activity/{id}/intervals',
            path: {
                'id': id,
            },
            query: {
                'all': all,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete intervals
     * @param id
     * @param requestBody
     * @returns IntervalsDTO OK
     * @throws ApiError
     */
    public static deleteIntervals(
        id: string,
        requestBody: Array<Interval>,
    ): CancelablePromise<IntervalsDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/activity/{id}/delete-intervals',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get an activity
     * An empty stub object is returned for Strava activities
     * @param id
     * @param intervals Include interval data
     * @returns any default response
     * @throws ApiError
     */
    public static getActivity(
        id: string,
        intervals?: boolean,
    ): CancelablePromise<(Activity | ActivityWithIntervals | Hidden)> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}',
            path: {
                'id': id,
            },
            query: {
                'intervals': intervals,
            },
        });
    }
    /**
     * Update activity
     * Strava activities cannot be updated
     * @param id
     * @param requestBody
     * @returns Activity OK
     * @throws ApiError
     */
    public static updateActivity(
        id: string,
        requestBody: Activity,
    ): CancelablePromise<Activity> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/activity/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete an activity
     * @param id
     * @returns ActivityId OK
     * @throws ApiError
     */
    public static deleteActivity(
        id: string,
    ): CancelablePromise<ActivityId> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/activity/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Download zip of Intervals.icu generated activity fit files
     * Strava activities are not included
     * @param id
     * @param ids Activity id's to download
     * @param power Include power data
     * @param hr Include heart rate data
     * @returns any OK
     * @throws ApiError
     */
    public static downloadActivityFitFiles(
        id: string,
        ids: Array<string>,
        power: boolean = true,
        hr: boolean = true,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/download-fit-files',
            path: {
                'id': id,
            },
            query: {
                'power': power,
                'hr': hr,
                'ids': ids,
            },
        });
    }
    /**
     * Create multiple manual activities with upsert on external_id
     * Existing activities with matching external_id, created by the same OAuth application are updated. Activities created/updated are returned. Activities with no external_id are always created.
     * @param id
     * @param requestBody
     * @returns Activity OK
     * @throws ApiError
     */
    public static createMultipleManualActivities(
        id: string,
        requestBody: Array<Activity>,
    ): CancelablePromise<Array<Activity>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/activities/manual/bulk',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create a manual activity
     * @param id
     * @param requestBody
     * @returns Activity OK
     * @throws ApiError
     */
    public static createManualActivity(
        id: string,
        requestBody: Activity,
    ): CancelablePromise<Activity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/activities/manual',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List activities for a date range in desc date order
     * An empty stub object is returned for Strava activities
     * @param id
     * @param oldest Local ISO-8601 date or date and time e.g. 2019-07-22T16:18:49 or 2019-07-22
     * @param newest Local ISO-8601 date or date and time, defaults to now
     * @param routeId Only return activities on this route
     * @param limit Return at most this many activities
     * @param fields Comma separated list of field names to include in the returned objects (default is all), also excludes null values
     * @returns Activity OK
     * @throws ApiError
     */
    public static listActivities(
        id: string,
        oldest: string,
        newest?: string,
        routeId?: number,
        limit?: number,
        fields?: Array<string>,
    ): CancelablePromise<Array<Activity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/activities',
            path: {
                'id': id,
            },
            query: {
                'oldest': oldest,
                'newest': newest,
                'route_id': routeId,
                'limit': limit,
                'fields': fields,
            },
        });
    }
    /**
     * Create new activities from an uploaded file (fit, tcx, gpx or zip or gz of the same) as multipart/form-data
     * Use the 'file' form parameter to supply the uploaded file. Multisport files are split into multiple activities. Activities are de-duped using a hash of the file. Response code is 201 if at least one new activity was created and 200 otherwise (all dups).
     * @param id
     * @param name Activity name
     * @param description Activity description
     * @param deviceName Device the activity was created on e.g. Garmin Edge 540
     * @param externalId ID of the activity on the system it came from
     * @param pairedEventId Workout to pair with activity
     * @param requestBody
     * @returns UploadResponse OK
     * @throws ApiError
     */
    public static uploadActivity(
        id: string,
        name?: string,
        description?: string,
        deviceName?: string,
        externalId?: string,
        pairedEventId?: number,
        requestBody?: {
            /**
             * Activity file
             */
            file: Blob;
        },
    ): CancelablePromise<UploadResponse> {
        const query: any = {};
        if (name !== undefined) query['name'] = name;
        if (description !== undefined) query['description'] = description;
        if (deviceName !== undefined) query['device_name'] = deviceName;
        if (externalId !== undefined) query['external_id'] = externalId;
        if (pairedEventId !== undefined) query['paired_event_id'] = pairedEventId;

        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/activities',
            path: {
                'id': id,
            },
            query: query,
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get the athlete's power vs heart rate curve for a date range
     * @param id
     * @param start Starting local date (ISO-8601)
     * @param end Ending local date (ISO-8601), inclusive
     * @returns PowerHRCurve OK
     * @throws ApiError
     */
    public static getPowerHrCurve(
        id: string,
        start: string,
        end: string,
    ): CancelablePromise<PowerHRCurve> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/power-hr-curve',
            path: {
                'id': id,
            },
            query: {
                'start': start,
                'end': end,
            },
        });
    }
    /**
     * List best power curves for the athlete
     * Curves are specified as follows: 1y (past year), 2y (past 2 years) etc., 42d (past 42 days) etc., s0 (current season), s1 (previous season) etc., all (all time), r.2023-10-01.2023-10-31 (date range). Curves can also have a -kj0 or -kj1 suffix to return fatigued curves. If several of f1, f2 and f3 filter parameters are specified then each curve is returned once for each filter, for comparing curves.
     * @param id
     * @param ext
     * @param type The sport (Ride, Run etc.). If filters is not provided or is blank or does not contain a type filter then activities for the types of the sport matching this parameter are included
     * @param f1 If set each curve is returned with these filters applied to compare curves
     * @param f2 If set each curve is returned with these filters applied to compare curves
     * @param f3 If set each curve is returned with these filters applied to compare curves
     * @param newest
     * @param curves Comma separated list of curves to return (default last year)
     * @param includeRanks
     * @param subMaxEfforts
     * @param now Current local date (ISO-8601)
     * @param pmType
     * @param filters Only consider activities matching all the filters in this list
     * @returns DataCurveSetPowerCurve OK
     * @throws ApiError
     */
    public static listAthletePowerCurves(
        id: string,
        ext: string,
        type: 'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other',
        f1: Array<ActivityFilter>,
        f2: Array<ActivityFilter>,
        f3: Array<ActivityFilter>,
        newest?: string,
        curves?: Array<string>,
        includeRanks: boolean = false,
        subMaxEfforts?: number,
        now?: string,
        pmType?: 'MS_2P' | 'MORTON_3P' | 'FFT_CURVES' | 'ECP',
        filters?: Array<ActivityFilter>,
    ): CancelablePromise<DataCurveSetPowerCurve> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/power-curves{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
            query: {
                'newest': newest,
                'curves': curves,
                'type': type,
                'includeRanks': includeRanks,
                'subMaxEfforts': subMaxEfforts,
                'now': now,
                'pmType': pmType,
                'filters': filters,
                'f1': f1,
                'f2': f2,
                'f3': f3,
            },
        });
    }
    /**
     * List best pace curves for the athlete
     * Curves are specified as follows: 1y (past year), 2y (past 2 years) etc., 42d (past 42 days) etc., s0 (current season), s1 (previous season) etc., all (all time), r.2023-10-01.2023-10-31 (date range). If several of f1, f2 and f3 filter parameters are specified then each curve is returned once for each filter, for comparing curves.
     * @param id
     * @param ext
     * @param f1 If set each curve is returned with these filters applied to compare curves
     * @param f2 If set each curve is returned with these filters applied to compare curves
     * @param f3 If set each curve is returned with these filters applied to compare curves
     * @param newest
     * @param curves Comma separated list of curves to return (default last year)
     * @param type The sport (Ride, Run etc.). If filters is not provided or is blank or does not contain a type filter then activities for the types of the sport matching this parameter are included
     * @param includeRanks
     * @param subMaxEfforts
     * @param now Current local date (ISO-8601)
     * @param gap Return gradient adjusted pace curves
     * @param pmType
     * @param filters Only consider activities matching all the filters in this list
     * @returns DataCurveSetPaceCurve OK
     * @throws ApiError
     */
    public static listAthletePaceCurves(
        id: string,
        ext: string,
        f1: Array<ActivityFilter>,
        f2: Array<ActivityFilter>,
        f3: Array<ActivityFilter>,
        newest?: string,
        curves?: Array<string>,
        type?: 'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other',
        includeRanks: boolean = false,
        subMaxEfforts?: number,
        now?: string,
        gap: boolean = false,
        pmType?: 'CS',
        filters?: Array<ActivityFilter>,
    ): CancelablePromise<DataCurveSetPaceCurve> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/pace-curves{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
            query: {
                'newest': newest,
                'curves': curves,
                'type': type,
                'includeRanks': includeRanks,
                'subMaxEfforts': subMaxEfforts,
                'now': now,
                'gap': gap,
                'pmType': pmType,
                'filters': filters,
                'f1': f1,
                'f2': f2,
                'f3': f3,
            },
        });
    }
    /**
     * Get the power model used to resolve %MMP steps in workouts for the athlete
     * @param id
     * @param type
     * @returns PowerModel OK
     * @throws ApiError
     */
    public static getAthleteMmpModel(
        id: string,
        type: 'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other',
    ): CancelablePromise<PowerModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/mmp-model',
            path: {
                'id': id,
            },
            query: {
                'type': type,
            },
        });
    }
    /**
     * List best heart rate curves for the athlete
     * Curves are specified as follows: 1y (past year), 2y (past 2 years) etc., 42d (past 42 days) etc., s0 (current season), s1 (previous season) etc., all (all time), r.2023-10-01.2023-10-31 (date range). If several of the f1, f2 and f3 filter parameters are specified then each curve is returned once for each filter, for comparing curves.
     * @param id
     * @param ext
     * @param f1 If set each curve is returned with these filters applied to compare curves
     * @param f2 If set each curve is returned with these filters applied to compare curves
     * @param f3 If set each curve is returned with these filters applied to compare curves
     * @param newest
     * @param curves Comma separated list of curves to return (default last year)
     * @param type The sport (Ride, Run etc.). If filters is not provided or is blank or does not contain a type filter then activities for the types of the sport matching this parameter are included
     * @param subMaxEfforts
     * @param now Current local date (ISO-8601)
     * @param filters Only consider activities matching all the filters in this list
     * @returns DataCurveSetHRCurve OK
     * @throws ApiError
     */
    public static listAthleteHrCurves(
        id: string,
        ext: string,
        f1: Array<ActivityFilter>,
        f2: Array<ActivityFilter>,
        f3: Array<ActivityFilter>,
        newest?: string,
        curves?: Array<string>,
        type?: 'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other',
        subMaxEfforts?: number,
        now?: string,
        filters?: Array<ActivityFilter>,
    ): CancelablePromise<DataCurveSetHRCurve> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/hr-curves{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
            query: {
                'newest': newest,
                'curves': curves,
                'type': type,
                'subMaxEfforts': subMaxEfforts,
                'now': now,
                'filters': filters,
                'f1': f1,
                'f2': f2,
                'f3': f3,
            },
        });
    }
    /**
     * List all tags that have been applied to the athlete's activities
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    public static listTags2(
        id: string,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/activity-tags',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get best power for a range of durations for matching activities in the date range
     * Use ext of .csv to get results in CSV format
     * @param id
     * @param ext
     * @param oldest Local ISO-8601 date or date and time e.g. 2019-07-22T16:18:49 or 2019-07-22
     * @param newest Local ISO-8601 date or date and time (inclusive)
     * @param filters Only return activities matching all the filters in this list
     * @param secs Optional durations to return (default is all, in seconds comma separated)
     * @param type The sport (Ride, Run etc.). If filters is not provided or is blank or does not contain a type filter then activities for the types of the sport matching this parameter are included. Required if fatigue is used
     * @param fatigue Use kj0 or kj1 to get one of the athlete's predefined fatigued power curves
     * @returns ActivityPowerCurvePayload OK
     * @throws ApiError
     */
    public static listActivityPowerCurves(
        id: string,
        ext: string,
        oldest: string,
        newest: string,
        filters?: Array<ActivityFilter>,
        secs?: Array<number>,
        type?: 'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other',
        fatigue?: string,
    ): CancelablePromise<ActivityPowerCurvePayload> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/activity-power-curves{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
            query: {
                'oldest': oldest,
                'newest': newest,
                'filters': filters,
                'secs': secs,
                'type': type,
                'fatigue': fatigue,
            },
        });
    }
    /**
     * Get best pace for a range of distances for matching activities in the date range
     * Use ext of .csv to get results in CSV format
     * @param id
     * @param ext
     * @param oldest Local ISO-8601 date or date and time e.g. 2019-07-22T16:18:49 or 2019-07-22
     * @param newest Local ISO-8601 date or date and time (inclusive)
     * @param type The sport (Ride, Run etc.). If filters is not provided or is blank or does not contain a type filter then activities for the types of the sport matching this parameter are included
     * @param filters Only return activities matching all the filters in this list
     * @param distances Distances required (in meters, comma separated)
     * @param gap Return gradient adjusted pace curves
     * @returns any OK
     * @throws ApiError
     */
    public static listActivityPaceCurves(
        id: string,
        ext: string,
        oldest: string,
        newest: string,
        type?: 'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other',
        filters?: Array<ActivityFilter>,
        distances?: Array<number>,
        gap: boolean = false,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/activity-pace-curves{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
            query: {
                'oldest': oldest,
                'newest': newest,
                'type': type,
                'filters': filters,
                'distances': distances,
                'gap': gap,
            },
        });
    }
    /**
     * Get best HR for a range of durations for matching activities in the date range
     * Use ext of .csv to get results in CSV format
     * @param id
     * @param ext
     * @param oldest Local ISO-8601 date or date and time e.g. 2019-07-22T16:18:49 or 2019-07-22
     * @param newest Local ISO-8601 date or date and time (inclusive)
     * @param filters Only return activities matching all the filters in this list
     * @param secs Optional durations to return (default is all, in seconds comma separated)
     * @param type The sport (Ride, Run etc.). If filters is not provided or is blank or does not contain a type filter then activities for the types of the sport matching this parameter are included
     * @returns ActivityHRCurvePayload OK
     * @throws ApiError
     */
    public static listActivityHrCurves(
        id: string,
        ext: string,
        oldest: string,
        newest: string,
        filters?: Array<ActivityFilter>,
        secs?: Array<number>,
        type?: 'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other',
    ): CancelablePromise<ActivityHRCurvePayload> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/activity-hr-curves{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
            query: {
                'oldest': oldest,
                'newest': newest,
                'filters': filters,
                'secs': secs,
                'type': type,
            },
        });
    }
    /**
     * Search for activities by name or tag, returns full activities
     * @param id
     * @param q Search query, case insensitive name search or exact tag search if it starts with #
     * @param limit
     * @returns Activity OK
     * @throws ApiError
     */
    public static searchForActivitiesFull(
        id: string,
        q: string,
        limit?: number,
    ): CancelablePromise<Array<Activity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/activities/search-full',
            path: {
                'id': id,
            },
            query: {
                'q': q,
                'limit': limit,
            },
        });
    }
    /**
     * Search for activities by name or tag, returns summary info
     * @param id
     * @param q Search query, case insensitive name search or exact tag search if it starts with #
     * @param limit
     * @returns ActivitySearchResult OK
     * @throws ApiError
     */
    public static searchForActivities(
        id: string,
        q: string,
        limit?: number,
    ): CancelablePromise<Array<ActivitySearchResult>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/activities/search',
            path: {
                'id': id,
            },
            query: {
                'q': q,
                'limit': limit,
            },
        });
    }
    /**
     * Find activities with intervals matching duration and intensity
     * Activities returned most recent first
     * @param id
     * @param minSecs Min time in seconds
     * @param maxSecs Max time in seconds
     * @param minIntensity Min intensity percentage
     * @param maxIntensity Max intensity percentage
     * @param type Interval type
     * @param minReps Min number of intervals that need to match
     * @param maxReps Max number of intervals that need to match
     * @param limit Max results to return
     * @returns Activity OK
     * @throws ApiError
     */
    public static searchForIntervals(
        id: string,
        minSecs: number,
        maxSecs: number,
        minIntensity: number,
        maxIntensity: number,
        type?: 'AUTO' | 'POWER' | 'HR' | 'PACE',
        minReps: number = 1,
        maxReps: number = 999999,
        limit: number = 30,
    ): CancelablePromise<Array<Activity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/activities/interval-search',
            path: {
                'id': id,
            },
            query: {
                'minSecs': minSecs,
                'maxSecs': maxSecs,
                'minIntensity': minIntensity,
                'maxIntensity': maxIntensity,
                'type': type,
                'minReps': minReps,
                'maxReps': maxReps,
                'limit': limit,
            },
        });
    }
    /**
     * Download activities as CSV
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static downloadActivitiesAsCsv(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/activities.csv',
            path: {
                'id': id,
            },
        });
    }
    /**
     * List activities before and after another activity in closest first order
     * An empty stub object is returned for Strava activities
     * @param id
     * @param activityId The activity at the center (not returned in the data set)
     * @param routeId Only return activities on this route (activityId must have this route_id)
     * @param limit Return at most this many activities (default 30)
     * @returns Activity OK
     * @throws ApiError
     */
    public static listActivitiesAround(
        id: string,
        activityId: string,
        routeId?: number,
        limit: number = 30,
    ): CancelablePromise<Array<Activity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/activities-around',
            path: {
                'id': id,
            },
            query: {
                'activity_id': activityId,
                'route_id': routeId,
                'limit': limit,
            },
        });
    }
    /**
     * Fetch multiple activities by id. Missing activities are ignored
     * Strava activities are returned as empty stubs
     * @param athleteId
     * @param ids
     * @param intervals Include interval data (icu_intervals and icu_groups fields)
     * @returns Activity OK
     * @throws ApiError
     */
    public static getActivities(
        athleteId: string,
        ids: Array<string>,
        intervals?: boolean,
    ): CancelablePromise<Array<Activity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{athleteId}/activities/{ids}',
            path: {
                'athleteId': athleteId,
                'ids': ids,
            },
            query: {
                'intervals': intervals,
            },
        });
    }
    /**
     * Get activity weather summary information
     * @param id
     * @param startIndex Optional index of first point in activity to use
     * @param endIndex Optional index of last point in activity to use (exclusive)
     * @returns ActivityWeatherSummary OK
     * @throws ApiError
     */
    public static getActivityWeatherSummary(
        id: string,
        startIndex?: number,
        endIndex?: number,
    ): CancelablePromise<ActivityWeatherSummary> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/weather-summary',
            path: {
                'id': id,
            },
            query: {
                'start_index': startIndex,
                'end_index': endIndex,
            },
        });
    }
    /**
     * Get activity time at heart rate data
     * @param id
     * @returns Plot OK
     * @throws ApiError
     */
    public static getTimeAtHr(
        id: string,
    ): CancelablePromise<Plot> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/time-at-hr',
            path: {
                'id': id,
            },
        });
    }
    /**
     * List streams for the activity
     * Note that this endpoint will return 'fixed_watts' as 'watts'. If 'raw_watts' is asked for or types is null then the 'watts' stream is renamed to 'raw_watts'. If ext is .csv then CSV data is returned instead of JSON
     * @param id
     * @param ext
     * @param types Streams required
     * @param includeDefaults Include default streams in addition to any specified in types
     * @returns ActivityStream OK
     * @throws ApiError
     */
    public static getActivityStreams(
        id: string,
        ext: string,
        types?: Array<string>,
        includeDefaults: boolean = false,
    ): CancelablePromise<Array<ActivityStream>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/streams{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
            query: {
                'types': types,
                'includeDefaults': includeDefaults,
            },
        });
    }
    /**
     * Get activity segments
     * @param id
     * @returns IcuSegment OK
     * @throws ApiError
     */
    public static getActivitySegments(
        id: string,
    ): CancelablePromise<Array<IcuSegment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/segments',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get activity power vs heart rate data in JSON or CSV (use .csv ext) format
     * @param id
     * @param ext
     * @returns PowerVsHRPlot OK
     * @throws ApiError
     */
    public static getPowerVsHr(
        id: string,
        ext: string,
    ): CancelablePromise<PowerVsHRPlot> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/power-vs-hr{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
        });
    }
    /**
     * Get activity power spike detection model
     * @param id
     * @returns PowerModel OK
     * @throws ApiError
     */
    public static getActivityPowerSpikeModel(
        id: string,
    ): CancelablePromise<PowerModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/power-spike-model',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get activity power histogram
     * @param id
     * @param bucketSize Watts per bucket (default 25)
     * @returns Bucket OK
     * @throws ApiError
     */
    public static getPowerHistogram(
        id: string,
        bucketSize?: number,
    ): CancelablePromise<Array<Bucket>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/power-histogram',
            path: {
                'id': id,
            },
            query: {
                'bucketSize': bucketSize,
            },
        });
    }
    /**
     * Get activity power curve in JSON or CSV (use .csv ext) format
     * @param id
     * @param ext
     * @param fatigue Use kj0 or kj1 to get one of the athlete's predefined fatigued power curves
     * @returns PowerCurve OK
     * @throws ApiError
     */
    public static getActivityPowerCurve(
        id: string,
        ext: string,
        fatigue?: string,
    ): CancelablePromise<PowerCurve> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/power-curve{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
            query: {
                'fatigue': fatigue,
            },
        });
    }
    /**
     * Get activity power curves for one or more streams in JSON or CSV (use .csv ext) format
     * @param id
     * @param ext
     * @param types Comma separated list of streams required (default is watts)
     * @param fatigue Comma separated list of normal, kj0 or kj1 to return normal and/or fatigued curves
     * @returns PowerCurve OK
     * @throws ApiError
     */
    public static listActivityPowerCurves1(
        id: string,
        ext: string,
        types?: Array<string>,
        fatigue?: Array<string>,
    ): CancelablePromise<Array<PowerCurve>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/power-curves{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
            query: {
                'types': types,
                'fatigue': fatigue,
            },
        });
    }
    /**
     * Get activity pace histogram
     * @param id
     * @returns Bucket OK
     * @throws ApiError
     */
    public static getPaceHistogram(
        id: string,
    ): CancelablePromise<Array<Bucket>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/pace-histogram',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get activity pace curve in JSON or CSV (use .csv ext) format
     * @param id
     * @param ext
     * @param gap
     * @returns PaceCurve OK
     * @throws ApiError
     */
    public static getActivityPaceCurve(
        id: string,
        ext: string,
        gap: boolean = false,
    ): CancelablePromise<PaceCurve> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/pace-curve{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
            query: {
                'gap': gap,
            },
        });
    }
    /**
     * Get activity map data
     * @param id
     * @param bounds Optional comma separated bounding box (left, top, right, bottom) to limit points returned
     * @param boundsOnly Only return the map bounds, not the latlngs
     * @param weather Include weather points if available
     * @returns MapData OK
     * @throws ApiError
     */
    public static getActivityMap(
        id: string,
        bounds?: Array<number>,
        boundsOnly: boolean = false,
        weather: boolean = false,
    ): CancelablePromise<MapData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/map',
            path: {
                'id': id,
            },
            query: {
                'bounds': bounds,
                'boundsOnly': boundsOnly,
                'weather': weather,
            },
        });
    }
    /**
     * Return interval like stats for part of the activity
     * @param id
     * @param startIndex
     * @param endIndex
     * @returns Interval OK
     * @throws ApiError
     */
    public static getIntervalStats(
        id: string,
        startIndex: number,
        endIndex: number,
    ): CancelablePromise<Interval> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/interval-stats',
            path: {
                'id': id,
            },
            query: {
                'start_index': startIndex,
                'end_index': endIndex,
            },
        });
    }
    /**
     * Get activity heart rate training load model
     * @param id
     * @returns HRLoadModel OK
     * @throws ApiError
     */
    public static getHrTrainingLoadModel(
        id: string,
    ): CancelablePromise<HRLoadModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/hr-load-model',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get activity heart rate histogram
     * @param id
     * @param bucketSize Beats per bucket (default 5)
     * @returns Bucket OK
     * @throws ApiError
     */
    public static getHrHistogram(
        id: string,
        bucketSize?: number,
    ): CancelablePromise<Array<Bucket>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/hr-histogram',
            path: {
                'id': id,
            },
            query: {
                'bucketSize': bucketSize,
            },
        });
    }
    /**
     * Get activity heart rate curve in JSON or CSV (use .csv ext) format
     * @param id
     * @param ext
     * @returns HRCurve OK
     * @throws ApiError
     */
    public static getActivityHrCurve(
        id: string,
        ext: string,
    ): CancelablePromise<HRCurve> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/hr-curve{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
        });
    }
    /**
     * Download Intervals.icu generated activity gpx file
     * Not supported for Strava activities and activities without GPS data
     * @param id
     * @param power Include power data
     * @param hr Include heart rate data
     * @returns any OK
     * @throws ApiError
     */
    public static downloadActivityGpxFile(
        id: string,
        power: boolean = true,
        hr: boolean = true,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/gpx-file',
            path: {
                'id': id,
            },
            query: {
                'power': power,
                'hr': hr,
            },
        });
    }
    /**
     * Get activity gradient adjusted pace histogram
     * @param id
     * @returns Bucket OK
     * @throws ApiError
     */
    public static getGapHistogram(
        id: string,
    ): CancelablePromise<Array<Bucket>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/gap-histogram',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Download Intervals.icu generated activity fit file
     * Not supported for Strava activities
     * @param id
     * @param power Include power data
     * @param hr Include heart rate data
     * @returns any OK
     * @throws ApiError
     */
    public static downloadActivityFitFile(
        id: string,
        power: boolean = true,
        hr: boolean = true,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/fit-file',
            path: {
                'id': id,
            },
            query: {
                'power': power,
                'hr': hr,
            },
        });
    }
    /**
     * Download original activity file, Strava activities not supported
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static downloadActivityFile(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/file',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Find best efforts in the activity
     * One of duration or distance is required
     * @param id
     * @param stream Stream to search
     * @param duration Duration of each effort in seconds
     * @param distance Distance of each effort in meters
     * @param count Number of efforts to return
     * @param minValue Minimum average value for each interval, intervals will expand if specified
     * @param excludeIntervals If true portions of the stream that are included in work intervals are not considered
     * @param startIndex First point in stream to consider
     * @param endIndex Last point in stream to consider (exclusive, default is whole stream)
     * @returns BestEfforts OK
     * @throws ApiError
     */
    public static findBestEfforts(
        id: string,
        stream: string,
        duration?: number,
        distance?: number,
        count: number = 8,
        minValue?: number,
        excludeIntervals: boolean = false,
        startIndex?: number,
        endIndex?: number,
    ): CancelablePromise<BestEfforts> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/best-efforts',
            path: {
                'id': id,
            },
            query: {
                'stream': stream,
                'duration': duration,
                'distance': distance,
                'count': count,
                'minValue': minValue,
                'excludeIntervals': excludeIntervals,
                'startIndex': startIndex,
                'endIndex': endIndex,
            },
        });
    }
}
