// Redux
import { useDispatch, useSelector } from 'react-redux';

// Page components
import UpdateProfile from '../UpdateProfile/UpdateProfile';

// CSS
import classes from './Header.module.css';

function Header() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const dispatch = useDispatch();
    const firstName = useSelector((state: any) => state.userFirstName);
    const lastName = useSelector((state: any) => state.userLastName);
    const isEditProfile = useSelector((state: any) => state.editNameFields);
    /* eslint-enable @typescript-eslint/no-explicit-any */

    return (
        <div className={classes['header']}>
            <h1>
                Welcome back
                <br />
                {`${firstName} ${lastName}`}
            </h1>
            <UpdateProfile />
            {!isEditProfile ? (
                <button
                    onClick={() => {
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
