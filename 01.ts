//Write a program to log current date and time. Adopt Interface and inherit it in the implementation class

export class Module {

    constructor(public updatedTime: Date) { }

    getUpdatedTime(): String {

        let options: Intl.DateTimeFormatOptions = {
            day: "numeric", month: "numeric", year: "numeric",
            hour: "2-digit", minute: "2-digit"
        };

        return this.updatedTime.toLocaleDateString("en-GB", options);
    }
}

let date = new Date();
let module = new Module(date);
console.log(module.getUpdatedTime());
