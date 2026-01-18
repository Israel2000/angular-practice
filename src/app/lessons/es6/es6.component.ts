import { Component } from "@angular/core";

@Component({
    selector: "app-es6",
    standalone: true,
    template: `Es6Component works!`
})
export class Es6Component {
    // Example of arrow function
    myFunction = (a: any, b: any) => a + b;
}

