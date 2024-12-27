console.log("test");

const zufallZahl1 = Math.floor(Math.random() * 76);
const zufallZahl2 = Math.floor(Math.random() * 76);

console.log(zufallZahl1);
console.log(zufallZahl2);

if (zufallZahl1 == zufallZahl2) {
    console.log("Glück gehabt.....Beide Zahlen sind gleich");
} else
    if (zufallZahl1 > zufallZahl2) {
        console.log("Die 1. Zahl ist größer");
    } else
        if (zufallZahl2 > zufallZahl1) {
            console.log("Die 2. Zahl ist größer");
        }
        else
            console.log("Pech gehabt.....Beide Zahlen sind nicht gleich");

switch (true) {
    case (zufallZahl1 == zufallZahl2): {
        console.log("Glück gehabt.....Beide Zahlen sind gleich");
        break;
    }
    case (zufallZahl1 > zufallZahl2): {
        console.log("Die 1. Zahl ist größer");
        break;
    }
    case (zufallZahl2 > zufallZahl1): {
        console.log("Die 2. Zahl ist größer");
        break;
    }
    default: console.log("Pech gehabt.....Beide Zahlen sind nicht gleich");
}



