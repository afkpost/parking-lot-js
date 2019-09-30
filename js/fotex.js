class FotexPriceStrategy {
    getDescription() {
        return "Velkommen til Føtex' parkeringsplads. Her koster det 15 kr pr påbegyndt kvarter.";
    }

    calculatePrice(from, to) {
        const time = (to - from) / 1000;
        return 15 * (Math.floor(time/15) + 1);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(new KinaStrategi()));
});