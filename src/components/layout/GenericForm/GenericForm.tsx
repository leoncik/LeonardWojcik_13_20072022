type GenericFormProps = {
    children: React.ReactNode;
};

function GenericForm({ children }: GenericFormProps) {
    return <form>{children}</form>;
}

export default GenericForm;
