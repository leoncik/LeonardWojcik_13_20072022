// Page components
import Account from '../Account/Account';
import Header from '../Header/Header';

// CSS
import classes from './User.module.css';

// Todo : prevent access to page when directly accessing with URL

function User() {
    return (
        <main className={classes['bg-dark']}>
            <Header />
            <h2 className="sr-only">Accounts</h2>
            <Account />
            <Account />
            <Account />
        </main>
    );
}

export default User;
