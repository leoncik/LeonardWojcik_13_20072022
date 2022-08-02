// Redux
import { useDispatch, useSelector } from 'react-redux';

// CSS
import classes from './Header.module.css';

function Header() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const dispatch = useDispatch();
    const userName = useSelector((state: any) => state.name);
    /* eslint-enable @typescript-eslint/no-explicit-any */

    return (
        <div className={classes['header']}>
            <h1>
                Welcome back
                <br />
                {userName}
            </h1>
            <button
                onClick={() => dispatch({ type: 'editUserName' })}
                className={classes['edit-button']}
            >
                Edit Name
            </button>
        </div>
    );
}

export default Header;
