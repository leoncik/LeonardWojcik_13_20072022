// React Hooks
import { useRef, useState } from 'react';

// Routing
// import { Link } from 'react-router-dom';

// Page components
// import GenericForm from '../../components/layout/GenericForm/GenericForm';
// import GenericLabelInput from '../../components/layout/GenericLabelInput/GenericLabelInput';

// Helpers
import * as endpoint from '../../helpers/apiEndpoints';
import { genericPostRequest } from '../../helpers/fetchHandlers';
// import { genericPostRequest } from '../../helpers/fetchHandlers';

// CSS
import classes from './SignIn.module.css';

function SignIn() {
    // States
    const [isPending, setIsPending] = useState(false);

    // References
    const userNameInputRef = useRef<HTMLInputElement>(null);
    const userPasswordInputRef = useRef<HTMLInputElement>(null);
    const userRememberInputRef = useRef<HTMLInputElement>(null);

    // Todo : replace Username with email.
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

        genericPostRequest(endpoint.userLoginEndpoint, userLoginInfo);

        setIsPending(false);
    };

    return (
        <main className={classes['bg-dark']}>
            <section className={classes['sign-in-content']}>
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className={classes['input-wrapper']}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            ref={userNameInputRef}
                        />
                    </div>
                    <div className={classes['input-wrapper']}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            ref={userPasswordInputRef}
                        />
                    </div>
                    <div className={classes['input-remember']}>
                        <input
                            type="checkbox"
                            id="remember-me"
                            ref={userRememberInputRef}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {!isPending && (
                        <button className={classes['sign-in-button']}>
                            Sign In
                        </button>
                    )}
                    {isPending && (
                        <button disabled className={classes['sign-in-button']}>
                            Connexion…
                        </button>
                    )}
                </form>

                {/* Todo: use this refactored version */}
                {/* <GenericForm>
                    <GenericLabelInput
                        cssClasses={'input-wrapper'}
                        label={{ for: 'username', text: 'Username' }}
                        inputType={'text'}
                        inputId={'username'}
                    />
                    <GenericLabelInput
                        cssClasses={'input-wrapper'}
                        label={{ for: 'password', text: 'Password' }}
                        inputType={'password'}
                        inputId={'password'}
                    />
                    <GenericLabelInput
                        cssClasses={'input-remember'}
                        label={{ for: 'remember-me', text: 'Remember me' }}
                        inputType={'checkbox'}
                        inputId={'remember-me'}
                    />
                    <button className={classes["sign-in-button"]}>Sign In</button>
                </GenericForm> */}
            </section>
        </main>
    );
}

export default SignIn;
