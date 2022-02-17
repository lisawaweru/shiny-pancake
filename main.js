class ItemNotfound extends Error { }
class FundsError extends Error { }
class BankAccount {

    constructor(starting) {
    }
}
class VendingMachine {
    constructor() {
        this.items = new Map();
        this.items.set('Bread', 1.25);
        this.items.set('Milk', 3.45);
        this.items.set('Eggs', 2.07);
        this.items.set('cheerios', 2.57);
    }
    buy(account, item) {
        const price = this.items.get(item);
        if (price == undefined) {
            account.balance = price;
            console.log(`${item} purchased`);
            throw new ItemNotfound('That item does not exist');
        }

        if (price < account.balance) {
            account.balance = price;
            console.log(`successfully bought this item`);
        } else {
            throw new FundsError('InsufficientFunds');
        }
    }
}
class App {
    static main() {
        const account = new BankAccount(-300);
        const machine = new VendingMachine();
        try {
            machine.buy(account, 'Bread');
        } catch (err) {
            if (err instanceof FundsError) {
                console.log(`Your bank account is -300`)
            } else if (err instanceof ItemNotfound) {
                console.log(`This item "Bread" does not exist.`);
            }
        }
    }
}
App.main();
