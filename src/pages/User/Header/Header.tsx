// Redux
import { useDispatch, useSelector } from 'react-redux';

// React Hooks
import { useEffect } from 'react';

// Page components
import UpdateProfile from '../UpdateProfile/UpdateProfile';

// CSS
import classes from './Header.module.css';
import GenericButton from '../../../components/layout/GenericButton/GenericButton';

function Header() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const dispatch = useDispatch();
    const firstName = useSelector((state: any) => state.userFirstName);
    const lastName = useSelector((state: any) => state.userLastName);
    const isEditProfile = useSelector((state: any) => state.editNameFields);
    /* eslint-enable @typescript-eslint/no-explicit-any */

    // Close UpdateProfile component when landing on page if It was previously open
    useEffect(() => {
        isEditProfile && dispatch({ type: 'hideEditNameFields' });
    }, []);

    const handleNameFields = () => {
        dispatch({ type: 'showEditNameFields' });
    };

    return (
        <div className={classes['header']}>
            <h1>
                Welcome back
                <br />
                {`${firstName} ${lastName}`}
            </h1>
            <UpdateProfile />
            {!isEditProfile ? (
                <GenericButton
                    cssClasses={'edit-button'}
                    isActive={true}
                    action={handleNameFields}
                >
                    Edit Name
                </GenericButton>
            ) : null}
        </div>
    );
}

export default Header;
