console.log("test");

let weekdayAsString: string;

const userInput = window.prompt("Please insert a number from 1 to 7");

switch (userInput) {
    case ("1"): {
        weekdayAsString = "Montag";
        break;
    }
    case ("2"): {
        weekdayAsString = "Dienstag";
        break;
    }
    case ("3"): {
        weekdayAsString = "Mittwoch";
        break;
    }
    case ("4"): {
        weekdayAsString = "Donnerstag";
        break;
    }
    case ("5"): {
        weekdayAsString = "Freitag";
        break;
    }
    case ("6"): {
        weekdayAsString = "Samstag";
        break;
    }
    case ("7"): {
        weekdayAsString = "Sonntag";
        break;
    }
    default: {
        weekdayAsString = "Weekday must be between 1 and 7";
    }
}

console.log(weekdayAsString);





