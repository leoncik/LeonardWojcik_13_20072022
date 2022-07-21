// CSS
import Hero from '../../components/Hero/Hero';
import classes from './Home.module.css';

function Home() {
    return (
        <main>
            <div className={classes['hero']}>
                <section className={classes['hero-content']}>
                    <Hero />
                </section>
            </div>
        </main>
    );
}

export default Home;
