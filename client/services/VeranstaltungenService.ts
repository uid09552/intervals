/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Activity } from '../models/Activity';
import type { ApplyPlanDTO } from '../models/ApplyPlanDTO';
import type { DeleteEventsResponse } from '../models/DeleteEventsResponse';
import type { DoomedEvent } from '../models/DoomedEvent';
import type { DuplicateEventsDTO } from '../models/DuplicateEventsDTO';
import type { Event } from '../models/Event';
import type { EventEx } from '../models/EventEx';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VeranstaltungenService {
    /**
     * Get an event (planned workout, note etc.)
     * @param id
     * @param eventId
     * @returns Event OK
     * @throws ApiError
     */
    public static showEvent(
        id: string,
        eventId: number,
    ): CancelablePromise<Event> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/events/{eventId}',
            path: {
                'id': id,
                'eventId': eventId,
            },
        });
    }
    /**
     * Update an event (planned workout, note etc.)
     * @param id
     * @param eventId
     * @param requestBody
     * @returns Event OK
     * @throws ApiError
     */
    public static updateEvent(
        id: string,
        eventId: number,
        requestBody: EventEx,
    ): CancelablePromise<Event> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/events/{eventId}',
            path: {
                'id': id,
                'eventId': eventId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete an event (planned workout, notes etc.) from an athlete's calendar
     * @param id
     * @param eventId
     * @param others If true then other events added at the same time are also deleted
     * @param notBefore Do not delete other events on the calendar before this local date (ISO-8601)
     * @returns any OK
     * @throws ApiError
     */
    public static deleteEvent(
        id: string,
        eventId: number,
        others?: boolean,
        notBefore?: string,
    ): CancelablePromise<Record<string, Record<string, any>>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/athlete/{id}/events/{eventId}',
            path: {
                'id': id,
                'eventId': eventId,
            },
            query: {
                'others': others,
                'notBefore': notBefore,
            },
        });
    }
    /**
     * Delete events from an athlete's calendar by id or external_id
     * Delete events by id or by external_id. If external_id is supplied then the event must have been created by the calling OAuth application. If both id and external_id are supplied then external_id is used. Events that do not exist are ignored.
     * @param id
     * @param requestBody
     * @returns DeleteEventsResponse OK
     * @throws ApiError
     */
    public static deleteEventsBulk(
        id: string,
        requestBody: Array<DoomedEvent>,
    ): CancelablePromise<DeleteEventsResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/events/bulk-delete',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update all events for a date range at once. Only hide_from_athlete and athlete_cannot_edit can be updated
     * @param id
     * @param oldest Local date (ISO-8601) of oldest event to update
     * @param newest Local date (ISO-8601) of newest event to update (inclusive)
     * @param requestBody
     * @returns Event OK
     * @throws ApiError
     */
    public static updateEvents(
        id: string,
        oldest: string,
        newest: string,
        requestBody: Event,
    ): CancelablePromise<Array<Event>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/athlete/{id}/events',
            path: {
                'id': id,
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
     * Create an event (planned workout, note etc.) on the athlete's calendar
     * This endpoint accepts workouts in native Intervals.icu format ('description' field) as well as zwo, mrc, erg and fit files (use 'file_contents' or 'file_contents_base64')
     * @param id
     * @param upsertOnUid Update event with matching uid instead of creating a new one
     * @param requestBody
     * @returns Event OK
     * @throws ApiError
     */
    public static createEvent(
        id: string,
        upsertOnUid: boolean,
        requestBody: EventEx,
    ): CancelablePromise<Event> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/events',
            path: {
                'id': id,
            },
            query: {
                'upsertOnUid': upsertOnUid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a range of events (planned workouts, notes etc.) from the athlete's calendar
     * @param id
     * @param oldest Local date (ISO-8601) of oldest event to delete
     * @param category Comma separated list of event categories to delete (e.g. WORKOUT)
     * @param newest Local date (ISO-8601) of newest event to delete (inclusive, default is all future events)
     * @param createdById If provided only events created by this athlete (created_by_id field) are deleted
     * @returns any OK
     * @throws ApiError
     */
    public static deleteEvents(
        id: string,
        oldest: string,
        category: Array<string>,
        newest?: string,
        createdById?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/athlete/{id}/events',
            path: {
                'id': id,
            },
            query: {
                'oldest': oldest,
                'newest': newest,
                'createdById': createdById,
                'category': category,
            },
        });
    }
    /**
     * Create a manual activity to match a planned workout
     * @param id
     * @param eventId
     * @returns Activity OK
     * @throws ApiError
     */
    public static markEventAsDone(
        id: string,
        eventId: number,
    ): CancelablePromise<Activity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/events/{eventId}/mark-done',
            path: {
                'id': id,
                'eventId': eventId,
            },
        });
    }
    /**
     * Create multiple events (planned workouts, notes etc.) on the athlete's calendar
     * This endpoint accepts workouts in native Intervals.icu format ('description' field) as well as zwo, mrc, erg and fit files (use 'file_contents' or 'file_contents_base64')
     * @param id
     * @param upsertOnUid Update events with matching uid instead of creating new ones, ignored if upsert=true. For Events with category=TARGET existing matching targets for the date and type are updated
     * @param updatePlanApplied Give all events created or updated the same new plan_applied date (now)
     * @param requestBody
     * @param upsert Update events with matching external_id and created by the same OAuth application instead of creating new ones
     * @returns Event OK
     * @throws ApiError
     */
    public static createMultipleEvents(
        id: string,
        upsertOnUid: boolean,
        updatePlanApplied: boolean,
        requestBody: Array<EventEx>,
        upsert: boolean = false,
    ): CancelablePromise<Array<Event>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/events/bulk',
            path: {
                'id': id,
            },
            query: {
                'upsert': upsert,
                'upsertOnUid': upsertOnUid,
                'updatePlanApplied': updatePlanApplied,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static applyPlan(
        id: string,
        requestBody: ApplyPlanDTO,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/events/apply-plan',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Duplicate one or more events (planned workouts, notes etc.) on the athlete's calendar
     * @param id
     * @param requestBody
     * @returns Event OK
     * @throws ApiError
     */
    public static duplicateEvents(
        id: string,
        requestBody: DuplicateEventsDTO,
    ): CancelablePromise<Array<Event>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/athlete/{id}/duplicate-events',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Download one or more workouts from the athlete's calendar in a zip file
     * @param id
     * @param ext Format: zwo, mrc, erg or fit
     * @param oldest Local date (ISO-8601) of oldest workout
     * @param newest Local date (ISO-8601) of newest workout (inclusive)
     * @param powerRange
     * @param hrRange
     * @param paceRange
     * @param locale
     * @returns any OK
     * @throws ApiError
     */
    public static downloadWorkouts(
        id: string,
        ext: string,
        oldest: string,
        newest: string,
        powerRange?: number,
        hrRange?: number,
        paceRange?: number,
        locale?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/workouts.zip',
            path: {
                'id': id,
            },
            query: {
                'ext': ext,
                'oldest': oldest,
                'newest': newest,
                'powerRange': powerRange,
                'hrRange': hrRange,
                'paceRange': paceRange,
                'locale': locale,
            },
        });
    }
    /**
     * List events that influence the athlete's fitness calculation in ascending date order
     * These have category FITNESS_DAYS (days for fitness and fatigue), SET_FITNESS (set starting fitness and fatigue) and SET_EFTP (set eFTP)
     * @param id
     * @returns Event OK
     * @throws ApiError
     */
    public static listFitnessModelEvents(
        id: string,
    ): CancelablePromise<Array<Event>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/fitness-model-events',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Download a planned workout in zwo, mrc, erg or fit format
     * @param id
     * @param eventId
     * @param ext
     * @returns any OK
     * @throws ApiError
     */
    public static downloadWorkout1(
        id: string,
        eventId: number,
        ext: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/events/{eventId}/download{ext}',
            path: {
                'id': id,
                'eventId': eventId,
                'ext': ext,
            },
        });
    }
    /**
     * List all tags that have been applied to events on the athlete's calendar
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    public static listTags1(
        id: string,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/event-tags',
            path: {
                'id': id,
            },
        });
    }
    /**
     * List events (planned workouts, notes etc.) on the athlete's calendar, add .csv for CSV output
     * @param id
     * @param format
     * @param oldest Local date (ISO-8601) for oldest event to return, default is today in the athletes timezone
     * @param newest Local date (ISO-8601) for newest event to return (inclusive), default is oldest plus 6 days
     * @param category Comma separated list of categories to filter for (e.g. WORKOUT,NOTES)
     * @param limit Max number of events to return (default is all events)
     * @param calendarId
     * @param ext Convert workouts to this format (zwo, mrc, erg or fit) and add workout_filename and workout_file_base64 to workout object
     * @param powerRange Percentage used to convert fixed power targets into a range for outdoor workouts only (default is 2.5 or whatever is configured in the Garmin box in /settings)
     * @param hrRange Percentage used to convert fixed HR targets into a range (default is 1.5 or whatever is configured in the Garmin box in /settings)
     * @param paceRange Percentage used to convert fixed pace targets into a range (default is 2.5 or whatever is configured in the Garmin box in /settings)
     * @param locale Locale (en, es, de etc.) to use for workouts with steps in multiple languages
     * @param resolve Resolve power, heart rate and pace targets to watts, bpm and m/s respectively
     * @returns Event OK
     * @throws ApiError
     */
    public static listEvents(
        id: string,
        format: string,
        oldest?: string,
        newest?: string,
        category?: Array<string>,
        limit?: number,
        calendarId?: number,
        ext?: string,
        powerRange?: number,
        hrRange?: number,
        paceRange?: number,
        locale?: string,
        resolve: boolean = false,
    ): CancelablePromise<Array<Event>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/events{format}',
            path: {
                'id': id,
                'format': format,
            },
            query: {
                'oldest': oldest,
                'newest': newest,
                'category': category,
                'limit': limit,
                'calendar_id': calendarId,
                'ext': ext,
                'powerRange': powerRange,
                'hrRange': hrRange,
                'paceRange': paceRange,
                'locale': locale,
                'resolve': resolve,
            },
        });
    }
}
