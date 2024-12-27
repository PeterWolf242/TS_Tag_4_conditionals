

const schoolGrade = Math.floor(Math.random() * 10) + 1;

console.log(schoolGrade);

switch (schoolGrade) {
    case 1: {
        console.log("1 - sehr gut");
        break;
    }
    case 2: {
        console.log("2 - gut");
        break;
    }
    case 3: {
        console.log("3 - befriedigend");
        break;
    }
    case 4: {
        console.log("4 - ausreichend");
        break;
    }
    case 5: {
        console.log("5 - mangelhaft");
        break;
    }
    case 6: {
        console.log("6 - ungenügend");
        break;
    }
    case 7:
    case 8:
    case 9:
    case 10: {
        console.log("Das ist keine gültige Schulnote.");
        break;
    }
    default: console.log("Sie wurden von der Schule ausgeschlossen !!");
}

