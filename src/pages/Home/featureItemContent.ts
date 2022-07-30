// Assets
import iconChat from '../../assets/images/icon-chat.png';
import iconMoney from '../../assets/images/icon-money.png';
import iconSecurity from '../../assets/images/icon-security.png';

export interface IFeatureItemContent {
    imageSrc: string;
    imageAlt: string;
    featureTitle: string;
    featureDescription: string;
}

export const featureItemContent: Array<IFeatureItemContent> = [
    {
        imageSrc: iconChat,
        imageAlt: 'Chat icon',
        featureTitle: 'You are our #1 priority',
        featureDescription:
            'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
        imageSrc: iconMoney,
        imageAlt: 'Money icon',
        featureTitle: 'More savings means higher rates',
        featureDescription:
            'The more you save with us, the higher your interest rate will be!',
    },
    {
        imageSrc: iconSecurity,
        imageAlt: 'Security icon',
        featureTitle: 'Security you can trust',
        featureDescription:
            'We use top of the line encryption to make sure your data and money is always safe.',
    },
];
