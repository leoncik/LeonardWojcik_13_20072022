// User login info
export interface IUserLoginInfo {
    email: string | undefined;
    password: string | undefined;
}

// User sign-up info
export interface IUserSignup {
    email: string | undefined;
    password: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
}

// User profile info
export interface IUserProfile {
    status: number | undefined;
    message: string | undefined;
    body: {
        id: string | undefined;
        email: string | undefined;
    };
}