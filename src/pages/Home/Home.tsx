// Page components
import FeatureItem from '../../components/FeatureItem/FeatureItem';
import Hero from '../../components/Hero/Hero';

// Page content text
import { featureItemContent } from './featureItemContent';

// CSS
import classes from './Home.module.css';

function Home() {
    return (
        <main>
            <div className={classes['hero']}>
                <section className={classes['hero-content']}>
                    <Hero />
                </section>
            </div>
            <section className={classes['features']}>
                <h2 className={classes['sr-only']}>Features</h2>
                {featureItemContent.map((elt, index) => (
                    <FeatureItem
                        key={index}
                        imageSrc={elt.imageSrc}
                        imageAlt={elt.imageAlt}
                        featureTitle={elt.featureTitle}
                        featureDescription={elt.featureDescription}
                    />
                ))}
            </section>
        </main>
    );
}

export default Home;
