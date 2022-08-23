// CSS
import classes from './Account.module.css';

// Interfaces
import { IAccount } from '../../../interfaces/accountInterfaces';
import GenericButton from '../../../components/layout/GenericButton/GenericButton';

function Account({ title, amount }: IAccount) {
    return (
        <section className={classes['account']}>
            <div className={classes['account-content-wrapper']}>
                <h3 className={classes['account-title']}>{title}</h3>
                <p className={classes['account-amount']}>{amount.value}</p>
                <p className={classes['account-amount-description']}>
                    {amount.description}
                </p>
            </div>
            <div className={classes['account-content-wrapper cta']}>
                <GenericButton
                    cssClasses={'transaction-button'}
                    isActive={true}
                >
                    View transactions
                </GenericButton>
            </div>
        </section>
    );
}

export default Account;
