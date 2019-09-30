# Parking lot
## En øvelse i mønstre

---

## Recap

* <!-- .element: class="fragment" --> https://github.com/afk-eucnvs/parking-lot-js
* Priser <!-- .element: class="fragment" -->
  * Føtex: 15 DKK pr påbegyndt kvarter <!-- .element: class="fragment" -->
  * Bilka: 10 DKK pr påbegyndt kvarter <!-- .element: class="fragment" -->
  * Fakta: 5 min gratis, derefter 20 DKK pr påbegyndt kvarter <!-- .element: class="fragment" -->


---

## Tredje forsøg

# Strategy Pattern <!-- .element: class="fragment" -->
### (functional version) <!-- .element: class="fragment" -->

----

## Tredje forsøg
ParkingLot.js
```javascript

// calculatePrice er en funktion der tager checkinTime og checkoutTime
// og returnerer prisen for den givne periode.
constructor(calculatePrice) {
    this.calculatePrice = calculatePrice;
}

/* ... */

checkout(licensePlate) {
    /* ... */
    price = this.calculatePrice(checkinTime, checkoutTime);
    /* ... */
}

```

----
## Tredje forsøg


fotex.js
```javascript

function calculateFotexPrice(checkinTime, checkoutTime) {
    const time = (checkoutTime - checkinTime) / 1000;
    return 15 * (Math.floor(time/15) + 1);
}

new ParkingLot(calculateFotexPrice);
```
<!-- .element: class="fragment" -->

bilka.js
```javascript
function calculateBilkaPrice(checkinTime, checkoutTime) {
    const time = (checkoutTime - checkinTime) / 1000;
    return 10 * (Math.floor(time/15) + 1);
})

new ParkingLot(calculateBilkaPrice);
```
<!-- .element: class="fragment" -->

----
## Tredje forsøg

fakta.js
```javascript 
function calculateFaktaPrice(checkinTime, checkoutTime) {
    const time = ((checkoutTime - checkinTime) / 1000) - 5;

    if (time < 0) {
        return 0;
    } else {
        return 20 * (Math.floor(time/15) + 1);
    }
}

new ParkingLot(calculateFaktaPrice);
```
<!-- .element: class="fragment" -->

---

## Ny feature
Vi vil gerne skrive en besked til vores kunder om hvordan prisen bliver beregnet
<!-- .element: class="fragment" -->

---

## Fjerde forsøg

# Strategy Pattern <!-- .element: class="fragment" -->
### (OO version) <!-- .element: class="fragment" -->

----

ParkingLot.js
```javascript

// priceStrategy indeholder
// - calculatePrice(from, to) som beregner prisen for en parkering
// - getDescription() som returnere en dansk tekst for parkeringen
constructor(priceStrategy) {
    this.priceStrategy = priceStrategy;
}

getDescription() {
    return this.priceStrategy.getDescription();
}

checkout(licensePlate) {
    /* ... */
    price = this.priceStrategy.calculatePrice(checkinTime, checkoutTime);
    /* ... */
}
```

----
## Fjerde forsøg

fotex.js
```javascript

class FotexPriceStrategy {
    getDescription() {
        return "Velkommen til Føtex. Det koster 15 kr pr påbegyndt kvarter at parkere her.";
    }

    calculatePrice(checkinTime, checkoutTime) {
        const time = (checkoutTime - checkinTime) / 1000;
        return 15 * (Math.floor(time/15) + 1);
    }
}



new ParkingLot(new FotexPriceStrategy());
```
<!-- .element: class="fragment" -->