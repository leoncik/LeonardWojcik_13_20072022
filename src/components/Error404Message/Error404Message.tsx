// Routing
import { Link } from 'react-router-dom';

// CSS
import classes from './Error404Message.module.css';

function Error404Message() {
    return (
        <>
            <p className={classes['code-message']}>404 PAGE NOT FOUND</p>
            <p className={classes['explanation-message']}>
                Unfortunately, this page does not exist.
            </p>
            <Link to="/" className={classes['redirection-message']}>
                Go back to the home page
            </Link>
        </>
    );
}

export default Error404Message;
