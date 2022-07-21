// CSS
import classes from './FeatureItem.module.css';

type FeatureItemProps = {
    imageSrc: string;
    imageAlt: string;
    featureTitle: string;
    featureDescription: string;
};

function FeatureItem({
    imageSrc,
    imageAlt,
    featureTitle,
    featureDescription,
}: FeatureItemProps) {
    return (
        <div className={classes['feature-item']}>
            <img
                src={imageSrc}
                alt={imageAlt}
                className={classes['feature-icon']}
            />
            <h3 className={classes['feature-item-title']}>{featureTitle}</h3>
            <p>{featureDescription}</p>
        </div>
    );
}

export default FeatureItem;
