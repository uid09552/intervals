/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChatMember = {
    athlete_id?: string;
    name?: string;
    profile_medium?: string;
    role?: ChatMember.role;
    coach?: boolean;
    plan?: ChatMember.plan;
    accepted_coaching_group?: string;
};
export namespace ChatMember {
    export enum role {
        MEMBER = 'MEMBER',
        FOLLOWER = 'FOLLOWER',
        COACH = 'COACH',
        ADMIN = 'ADMIN',
    }
    export enum plan {
        FREE = 'FREE',
        PREMIUM = 'PREMIUM',
        SUPPORTER = 'SUPPORTER',
        WHITELABEL = 'WHITELABEL',
    }
}

