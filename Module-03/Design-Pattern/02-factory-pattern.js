class Car {
  constructor() {
    this.type = "Car";
  }
}

class Truck {
  constructor() {
    this.type = "Truck";
  }
}

class VehicleFactory {
  createVehicle(kind) {
    switch (kind) {
      case "car":
        return new Car();
      case "truck":
        return new Truck();
      default:
        throw new Error("Unknown vehicle type");
    }
  }
}

const factory = new VehicleFactory();
const v1 = factory.createVehicle("car");
const v2 = factory.createVehicle("truck");
console.log(v1.type); // Car
console.log(v2.type); // Truck
