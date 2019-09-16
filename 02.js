//Write a simple program to display the day of the week based on the date/ (1 - 7) entered. Pls try to use Enum and Generics to implement the same
var readline = require('readline');
var Days;
(function (Days) {
    Days[Days["Sunday"] = 1] = "Sunday";
    Days[Days["Monday"] = 2] = "Monday";
    Days[Days["Tuesday"] = 3] = "Tuesday";
    Days[Days["Wednesday"] = 4] = "Wednesday";
    Days[Days["Thrusday"] = 5] = "Thrusday";
    Days[Days["Friday"] = 6] = "Friday";
    Days[Days["Saturday"] = 7] = "Saturday";
})(Days || (Days = {}));
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Is this example useful? [y/n] ', function (week) {
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
