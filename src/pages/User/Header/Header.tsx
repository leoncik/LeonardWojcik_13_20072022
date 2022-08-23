// Redux
import { useDispatch, useSelector } from 'react-redux';
import { editNameActions } from '../../../features/slices/editNameSlice';

// React Hooks
import { useEffect } from 'react';

// Page components
import UpdateProfile from '../UpdateProfile/UpdateProfile';

// CSS
import classes from './Header.module.css';
import GenericButton from '../../../components/layout/GenericButton/GenericButton';

// Interfaces
import { IRootState } from '../../../store';

function Header() {
    const dispatch = useDispatch();
    const firstName = useSelector(
        (state: IRootState) => state.authentication.userFirstName
    );
    const lastName = useSelector(
        (state: IRootState) => state.authentication.userLastName
    );
    const isEditProfile = useSelector(
        (state: IRootState) => state.editName.editNameFields
    );

    // Close UpdateProfile component when landing on page if It was previously open
    useEffect(() => {
        isEditProfile && dispatch(editNameActions.hideEditNameFields());
    }, []);

    const handleNameFields = () => {
        dispatch(editNameActions.showEditNameFields());
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
