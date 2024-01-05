/**  An array of routes that are accessible to the public.
*These routes do not require authentication.
* @type {string[]}
*/

export const publicRoute = [
    "/",
    "/auth/new-verification"
];

/**  An array of routes that are used for authentication
*These routes will redirected logged in users to /settings
* @type {string[]}
*/
export const authRoute = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
]

/**
 * The prefix for API authentication routes.
 * Route that start with this prefix are used for API authentication purpose
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";