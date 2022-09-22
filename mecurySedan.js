import Vehicle from "./vehicleBaseClass";

//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class car extends Vehicle {
    constructor (make, model, year, color, mileage){
        super(make, model, year, color, mileage);
            this.maximumPassengers = 6;
            this.passenger = 0;
            this.numberOfWheels = 4;
            this.maximumSpeed = 200;
            this.fuel = 100;
            this.scheduleService = false;
    }


    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ( (this.passenger + num) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log('Not enough Room');

            }
        }
    }

    start(){
        if(this.fuel > 0){
            console.log("Engine has started");
            return this.started = true
        } else {
            console.log('no fuel');
            return this.started = false;

        }
    }

    schedulecarService(mileage){
        if(this.mileage > 30000) {
            this.scheduleService == true
            return this.scheduleService
        } 
    }
}
