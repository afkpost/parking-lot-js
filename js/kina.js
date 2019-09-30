class KinaStrategi {
    getDescription() {
        return "Gratis, men du er produktet.";
    }

    calculatePrice() {
        return 0;
    }
}

class LoggingParkingLotDecorator {
    constructor(parkingLot) {
        this.parkingLot = parkingLot;
    }
    
    getDescription() {
        return this.parkingLot.getDescription();
    }

    checkin(licensePlate) {
        return this.parkingLot.checkin(licensePlate);
    }

    checkout(licensePlate) {
        return this.parkingLot.checkout(licensePlate);
    }

    pay(licensePlate, amount) {
        return this.parkingLot.pay(licensePlate, amount);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const prisStrategi = new KinaStrategi();
    const parkingLot = new ParkingLot(prisStrategi);
    const decoratedParkingLot = new LoggingParkingLotDecorator(parkingLot);
    main(decoratedParkingLot);
});