// User login info
export interface IUserLoginInfo {
    email?: string;
    password?: string;
}

// User sign-up info
export interface IUserSignup {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
}

// User profile info
export interface IUserProfile {
    status?: number;
    message?: string;
    body?: IUserProfileBody;
}

export interface IUserProfileBody {
    createdAt?: string;
    email?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    updatedAt?: string;
}

// User name
export interface IUserName {
    firstName?: string;
    lastName?: string;
}
