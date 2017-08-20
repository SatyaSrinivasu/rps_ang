import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'product-app', //html element/tag name
    templateUrl: "app.component.html" //view
})
export class AppComponent implements OnInit{
    title: string = "Product App";
    //view is not hosted
    constructor() {
        
    }

    ngOnInit() {
        console.log("init in AppComponent");
    }
}