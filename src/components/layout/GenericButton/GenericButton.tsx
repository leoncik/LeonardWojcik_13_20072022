import classes from './GenericButton.module.css';

/* eslint-disable @typescript-eslint/no-explicit-any */
type GenericButtonProps = {
    children: React.ReactNode;
    cssClasses: string;
    isActive: boolean;
    action: any;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

function GenericButton({
    children,
    cssClasses,
    isActive,
    action,
}: GenericButtonProps) {
    return (
        <button
            disabled={!isActive}
            className={classes[`${cssClasses}`]}
            onClick={action}
        >
            {children}
        </button>
    );
}

export default GenericButton;
