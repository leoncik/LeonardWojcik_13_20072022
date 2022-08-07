// Interfaces
import { IUserLoginInfo } from '../interfaces/apiInterfaces';
import { IUserName } from '../interfaces/apiInterfaces';

// Helpers
import { notificationMessages } from './notificationMessages';

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
        return data;
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
    return data;
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
        return data;
    } catch (error) {
        console.log(error);
    }
};
