interface IPaymentProcessor {
    processPayment(amount: number): void;
}

abstract class PaymentGateway {
    abstract validateCredentials(): boolean;
    
    logTransaction(amount: number) {
        console.log(`Transaction of $${amount} logged.`);
    }
}

class StripeProvider extends PaymentGateway implements IPaymentProcessor {
    validateCredentials(): boolean {
        console.log("Stripe credentials validated.");
        return true;
    }

    processPayment(amount: number): void {
        if (this.validateCredentials()) {
            console.log(`Processing $${amount} via Stripe...`);
            this.logTransaction(amount);
        }
    }
}

const payment = new StripeProvider();
payment.processPayment(250);