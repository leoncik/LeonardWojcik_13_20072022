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

export const genericPostRequest = async (
    url: string,
    method = 'POST',
    headers = {}
) => {
    const response = await fetch(url, { method, headers });
    const body = await response.json();
    const { status } = response;
    const isSuccess = false;
    const responseObject = { status, body, isSuccess };
    return responseObject;
};
