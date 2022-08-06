import classes from './ErrorFormMessage.module.css';

type ErrorFormMessageProps = {
    message: string;
};

function ErrorFormMessage({ message }: ErrorFormMessageProps) {
    return (
        <div className={classes['error-message-container']}>
            <p>{message}</p>
        </div>
    );
}

export default ErrorFormMessage;
