// Redux
import { useSelector, useDispatch } from 'react-redux';
import { redirectionActions } from '../../../features/slices/redirectionsSlice';

// Routing
import { Navigate } from 'react-router-dom';

// Page components
import Account from '../Account/Account';
import Header from '../Header/Header';

// Interfaces
import { IAccount } from '../../../interfaces/accountInterfaces';

// Libraries
import { Helmet } from 'react-helmet-async';

// Account content (will be later replaced with values retrieved from API)
import { ACCOUNT_CONTENT } from '../Account/ACCOUNT_CONTENT';

function User() {
    // Redux
    const dispatch = useDispatch();
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const isLoggedIn = useSelector(
        (state: any) => state.authentication.isLoggedIn
    );
    /* eslint-enable @typescript-eslint/no-explicit-any */
    !isLoggedIn && dispatch(redirectionActions.fetchWithoutLoggingIn());

    return isLoggedIn ? (
        <>
            <Helmet>
                <title>Your accounts</title>
            </Helmet>
            <main className="bg-dark">
                <Header />
                <h2 className="sr-only">Accounts</h2>
                {ACCOUNT_CONTENT.map((account: IAccount, index: number) => (
                    <Account
                        key={index}
                        title={account.title}
                        amount={account.amount}
                    />
                ))}
            </main>
        </>
    ) : (
        <Navigate replace to="/sign-in" />
    );
}

export default User;
