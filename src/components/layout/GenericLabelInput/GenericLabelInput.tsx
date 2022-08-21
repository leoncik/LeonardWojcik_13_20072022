import classes from './GenericLabelInput.module.css';

/* eslint-disable @typescript-eslint/no-explicit-any */
type GenericLabelInputProps = {
    cssClasses: string;
    label: {
        for: string;
        text: string;
    };
    inputType: string;
    inputId: string;
    inputRef: any;
    isRequired: boolean;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

function GenericLabelInput({
    cssClasses,
    label,
    inputType,
    inputId,
    inputRef,
    isRequired,
}: GenericLabelInputProps) {
    return (
        <div className={classes[`${cssClasses}`]}>
            <label htmlFor={label.for}>{label.text}</label>
            <input
                type={inputType}
                id={inputId}
                ref={inputRef}
                required={isRequired}
            />
        </div>
    );
}

export default GenericLabelInput;
