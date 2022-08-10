// Redux
import { useSelector, useDispatch } from 'react-redux';

// React Hooks
import { useRef } from 'react';

// Routing
import { NavLink } from 'react-router-dom';

// CSS
import classes from './MainNavigation.module.css';

// Assets
import logo from '../../../assets/images/argentBankLogo.png';

// Libraries
import { Helmet } from 'react-helmet-async';

function MainNavigation() {
    const dispatch = useDispatch();

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
    const userName = useSelector((state: any) => state.userFirstName);
    /* eslint-enable @typescript-eslint/no-explicit-any */

    const logoutRef = useRef<HTMLAnchorElement>(null);

    const handleLogout = () => {
        dispatch({ type: 'setIsLoggedOut' });
    };

    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="/icons/font-awesome-4.7.0/css/font-awesome.min.css"
                />
            </Helmet>
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
                    <NavLink
                        className={classes['main-nav-item']}
                        to={isLoggedIn ? '/user' : '/sign-in'}
                    >
                        <i className="fa fa-user-circle"></i>
                        {isLoggedIn ? userName : 'Sign In'}
                    </NavLink>
                    {isLoggedIn ? (
                        <NavLink
                            ref={logoutRef}
                            onClick={handleLogout}
                            className={classes['main-nav-item']}
                            to="/sign-in"
                        >
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </NavLink>
                    ) : null}
                </div>
            </nav>
        </>
    );
}

export default MainNavigation;
