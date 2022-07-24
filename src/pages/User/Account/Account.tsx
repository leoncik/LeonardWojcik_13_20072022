// CSS
import classes from './Account.module.css';

function Account() {
    return (
        <section className={classes['account']}>
            <div className={classes['account-content-wrapper']}>
                <h3 className={classes['account-title']}>
                    Argent Bank Checking (x8349)
                </h3>
                <p className={classes['account-amount']}>$2,082.79</p>
                <p className={classes['account-amount-description']}>
                    Available Balance
                </p>
            </div>
            <div className={classes['account-content-wrapper cta']}>
                <button className={classes['transaction-button']}>
                    View transactions
                </button>
            </div>
        </section>
    );
}

export default Account;
