import classes from './Header.module.css';

function Header() {
    return (
        <div className={classes['header']}>
            <h1>
                Welcome back
                <br />
                Tony Jarvis!
            </h1>
            <button className={classes['edit-button']}>Edit Name</button>
        </div>
    );
}

export default Header;
