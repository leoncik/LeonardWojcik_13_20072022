// Routing
import { Link } from 'react-router-dom';

// Page components
import GenericForm from '../../components/layout/GenericForm/GenericForm';
import GenericLabelInput from '../../components/layout/GenericLabelInput/GenericLabelInput';

// CSS
import classes from './SignIn.module.css';

function SignIn() {
    return (
        <main className={classes['bg-dark']}>
            <section className={classes['sign-in-content']}>
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <GenericForm>
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
                    {/* PLACEHOLDER DUE TO STATIC SITE */}
                    <Link to="/user" className={classes['sign-in-button']}>
                        Sign In
                    </Link>
                    {/* SHOULD BE THE BUTTON BELOW */}
                    {/* <button className="sign-in-button">Sign In</button> */}
                </GenericForm>
            </section>
        </main>
    );
}

export default SignIn;
