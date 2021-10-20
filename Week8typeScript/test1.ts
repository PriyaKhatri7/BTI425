/* Using TypeScript, create a class/object for bank-account with at least three properties, including balance.
 * Implement withdraw and deposit and checkBalance methods.*/
class bankAccount {
//properties
balance: number; credit: number; debit: number; amount: number;
//methods
    withdraw()
    {
        this.amount < this.balance;
        return this.balance - this.amount;
    }

    deposit()
    {
        this.balance += this.credit;
        return this.balance;
    }

    checkBalance()
    {
        return this.balance -= this.debit;
        console.log(this.debit);
    }
}
let g = new bankAccount();
g.withdraw();
g.deposit();
g.checkBalance();

