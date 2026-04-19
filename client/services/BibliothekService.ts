/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFolderDTO } from '../models/CreateFolderDTO';
import type { DuplicateWorkoutsDTO } from '../models/DuplicateWorkoutsDTO';
import type { Folder } from '../models/Folder';
import type { SharedWith } from '../models/SharedWith';
import type { Workout } from '../models/Workout';
import type { WorkoutEx } from '../models/WorkoutEx';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BibliothekService {
    /**
     * Get a workout
     * @param id
     * @param workoutId
     * @returns Workout OK
     * @throws ApiError
     */
    public static showWorkout(
        id: string,
        workoutId: number,
    ): CancelablePromise<Workout> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/workouts/{workoutId}',
            path: {
                'id': id,
                'workoutId': workoutId,
            },
        });
    }
    /**
     * Update a workout
     * @param id
     * @param workoutId
     * @param requestBody
     * @returns Workout OK
     * @throws ApiError
     */
    public static updateWorkout(
        id: string,
        workoutId: number,
        requestBody: WorkoutEx,
    ): CancelablePromise<Workout> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/workouts/{workoutId}',
            path: {
                'id': id,
                'workoutId': workoutId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a workout (and optionally others added at the same time if the workout is on a plan)
     * Returns the ids of the deleted workout(s)
     * @param id
     * @param workoutId
     * @param others
     * @returns number OK
     * @throws ApiError
     */
    public static deleteWorkout(
        id: string,
        workoutId: number,
        others?: boolean,
    ): CancelablePromise<Array<number>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/athlete/{id}/workouts/{workoutId}',
            path: {
                'id': id,
                'workoutId': workoutId,
            },
            query: {
                'others': others,
            },
        });
    }
    /**
     * Update a range of workouts on a plan. Currently only hide_from_athlete can be changed
     * @param id
     * @param folderId
     * @param oldest
     * @param newest
     * @param requestBody
     * @returns Workout OK
     * @throws ApiError
     */
    public static updatePlanWorkouts(
        id: string,
        folderId: number,
        oldest: number,
        newest: number,
        requestBody: Workout,
    ): CancelablePromise<Array<Workout>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/folders/{folderId}/workouts',
            path: {
                'id': id,
                'folderId': folderId,
            },
            query: {
                'oldest': oldest,
                'newest': newest,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List athletes that the folder or plan has been shared with
     * @param id
     * @param folderId
     * @returns SharedWith OK
     * @throws ApiError
     */
    public static listFolderSharedWith(
        id: string,
        folderId: number,
    ): CancelablePromise<Array<SharedWith>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/folders/{folderId}/shared-with',
            path: {
                'id': id,
                'folderId': folderId,
            },
        });
    }
    /**
     * Add/remove athletes from the share list for the folder
     * @param id
     * @param folderId
     * @param requestBody
     * @returns SharedWith OK
     * @throws ApiError
     */
    public static updateFolderSharedWith(
        id: string,
        folderId: number,
        requestBody: Array<SharedWith>,
    ): CancelablePromise<Array<SharedWith>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/folders/{folderId}/shared-with',
            path: {
                'id': id,
                'folderId': folderId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update a workout folder or plan
     * @param id
     * @param folderId
     * @param requestBody
     * @returns Folder OK
     * @throws ApiError
     */
    public static updateFolder(
        id: string,
        folderId: number,
        requestBody: Folder,
    ): CancelablePromise<Folder> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/folders/{folderId}',
            path: {
                'id': id,
                'folderId': folderId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a workout folder or plan including all workouts
     * @param id
     * @param folderId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteFolder(
        id: string,
        folderId: number,
    ): CancelablePromise<Record<string, Record<string, any>>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/athlete/{id}/folders/{folderId}',
            path: {
                'id': id,
                'folderId': folderId,
            },
        });
    }
    /**
     * Apply any changes from the athlete's current plan to the athlete's calendar
     * Only workouts from today or in the future are updated
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static applyCurrentPlanChanges(
        id: string,
    ): CancelablePromise<Record<string, Record<string, any>>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/apply-plan-changes',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Convert a workout to .zwo (Zwift), .mrc, .erg or .fit
     * The athlete to use is extracted from the bearer token and used to resolve power targets etc.. Note that the create workout endpoint can convert workouts and might be more convenient.
     * @param ext
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static downloadWorkout(
        ext: string,
        requestBody: Workout,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/download-workout{ext}',
            path: {
                'ext': ext,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create multiple new workouts in a folder or plan in the athlete's workout library
     * @param id
     * @param requestBody
     * @returns Workout OK
     * @throws ApiError
     */
    public static createMultipleWorkouts(
        id: string,
        requestBody: Array<WorkoutEx>,
    ): CancelablePromise<Array<Workout>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/workouts/bulk',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all the workouts in the athlete's library
     * @param id
     * @returns Workout OK
     * @throws ApiError
     */
    public static listWorkouts(
        id: string,
    ): CancelablePromise<Array<Workout>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/workouts',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Create a new workout in a folder or plan in the athlete's workout library
     * This endpoint accepts workouts in native Intervals.icu format ('description' field) as well as zwo, mrc, erg and fit files (use 'file_contents' or 'file_contents_base64')
     * @param id
     * @param requestBody
     * @returns Workout OK
     * @throws ApiError
     */
    public static createWorkout(
        id: string,
        requestBody: WorkoutEx,
    ): CancelablePromise<Workout> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/workouts',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create new workout from .zwo, .mrc, .erg or .fit file in a folder
     * @param id
     * @param folderId
     * @param type
     * @param athleteId
     * @param requestBody
     * @returns Workout OK
     * @throws ApiError
     */
    public static importWorkoutFile(
        id: string,
        folderId: number,
        type: 'Ride' | 'Run' | 'Swim' | 'WeightTraining' | 'Hike' | 'Walk' | 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'EMountainBikeRide' | 'Elliptical' | 'Golf' | 'GravelRide' | 'TrackRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hockey' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'Cyclocross' | 'NordicSki' | 'OpenWaterSwim' | 'Padel' | 'Pilates' | 'Pickleball' | 'Racquetball' | 'Rugby' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Transition' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'VirtualSki' | 'WaterSport' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | 'Other',
        athleteId?: string,
        requestBody?: {
            file: Blob;
        },
    ): CancelablePromise<Workout> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/folders/{folderId}/import-workout',
            path: {
                'id': id,
                'folderId': folderId,
            },
            query: {
                'athleteId': athleteId,
                'type': type,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all the athlete's folders, plans and workouts
     * @param id
     * @returns Folder OK
     * @throws ApiError
     */
    public static listFolders(
        id: string,
    ): CancelablePromise<Array<Folder>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/folders',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Create a new workout folder or plan
     * @param id
     * @param requestBody
     * @returns Folder OK
     * @throws ApiError
     */
    public static createFolder(
        id: string,
        requestBody: CreateFolderDTO,
    ): CancelablePromise<Folder> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/folders',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Duplicate workouts on a plan
     * @param id
     * @param requestBody
     * @returns Workout OK
     * @throws ApiError
     */
    public static duplicateWorkouts(
        id: string,
        requestBody: DuplicateWorkoutsDTO,
    ): CancelablePromise<Array<Workout>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/duplicate-workouts',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Convert a workout to .zwo (Zwift), .mrc, .erg or .fit.
     * The athlete's settings are used to resolve power targets etc.. Note that the create workout endpoint can convert workouts and might be more convenient.
     * @param id
     * @param ext
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static downloadWorkoutForAthlete(
        id: string,
        ext: string,
        requestBody: Workout,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/download-workout{ext}',
            path: {
                'id': id,
                'ext': ext,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all tags that have been applied to workouts in the athlete's library
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    public static listTags(
        id: string,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/workout-tags',
            path: {
                'id': id,
            },
        });
    }
}
