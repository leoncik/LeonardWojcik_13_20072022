import classes from './Footer.module.css';

function Footer() {
    return (
        <footer className={classes['footer']}>
            <p className={classes['footer-text']}>Copyright 2020 Argent Bank</p>
        </footer>
    );
}

export default Footer;
