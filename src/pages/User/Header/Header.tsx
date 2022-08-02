// Redux
import { useDispatch, useSelector } from 'react-redux';

// Page components
import UpdateProfile from '../UpdateProfile/UpdateProfile';

// CSS
import classes from './Header.module.css';

function Header() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const dispatch = useDispatch();
    const userName = useSelector((state: any) => state.name);
    const isEditProfile = useSelector((state: any) => state.editNameFields);
    /* eslint-enable @typescript-eslint/no-explicit-any */

    return (
        <div className={classes['header']}>
            <h1>
                Welcome back
                <br />
                {userName}
            </h1>
            <UpdateProfile />
            {!isEditProfile ? (
                <button
                    onClick={() => {
                        dispatch({ type: 'editUserName' });
                        dispatch({ type: 'showEditNameFields' });
                    }}
                    className={classes['edit-button']}
                >
                    Edit Name
                </button>
            ) : null}
        </div>
    );
}

export default Header;
