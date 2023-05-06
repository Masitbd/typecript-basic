class BankAccount{
    id: number;
    name: string;
   private _balance: number;

    constructor(id:number, name:string, balance: number){
        this.id = id;
        this.name =  name;
        this._balance= balance;
    }
}

const myAccount =new BankAccount (444, 'kalam', 20)