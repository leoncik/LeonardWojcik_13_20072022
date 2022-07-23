// Routing
import { NavLink } from 'react-router-dom';

// CSS
import classes from './MainNavigation.module.css';

// Assets
import logo from '../../../assets/images/argentBankLogo.png';

// Todo : add margin-right to "<i className='fa fa-user-circle'></i>" ?

function MainNavigation() {
    return (
        <nav className={classes['main-nav']}>
            <NavLink className={classes['main-nav-logo']} to="/">
                <img
                    className={classes['main-nav-logo-image']}
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className={classes['sr-only']}>Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink className={classes['main-nav-item']} to="/page">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>
        </nav>
    );
}

export default MainNavigation;
