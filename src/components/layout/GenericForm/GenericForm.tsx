type GenericFormProps = {
    children: React.ReactNode;
    submitFunction: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

function GenericForm({ children, submitFunction }: GenericFormProps) {
    return <form onSubmit={submitFunction}>{children}</form>;
}

export default GenericForm;
