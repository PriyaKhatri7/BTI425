/* Using TypeScript, create a class/object for bank-account with at least three properties, including balance.
 * Implement withdraw and deposit and checkBalance methods.*/
var bankAccount = /** @class */ (function () {
    function bankAccount() {
    }
    //methods
    bankAccount.prototype.withdraw = function () {
        this.amount < this.balance;
        return this.balance - this.amount;
    };
    bankAccount.prototype.deposit = function () {
        this.balance += this.credit;
        return this.balance;
    };
    bankAccount.prototype.checkBalance = function () {
        return this.balance -= this.debit;
        console.log(this.debit);
    };
    return bankAccount;
}());
var g = new bankAccount();
g.withdraw();
g.deposit();
g.checkBalance();
