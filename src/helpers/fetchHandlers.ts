// Interfaces
import { IUserLoginInfo } from '../interfaces/apiInterfaces';

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
    const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    return data;
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
