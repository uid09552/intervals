/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatMember } from './ChatMember';
import type { Folder } from './Folder';
export type Chat = {
    id?: number;
    type?: Chat.type;
    coaching_group?: string;
    updated?: string;
    name?: string;
    picture?: string;
    description?: string;
    url?: string;
    slug?: string;
    pub?: boolean;
    join_policy?: Chat.join_policy;
    sidebar_logo?: string;
    sidebar_color?: string;
    sidebar_dark?: boolean;
    sidebar_top_color?: string;
    hide_members?: boolean;
    members_cannot_chat?: boolean;
    primary_group?: boolean;
    coins?: number;
    members?: Array<ChatMember>;
    athlete_id?: string;
    activity_id?: string;
    other_athlete_id?: string;
    other_athlete_sex?: string;
    follows_you?: string;
    you_follow?: string;
    role?: Chat.role;
    new_message_count?: number;
    kicked?: string;
    kicked_by_id?: string;
    last_seen_message_id?: number;
    mute_until?: string;
    sharedFolders?: Array<Folder>;
};
export namespace Chat {
    export enum type {
        PRIVATE = 'PRIVATE',
        GROUP = 'GROUP',
        ACTIVITY = 'ACTIVITY',
    }
    export enum join_policy {
        OPEN = 'OPEN',
        ASK = 'ASK',
        INVITE_ONLY = 'INVITE_ONLY',
    }
    export enum role {
        MEMBER = 'MEMBER',
        FOLLOWER = 'FOLLOWER',
        COACH = 'COACH',
        ADMIN = 'ADMIN',
    }
}

