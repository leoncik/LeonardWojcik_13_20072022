// Redux
import { useDispatch, useSelector } from 'react-redux';
import { authenticationActions } from '../../features/slices/userSlice';
import { redirectionActions } from '../../features/slices/redirectionsSlice';

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
import { mailRegex } from '../../helpers/formValidation';

// CSS
import classes from './SignIn.module.css';
import ErrorFormMessage from '../../components/layout/ErrorFormMessage/ErrorFormMessage';

// Libraries
import { Helmet } from 'react-helmet-async';

// Interfaces
import { IRootState } from '../../store';

function SignIn() {
    // Redux
    const dispatch = useDispatch();
    const hasBeenRedirected = useSelector(
        (state: IRootState) => state.redirection.requestedPageWithoutLoggingIn
    );

    // States
    const [isPending, setIsPending] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoggingFailed, setIsLoggingFailed] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // References
    const userNameInputRef = useRef<HTMLInputElement>(null);
    const userPasswordInputRef = useRef<HTMLInputElement>(null);
    const userRememberInputRef = useRef<HTMLInputElement>(null);

    // Submit function
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Clear previous error message if user has been redirected
        hasBeenRedirected &&
            dispatch(redirectionActions.redirectedNotLoggedIn());

        const enteredName = userNameInputRef?.current?.value;
        const enteredPassword = userPasswordInputRef?.current?.value;
        // const enteredRemember = userRememberInputRef.current.checked;

        // Check form fields
        if (!enteredName?.match(mailRegex)) {
            setErrorMessage('The format of the email address is invalid.');
            setIsLoggingFailed(true);
            return;
        }
        if (enteredPassword?.trim().length === 0) {
            setErrorMessage('Please enter your password.');
            setIsLoggingFailed(true);
            return;
        }

        // Save form fields and proceed to POST request
        const userLoginInfo = {
            email: enteredName,
            password: enteredPassword,
            // remember: enteredRemember,
        };

        setIsPending(true);

        /* eslint-disable @typescript-eslint/no-explicit-any */
        const requestResponse: any = await genericPostRequest(
            endpoint.userLoginEndpoint,
            userLoginInfo
        );
        /* eslint-enable @typescript-eslint/no-explicit-any */
        if (requestResponse.isSuccess === false) {
            setErrorMessage(notificationMessages.failedSignIn);
            setIsLoggingFailed(true);
            setIsPending(false);
            return;
        }

        const token = requestResponse?.data?.body?.token;
        dispatch(authenticationActions.setToken(token));

        /* eslint-disable @typescript-eslint/no-explicit-any */
        const userProfile: any = await authenticationRequest(
            endpoint.userProfileEndpoint,
            token
        );
        /* eslint-enable @typescript-eslint/no-explicit-any */
        if (userProfile.isSuccess) {
            dispatch(authenticationActions.setIsLoggedIn(userProfile.data));
            setIsLoggedIn(true);
        } else {
            setErrorMessage(
                'Could not find user. Please make sure that you have an account or try again later.'
            );
            setIsLoggingFailed(true);
        }

        setIsPending(false);
    };

    return !isLoggedIn ? (
        <>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <main className="bg-dark main">
                <section className={classes['sign-in-content']}>
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    {isLoggingFailed ? (
                        <ErrorFormMessage message={errorMessage} />
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
                            inputType={'email'}
                            inputId={'username'}
                            inputRef={userNameInputRef}
                            isRequired={true}
                        />
                        {/* PASSWORD */}
                        <GenericLabelInput
                            cssClasses={'input-wrapper'}
                            label={{ for: 'password', text: 'Password' }}
                            inputType={'password'}
                            inputId={'password'}
                            inputRef={userPasswordInputRef}
                            isRequired={true}
                        />
                        {/* REMEMBER ME */}
                        <GenericLabelInput
                            cssClasses={'input-remember'}
                            label={{ for: 'remember-me', text: 'Remember me' }}
                            inputType={'checkbox'}
                            inputId={'remember-me'}
                            inputRef={userRememberInputRef}
                            isRequired={false}
                        />
                        {/* SIGN IN BUTTON */}
                        <GenericButton
                            cssClasses={'sign-in-button'}
                            isActive={!isPending}
                        >
                            {isPending ? 'Connexion…' : 'Sign In'}
                        </GenericButton>
                    </GenericForm>
                </section>
            </main>
        </>
    ) : (
        <Navigate replace to="/user" />
    );
}

export default SignIn;
