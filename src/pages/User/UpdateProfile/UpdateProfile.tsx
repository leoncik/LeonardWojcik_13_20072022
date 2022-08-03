// Redux
import { useDispatch, useSelector } from 'react-redux';
import GenericButton from '../../../components/layout/GenericButton/GenericButton';

// Page components
import GenericForm from '../../../components/layout/GenericForm/GenericForm';

// CSS
import classes from './UpdateProfile.module.css';

function UpdateProfile() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const isEditProfile = useSelector((state: any) => state.editNameFields);
    /* eslint-enable @typescript-eslint/no-explicit-any */
    console.log(isEditProfile);

    const dispatch = useDispatch();

    const handleCancel = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch({ type: 'hideEditNameFields' });
    };

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
    };

    return isEditProfile ? (
        <GenericForm submitFunction={null}>
            <div className={classes['input-fields']}>
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
            </div>
            <div className={classes['buttons']}>
                <GenericButton
                    cssClasses={'edit-profile-button'}
                    isActive={true}
                    action={handleSubmit}
                >
                    Save
                </GenericButton>
                <GenericButton
                    cssClasses={'edit-profile-button'}
                    isActive={true}
                    action={handleCancel}
                >
                    Cancel
                </GenericButton>
            </div>
        </GenericForm>
    ) : null;
}

export default UpdateProfile;
