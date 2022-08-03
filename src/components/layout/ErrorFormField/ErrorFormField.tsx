import classes from './ErrorFormField.module.css';

function ErrorFormField() {
    return (
        <div className={classes['error-message-container']}>
            <p>Your password or username/email is incorrect</p>
        </div>
    );
}

export default ErrorFormField;
