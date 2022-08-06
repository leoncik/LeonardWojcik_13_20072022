// Redux
import { useDispatch, useSelector } from 'react-redux';
import GenericButton from '../../../components/layout/GenericButton/GenericButton';

// React Hooks
import { useRef } from 'react';

// Page components
import GenericForm from '../../../components/layout/GenericForm/GenericForm';

// Helpers
import * as endpoint from '../../../helpers/apiEndpoints';
import { genericPutRequest } from '../../../helpers/fetchHandlers';

// CSS
import classes from './UpdateProfile.module.css';

// Todo : add form validation.

function UpdateProfile() {
    // References
    const userFirstNameInputRef = useRef<HTMLInputElement>(null);
    const userLastNameInputRef = useRef<HTMLInputElement>(null);

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const isEditProfile = useSelector((state: any) => state.editNameFields);
    const token = useSelector((state: any) => state.token);
    const firstName = useSelector((state: any) => state.userFirstName);
    const lastName = useSelector((state: any) => state.userLastName);
    /* eslint-enable @typescript-eslint/no-explicit-any */
    console.log(isEditProfile);

    const dispatch = useDispatch();

    const handleCancel = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch({ type: 'hideEditNameFields' });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const enteredFirstName = userFirstNameInputRef?.current?.value;
        const enteredLastName = userLastNameInputRef?.current?.value;
        console.log(enteredFirstName);

        const userNewName = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
        };

        const requestResponse = await genericPutRequest(
            endpoint.userProfileEndpoint,
            userNewName,
            token
        );
        if (requestResponse.status === 200) {
            dispatch({
                type: 'editUserName',
                payload: userNewName,
            });
        }
        dispatch({ type: 'hideEditNameFields' });
        console.log(requestResponse);
    };

    return isEditProfile ? (
        <GenericForm submitFunction={handleSubmit}>
            <div className={classes['input-fields']}>
                <input
                    type="text"
                    placeholder={firstName}
                    ref={userFirstNameInputRef}
                />
                <input
                    type="text"
                    placeholder={lastName}
                    ref={userLastNameInputRef}
                />
            </div>
            <div className={classes['buttons']}>
                <GenericButton
                    cssClasses={'edit-profile-button'}
                    isActive={true}
                    action={null}
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
