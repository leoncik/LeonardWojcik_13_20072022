// Interfaces
import { IUserLoginInfo } from '../interfaces/apiInterfaces';

/**
 * Fetches data from url.
 * @param {string} url - Fetched url
 * @param {string} method  - Fetch method (set by default to 'GET')
 * @param headers
 * @returns {}
 */
export const genericFetch = async (
    url: string,
    method = 'GET',
    headers = {}
) => {
    const response = await fetch(url, { method, headers });
    const body = await response.json();
    const { status } = response;
    const isSuccess = false;
    const responseObject = { status, body, isSuccess };
    return responseObject;
};

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
    console.log(data);
    return data;
};
