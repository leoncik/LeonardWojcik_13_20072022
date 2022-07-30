import classes from './GenericLabelInput.module.css';

type GenericLabelInputProps = {
    cssClasses: string;
    label: {
        for: string;
        text: string;
    };
    inputType: string;
    inputId: string;
};

function GenericLabelInput({
    cssClasses,
    label,
    inputType,
    inputId,
}: GenericLabelInputProps) {
    return (
        <div className={classes[`${cssClasses}`]}>
            <label htmlFor={label.for}>{label.text}</label>
            <input type={inputType} id={inputId} />
        </div>
    );
}

export default GenericLabelInput;
