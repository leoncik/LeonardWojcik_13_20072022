// Interfaces
import { IUserLoginInfo, IUserProfile } from '../interfaces/apiInterfaces';
import { IUserName } from '../interfaces/apiInterfaces';

/**
 * Checks if the status of a fetch is ok
 * @param {IUserProfile} data - Fetched data.
 * @returns {boolean}
 */
export const isStatusOk = (data: IUserProfile): boolean =>
    data.status! < 300 && data.status! >= 200 ? true : false;

/**
 * Fetches data from url.
 * @param {string} apiEndpoint - Fetched url
 * @param {IUserLoginInfo} requestBody  - body send with POST method
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
        return { data, isSuccess: isStatusOk(data) };
    } catch {
        return false;
    }
};

/**
 * Send a POST request to authenticate user.
 * @param {string} apiEndpoint - Fetched URL
 * @param {string} token - user's token
 * @returns
 */
export const authenticationRequest = async (
    apiEndpoint: string,
    token: string
) => {
    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return { data, isSuccess: isStatusOk(data) };
    } catch {
        return false;
    }
};

/**
 * Send a PUT request.
 * @param {string} apiEndpoint - Fetched url
 * @param {IUserName} requestBody  - body send with PUT method
 * @param {string} token - user's token
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
        return { data, isSuccess: isStatusOk(data) };
    } catch {
        return false;
    }
};
