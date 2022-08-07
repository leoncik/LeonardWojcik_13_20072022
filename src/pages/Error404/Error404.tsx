// Routing
import { Link } from 'react-router-dom';

// CSS
import classes from './Error404.module.css';

function Error404() {
    return (
        <div className={classes['error-container']}>
            <p className={classes['code-message']}>404 PAGE NOT FOUND</p>
            <p className={classes['explanation-message']}>
                Unfortunately, this page does not exist.
            </p>
            <Link to="/" className={classes['redirection-message']}>
                Go back to the home page
            </Link>
        </div>
    );
}

export default Error404;
