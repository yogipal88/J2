abstract class Payment {
    amount:number
    constructor(amount:number) {
        this.amount=amount
    }
        printReceipt():void{
            console.log("Receipt paid: $",this.amount);
        }
        abstract processPayment():void
}
class cardPayment extends Payment{
    processPayment(): void {
        console.log("Card payment:",this.amount);   
    }
}
const cp=new cardPayment(5000)
cp.processPayment()
cp.printReceipt()
