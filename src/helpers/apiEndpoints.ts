const apiBaseUrl = 'http://localhost:3001/api/v1';

/**
 * Send user login data.
 * Request type : POST
 * @returns {string} Returns the endpoint for the user login.
 */
const userLoginEndpoint = `${apiBaseUrl}/user/login`;

/**
 * Send user sign-up data.
 * Request type : POST
 * @returns {string} Returns the endpoint for the user sign-up.
 */
const userSignUpEndpoint = `${apiBaseUrl}/user/signup`;

/**
 * Fetch a user profile
 * Request type : POST or PUT
 * @returns {string} Returns the endpoint for the user profile.
 */
const userProfileEndpoint = `${apiBaseUrl}/user/profile`;

export { userLoginEndpoint, userSignUpEndpoint, userProfileEndpoint };
