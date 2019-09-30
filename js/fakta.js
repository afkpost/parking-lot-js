class FaktaPriceStrategy {
    getDescription() {
        return "Velkommen til Faktas parkeringsplads. Her koster det 20 kr pr påbegyndt kvarter. De første fem minutter er gratis.";
    }

    calculatePrice(from, to) {
        const time = ((to - from) / 1000) - 5;
        if (time < 0) {
            return 0;
        } else {
            return 20 * (Math.floor(time / 15) + 1);
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(new FaktaPriceStrategy()));
});