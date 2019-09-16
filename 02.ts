//Write a simple program to display the day of the week based on the date/ (1 - 7) entered. Pls try to use Enum and Generics to implement the same

var readline = require('readline');

enum Days{
    Sunday = 1,
    Monday = 2,
    Tuesday = 3,
    Wednesday = 4,
    Thrusday = 5,
    Friday = 6,
    Saturday = 7
}


let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Is this example useful? [y/n] ', (week) => {
    switch (+week) {
        case Days.Sunday:
            console.log("It is a Sunday.");
            break;
        case Days.Monday:
            console.log("It is a Monday.");
            break;
        case Days.Tuesday:
            console.log("It is a Tuesday.");
            break;
        case Days.Wednesday:
            console.log("It is a Wednesday.");
            break;
        case Days.Thrusday:
            console.log("It is a Thursday.");
            break;
        case Days.Friday:
            console.log("It is a Friday.");
            break;
        case Days.Saturday:
            console.log("It is a Saturday.");
            break;
        default:
            console.log("No such day exists!");
            break;
    }
    rl.close();
});

