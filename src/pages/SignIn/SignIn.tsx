// Redux
import { useDispatch, useSelector } from 'react-redux';

// React Hooks
import { useRef, useState } from 'react';

// Routing
import { Navigate } from 'react-router-dom';

// Page components
import GenericForm from '../../components/layout/GenericForm/GenericForm';
import GenericLabelInput from '../../components/layout/GenericLabelInput/GenericLabelInput';
import GenericButton from '../../components/layout/GenericButton/GenericButton';

// Helpers
import * as endpoint from '../../helpers/apiEndpoints';
import {
    genericPostRequest,
    authenticationRequest,
} from '../../helpers/fetchHandlers';
import { notificationMessages } from '../../helpers/notificationMessages';

// CSS
import classes from './SignIn.module.css';
import ErrorFormMessage from '../../components/layout/ErrorFormMessage/ErrorFormMessage';

function SignIn() {
    // Redux
    const dispatch = useDispatch();
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const hasBeenRedirected = useSelector(
        (state: any) => state.requestedPageWithoutLoggingIn
    );
    /* eslint-enable @typescript-eslint/no-explicit-any */

    // States
    const [isPending, setIsPending] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoggingFailed, setIsLoggingFailed] = useState(false);

    // References
    const userNameInputRef = useRef<HTMLInputElement>(null);
    const userPasswordInputRef = useRef<HTMLInputElement>(null);
    const userRememberInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Clear previous error message if user has been redirected
        hasBeenRedirected && dispatch({ type: 'redirectedNotLoggedIn' });

        const enteredName = userNameInputRef?.current?.value;
        const enteredPassword = userPasswordInputRef?.current?.value;
        // const enteredRemember = userRememberInputRef.current.checked;

        const userLoginInfo = {
            email: enteredName,
            password: enteredPassword,
            // remember: enteredRemember,
        };

        console.log(userLoginInfo);

        setIsPending(true);

        const requestResponse = await genericPostRequest(
            endpoint.userLoginEndpoint,
            userLoginInfo
        );
        if (requestResponse.status === 400) {
            setIsLoggingFailed(true);
        }
        const token = requestResponse?.body?.token;
        dispatch({
            type: 'setToken',
            payload: token,
        });

        const userProfile = await authenticationRequest(
            endpoint.userProfileEndpoint,
            token
        );
        console.log(userProfile);
        if (userProfile.status === 200) {
            dispatch({
                type: 'setIsLoggedIn',
                payload: userProfile,
            });
            setIsLoggedIn(true);
        }

        setIsPending(false);
    };

    return !isLoggedIn ? (
        <main className={classes['bg-dark']}>
            <section className={classes['sign-in-content']}>
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {isLoggingFailed ? (
                    <ErrorFormMessage
                        message={notificationMessages.failedSignIn}
                    />
                ) : null}
                {hasBeenRedirected ? (
                    <ErrorFormMessage
                        message={notificationMessages.notLoggedIn}
                    />
                ) : null}
                <GenericForm submitFunction={handleSubmit}>
                    {/* USERNAME */}
                    <GenericLabelInput
                        cssClasses={'input-wrapper'}
                        label={{ for: 'username', text: 'Email' }}
                        inputType={'text'}
                        inputId={'username'}
                        inputRef={userNameInputRef}
                    />
                    {/* PASSWORD */}
                    <GenericLabelInput
                        cssClasses={'input-wrapper'}
                        label={{ for: 'password', text: 'Password' }}
                        inputType={'password'}
                        inputId={'password'}
                        inputRef={userPasswordInputRef}
                    />
                    {/* REMEMBER ME */}
                    <GenericLabelInput
                        cssClasses={'input-remember'}
                        label={{ for: 'remember-me', text: 'Remember me' }}
                        inputType={'checkbox'}
                        inputId={'remember-me'}
                        inputRef={userRememberInputRef}
                    />
                    {/* SIGN IN BUTTON */}
                    {isPending ? (
                        <GenericButton
                            cssClasses={'sign-in-button'}
                            isActive={false}
                            action={null}
                        >
                            Connexion…
                        </GenericButton>
                    ) : (
                        <GenericButton
                            cssClasses={'sign-in-button'}
                            isActive={true}
                            action={null}
                        >
                            Sign In
                        </GenericButton>
                    )}
                </GenericForm>
            </section>
        </main>
    ) : (
        <Navigate replace to="/user" />
    );
}

export default SignIn;
