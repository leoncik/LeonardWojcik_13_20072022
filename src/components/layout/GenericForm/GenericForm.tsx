/* eslint-disable @typescript-eslint/no-explicit-any */
type GenericFormProps = {
    children: React.ReactNode;
    submitFunction: any;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

function GenericForm({ children, submitFunction }: GenericFormProps) {
    return <form onSubmit={submitFunction}>{children}</form>;
}

export default GenericForm;
