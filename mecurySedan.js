//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Vehicle extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers){
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                console.log(this.make + " " + this.model + " has enough seats.");
                return this.passenger;
            }
            else {
                console.log(this.make + " " + this.model + " is full.");
            }
        }
    start() {
        if (this.fuel > 0) {
            console.log("Engine can start.");
            return this.started = true;
        }
        else {
            console.log("Tank empty.");
            return this.started = false;
        }
    }
    service() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }
    }
    }

