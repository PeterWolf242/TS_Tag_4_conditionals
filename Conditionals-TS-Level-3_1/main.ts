
const salesMonth = Math.floor(Math.random() * 12) + 1;
let month: string = "";

switch (salesMonth) {
    case 1: {
        month = "1. Quartal";
        break;
    }
    case 2: {
        month = "2. Quartal";
        break;
    }
    case 3: {
        month = "3. Quartal";
        break;
    }
    case 4: {
        month = "4. Quartal";
        break;
    }
    case 5: {
        month = "5. Quartal";
        break;
    }
    case 6: {
        month = "6. Quartal";
        break;
    }
}


const totalSales = Math.floor(Math.random() * 10000) + 1;
console.log(`Total-Sales: ${totalSales}`);

switch (true) {
    // case totalSales >= 1000:
    // case totalSales <= 2500: 
    case (totalSales >= 1000 && totalSales <= 2500):
        {
            console.log(`Im ${month} war der Umsatz mit ${totalSales} schlecht !`);
            break;
        }
    case (totalSales >= 2501 && totalSales <= 5000): {
        console.log(`Im ${month} war der Umsatz mit ${totalSales} mittelmäßig !`);
        break;
    }
    case (totalSales >= 5001 && totalSales <= 7500): {
        console.log(`Im ${month} war der Umsatz mit ${totalSales} hoch !`);
        break;
    }
    case (totalSales >= 7501 && totalSales <= 10000): {
        console.log(`Im ${month} war der Umsatz mit ${totalSales} unglaublich !`);
        break;
    }
    default: {
        console.log("Im gewählten Monat war der Umsatz nicht messbar");
    }
}