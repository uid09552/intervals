/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Activity } from './Activity';
export type Message = {
    id?: number;
    athlete_id?: string;
    name?: string;
    created?: string;
    type?: Message.type;
    content?: string;
    activity_id?: string;
    start_index?: number;
    end_index?: number;
    answer?: string;
    activity?: Activity;
    attachment_url?: string;
    attachment_mime_type?: string;
    deleted?: string;
    deleted_by_id?: string;
    join_group_id?: number;
    accept_coaching_group_id?: number;
    seen?: boolean;
};
export namespace Message {
    export enum type {
        TEXT = 'TEXT',
        FOLLOW_REQ = 'FOLLOW_REQ',
        COACH_REQ = 'COACH_REQ',
        COACH_ME_REQ = 'COACH_ME_REQ',
        ACTIVITY = 'ACTIVITY',
        NOTE = 'NOTE',
        JOIN_REQ = 'JOIN_REQ',
        ACCEPT_COACHING_GROUP = 'ACCEPT_COACHING_GROUP',
    }
}

