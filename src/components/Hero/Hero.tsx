// CSS
import classes from './Hero.module.css';

function Hero() {
    return (
        <>
            <h2 className={classes['sr-only']}>Promoted Content</h2>
            <p className={classes['subtitle']}>No fees.</p>
            <p className={classes['subtitle']}>No minimum deposit.</p>
            <p className={classes['subtitle']}>High interest rates.</p>
            <p className={classes['text']}>
                Open a savings account with Argent Bank today!
            </p>
        </>
    );
}

export default Hero;
