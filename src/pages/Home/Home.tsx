// Redux
import { useDispatch, useSelector } from 'react-redux';

// Page components
import FeatureItem from '../../components/FeatureItem/FeatureItem';
import Hero from '../../components/Hero/Hero';

// Page content text
import { featureItemContent, IFeatureItemContent } from './featureItemContent';

// CSS
import classes from './Home.module.css';

function Home() {
    // Reset "requestedPageWithoutLoggingIn" state if user tried to access a page without logging in.
    const dispatch = useDispatch();
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const hasBeenRedirected = useSelector(
        (state: any) => state.requestedPageWithoutLoggingIn
    );
    /* eslint-enable @typescript-eslint/no-explicit-any */
    hasBeenRedirected && dispatch({ type: 'redirectedNotLoggedIn' });

    return (
        <main>
            <div className={classes['hero']}>
                <section className={classes['hero-content']}>
                    <Hero />
                </section>
            </div>
            <section className={classes['features']}>
                <h2 className={classes['sr-only']}>Features</h2>
                {featureItemContent.map(
                    (elt: IFeatureItemContent, index: number) => (
                        <FeatureItem
                            key={index}
                            imageSrc={elt.imageSrc}
                            imageAlt={elt.imageAlt}
                            featureTitle={elt.featureTitle}
                            featureDescription={elt.featureDescription}
                        />
                    )
                )}
            </section>
        </main>
    );
}

export default Home;
