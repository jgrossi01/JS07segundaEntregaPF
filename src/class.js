export class Car {
    constructor (id, carModel, dayprice, passengers, fuel, transmission, abs){
        this.id = parseInt(id);
        this.name = carModel;
        this.dayprice = parseInt(dayprice);
        this.passengers = parseInt(passengers);
        this.fuel = fuel;
        this.transmission = transmission;
        this.abs = abs;
    }
}

const arrayCars = [];
arrayCars.push(new Car (nextIndexOf(arrayCars),"Etios", 2000,4,"Nafta","Manual",false));
arrayCars.push(new Car (nextIndexOf(arrayCars),"Corolla", 3000,5,"Nafta","Automatico",true));
arrayCars.push(new Car (nextIndexOf(arrayCars),"Hilux", 4000,5,"Diesel","Manual",true));

export class Reservation {
    constructor (id, carname, quantity, rentedDays, dayPrice, total){
        this.id = parseInt(id);
        this.carname = carname;
        this.quantity = parseInt(quantity);
        this.renteddays = parseInt(rentedDays);
        this.dayprice = Number(dayPrice);
        this.total = Number(total); 
    }
}
const arrayReservations = [];
