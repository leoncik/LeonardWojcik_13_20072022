// Redux
import { useDispatch, useSelector } from 'react-redux';

// Page components
import GenericForm from '../../../components/layout/GenericForm/GenericForm';

// CSS
// import classes from './UpdateProfile.module.css';

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
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <button onClick={handleSubmit}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </GenericForm>
    ) : null;
}

export default UpdateProfile;
