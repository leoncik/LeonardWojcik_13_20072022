// Interfaces
import { IUserLoginInfo } from '../interfaces/apiInterfaces';
import { IUserName } from '../interfaces/apiInterfaces';

// Helpers
import { notificationMessages } from './notificationMessages';

/**
 * Checks if the status of a fetch is ok
 * @param {IFetchObject} data - Fetched data.
 * @returns {boolean}
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const isStatusOk = (data: any) =>
    data.data.status < 300 && data.data.status >= 200 ? true : false;
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Fetches data from url.
 * @param {string} apiEndpoint - Fetched url
 * @param {string} requestBody  - body send with POST method
 * @returns {}
 */
export const genericPostRequest = async (
    apiEndpoint: string,
    requestBody: IUserLoginInfo
) => {
    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        });
        const data = await response.json();
        const isSuccess = false;
        const responseObject = { data, isSuccess };
        if (isStatusOk(responseObject)) {
            responseObject.isSuccess = true;
        }
        return responseObject;
    } catch (error) {
        const errorMessage = notificationMessages.failedSignIn;
        return errorMessage;
    }
};

/**
 * Send a POST request to authenticate user.
 * @param apiEndpoint - Fetched URL
 * @param token - user's token
 * @returns
 */
export const authenticationRequest = async (
    apiEndpoint: string,
    token: string
) => {
    const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    const isSuccess = false;
    const responseObject = { data, isSuccess };
    if (isStatusOk(responseObject)) {
        responseObject.isSuccess = true;
    }
    return responseObject;
};

/**
 * Send a PUT request.
 * @param {string} apiEndpoint - Fetched url
 * @param {string} requestBody  - body send with PUT method
 * @returns {}
 */
export const genericPutRequest = async (
    apiEndpoint: string,
    requestBody: IUserName,
    token: string
) => {
    try {
        const response = await fetch(apiEndpoint, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(requestBody),
        });
        const data = await response.json();
        const isSuccess = false;
        const responseObject = { data, isSuccess };
        if (isStatusOk(responseObject)) {
            responseObject.isSuccess = true;
        }
        return responseObject;
    } catch (error) {
        console.log(error);
        return false;
    }
};
