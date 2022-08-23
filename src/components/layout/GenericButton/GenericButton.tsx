import React from 'react';
import classes from './GenericButton.module.css';

type GenericButtonProps = {
    children: React.ReactNode;
    cssClasses: string;
    isActive: boolean;
    action?: (e: React.MouseEvent<HTMLElement>) => void;
};

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
