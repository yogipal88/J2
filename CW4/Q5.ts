interface IVehicle {
    brand: string;
    startEngine(): void;
}

class Car implements IVehicle {
    brand: string = "Toyota";
    
    startEngine(): void {
        console.log(`${this.brand} engine started!`);
    }
}

const myCar = new Car();
myCar.startEngine();