/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Chat } from '../models/Chat';
import type { Message } from '../models/Message';
import type { NewActivityMsg } from '../models/NewActivityMsg';
import type { NewMessage } from '../models/NewMessage';
import type { NewMsg } from '../models/NewMsg';
import type { SendResponse } from '../models/SendResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChatsService {
    /**
     * Update last seen message for the chat
     * @param id
     * @param msgId
     * @returns any OK
     * @throws ApiError
     */
    public static updateLastSeenMessageId(
        id: number,
        msgId: number,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/chats/{id}/messages/{msgId}/seen',
            path: {
                'id': id,
                'msgId': msgId,
            },
        });
    }
    /**
     * Update a message
     * Only the content or answer can be updated
     * @param id
     * @param msgId
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static updateMessage(
        id: number,
        msgId: number,
        requestBody: Message,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/chats/{id}/messages/{msgId}',
            path: {
                'id': id,
                'msgId': msgId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a message
     * @param id
     * @param msgId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMessage(
        id: number,
        msgId: number,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/chats/{id}/messages/{msgId}',
            path: {
                'id': id,
                'msgId': msgId,
            },
        });
    }
    /**
     * Send a message
     * Returns the new message id. If a new chat was created then it is also returned.
     * @param requestBody
     * @returns SendResponse OK
     * @throws ApiError
     */
    public static sendMessage(
        requestBody: NewMessage,
    ): CancelablePromise<SendResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/chats/send-message',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all messages (comments) for the activity
     * @param id
     * @param sinceId
     * @param limit
     * @returns Message OK
     * @throws ApiError
     */
    public static listActivityMessages(
        id: string,
        sinceId?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Message>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/activity/{id}/messages',
            path: {
                'id': id,
            },
            query: {
                'sinceId': sinceId,
                'limit': limit,
            },
        });
    }
    /**
     * Add a message (comment) to an activity
     * @param id
     * @param requestBody
     * @returns NewMsg OK
     * @throws ApiError
     */
    public static sendActivityMessage(
        id: string,
        requestBody: NewActivityMsg,
    ): CancelablePromise<NewMsg> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/activity/{id}/messages',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List messages for the chat, most recent first
     * @param id
     * @param beforeId Only return messages older than this one
     * @param limit Return up to this many messages (default 30, max 100)
     * @returns Message OK
     * @throws ApiError
     */
    public static listMessages(
        id: number,
        beforeId?: number,
        limit?: number,
    ): CancelablePromise<Array<Message>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/chats/{id}/messages',
            path: {
                'id': id,
            },
            query: {
                'beforeId': beforeId,
                'limit': limit,
            },
        });
    }
    /**
     * Get a chat by id
     * @param id
     * @returns Chat OK
     * @throws ApiError
     */
    public static showChat(
        id: number,
    ): CancelablePromise<Chat> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/chats/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * List chats for the athlete, most recently active first
     * Only returns activity chats that have new_msg_count > 0 or that have been updated recently
     * @param id
     * @returns Chat OK
     * @throws ApiError
     */
    public static listChats(
        id: string,
    ): CancelablePromise<Array<Chat>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/athlete/{id}/chats',
            path: {
                'id': id,
            },
        });
    }
}
