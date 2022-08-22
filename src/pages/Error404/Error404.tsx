// Page components
import Error404Message from '../../components/Error404Message/Error404Message';

// CSS
import classes from './Error404.module.css';

function Error404() {
    return (
        <div className={classes['error-container']}>
            <Error404Message />
        </div>
    );
}

export default Error404;
