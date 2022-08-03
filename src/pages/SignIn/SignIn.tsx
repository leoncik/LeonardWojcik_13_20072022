// Redux
import { useDispatch } from 'react-redux';

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

// CSS
import classes from './SignIn.module.css';

function SignIn() {
    // Redux
    const dispatch = useDispatch();

    // States
    const [isPending, setIsPending] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // References
    const userNameInputRef = useRef<HTMLInputElement>(null);
    const userPasswordInputRef = useRef<HTMLInputElement>(null);
    const userRememberInputRef = useRef<HTMLInputElement>(null);

    // Todo : replace Username with email.
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
        const token = requestResponse.body.token;

        const userProfile = await authenticationRequest(
            endpoint.userProfileEndpoint,
            token
        );
        console.log(userProfile);
        dispatch({ type: 'setIsLoggedIn' });

        setIsPending(false);
        setIsLoggedIn(true);
    };

    return !isLoggedIn ? (
        <main className={classes['bg-dark']}>
            <section className={classes['sign-in-content']}>
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <GenericForm submitFunction={handleSubmit}>
                    {/* USERNAME */}
                    <GenericLabelInput
                        cssClasses={'input-wrapper'}
                        label={{ for: 'username', text: 'Username' }}
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
