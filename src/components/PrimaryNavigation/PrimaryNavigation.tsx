// Routing
import { NavLink } from 'react-router-dom';

// CSS
import classes from './PrimaryNavigation.module.css';

// Assets
import logo from '../../assets/react.svg';

function PrimaryNavigation() {
    return (
        <header>
            <nav className={classes['main-nav']}>
                <ul>
                    <div className="logo-container">
                        <NavLink to="/" className={classes['header-logo']}>
                            <img src={logo} alt="Logo" />
                            <p>My super App</p>
                        </NavLink>
                    </div>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            textDecoration: isActive ? 'underline' : 'none',
                        })}
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        to="/page"
                        style={({ isActive }) => ({
                            textDecoration: isActive ? 'underline' : 'none',
                        })}
                    >
                        Page 1
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default PrimaryNavigation;
