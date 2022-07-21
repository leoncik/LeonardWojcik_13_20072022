// Page components
import FeatureItem from '../../components/FeatureItem/FeatureItem';
import Hero from '../../components/Hero/Hero';

// Assets
import iconChat from '../../assets/images/icon-chat.png';
import iconMoney from '../../assets/images/icon-money.png';
import iconSecurity from '../../assets/images/icon-security.png';

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
                <FeatureItem
                    imageSrc={iconChat}
                    imageAlt="alt text"
                    featureTitle="This is a title"
                    featureDescription="Lorem ipsum"
                />
                <FeatureItem
                    imageSrc={iconMoney}
                    imageAlt="alt text"
                    featureTitle="This is a title"
                    featureDescription="Lorem ipsum"
                />
                <FeatureItem
                    imageSrc={iconSecurity}
                    imageAlt="alt text"
                    featureTitle="This is a title"
                    featureDescription="Lorem ipsum"
                />
            </section>
        </main>
    );
}

export default Home;
