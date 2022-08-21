// Redux
import { useDispatch, useSelector } from 'react-redux';
import { authenticationActions } from '../../../features/slices/authenticationSlice';
import { editNameActions } from '../../../features/slices/editNameSlice';

// React Hooks
import { useRef, useState } from 'react';

// Page components
import GenericForm from '../../../components/layout/GenericForm/GenericForm';
import GenericButton from '../../../components/layout/GenericButton/GenericButton';

// Helpers
import * as endpoint from '../../../helpers/apiEndpoints';
import { genericPutRequest } from '../../../helpers/fetchHandlers';
import { notificationMessages } from '../../../helpers/notificationMessages';

// CSS
import classes from './UpdateProfile.module.css';
import ErrorFormMessage from '../../../components/layout/ErrorFormMessage/ErrorFormMessage';

function UpdateProfile() {
    // References
    const userFirstNameInputRef = useRef<HTMLInputElement>(null);
    const userLastNameInputRef = useRef<HTMLInputElement>(null);

    // Local states
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [isEditNameFailed, setIsEditNameFailed] = useState(false);

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const isEditProfile = useSelector(
        (state: any) => state.editName.editNameFields
    );
    const token = useSelector((state: any) => state.authentication.token);
    const firstName = useSelector(
        (state: any) => state.authentication.userFirstName
    );
    const lastName = useSelector(
        (state: any) => state.authentication.userLastName
    );
    /* eslint-enable @typescript-eslint/no-explicit-any */
    console.log(isEditProfile);

    const dispatch = useDispatch();

    const handleCancel = (e: React.MouseEvent) => {
        e.preventDefault();
        // Clear error message if any
        firstNameError && setFirstNameError(false);
        lastNameError && setLastNameError(false);
        dispatch(editNameActions.hideEditNameFields());
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const enteredFirstName = userFirstNameInputRef?.current?.value;
        const enteredLastName = userLastNameInputRef?.current?.value;

        // Clear error message if any
        firstNameError && setFirstNameError(false);
        lastNameError && setLastNameError(false);

        // Check if any field is empty and display an error message
        if (
            enteredFirstName?.trim().length === 0 &&
            enteredLastName?.trim().length === 0
        ) {
            setFirstNameError(true);
            setLastNameError(true);
            return;
        }
        if (enteredFirstName?.trim().length === 0) {
            setFirstNameError(true);
            return;
        }
        if (enteredLastName?.trim().length === 0) {
            setLastNameError(true);
            return;
        }

        const userNewName = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
        };

        const requestResponse = await genericPutRequest(
            endpoint.userProfileEndpoint,
            userNewName,
            token
        );

        if (requestResponse.status !== 200) {
            setIsEditNameFailed(true);
        }
        if (requestResponse.status === 200) {
            dispatch(authenticationActions.editUserName(userNewName));
        }
        dispatch(editNameActions.hideEditNameFields());
        console.log(requestResponse);
    };

    return isEditProfile ? (
        <GenericForm submitFunction={handleSubmit}>
            {isEditNameFailed && (
                <ErrorFormMessage
                    message={notificationMessages.failedUpdateProfile500}
                />
            )}
            <div className={classes['input-fields']}>
                <div className="first-name-field">
                    <input
                        type="text"
                        placeholder={firstName}
                        ref={userFirstNameInputRef}
                    />
                    {firstNameError ? (
                        <p className={classes['first-name-input-error']}>
                            Enter your first name
                        </p>
                    ) : null}
                </div>
                <div className="last-name-field">
                    <input
                        type="text"
                        placeholder={lastName}
                        ref={userLastNameInputRef}
                    />
                    {lastNameError ? (
                        <p className={classes['last-name-input-error']}>
                            Enter your last name
                        </p>
                    ) : null}
                </div>
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
