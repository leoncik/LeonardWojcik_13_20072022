// Account interface
export interface IAccount {
    title: string;
    amount: IAmount;
}

export interface IAmount {
    value: string;
    description: string;
}
