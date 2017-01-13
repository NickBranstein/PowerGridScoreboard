import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "home",
    templateUrl: "./views/home/home.html",
})
    
export class HomeComponent {
    public counter: number = 16;
    public playerOne: string;
    public playerTwo: string;
    public playerThree: string;
    public playerFour: string;
    public playerFive: string;
    public message: string;


    /**
     *
     */
    constructor(private router: Router) {       }
    
    public onTap() {
        console.log('player one: ' + this.playerOne);
        this.router.navigate(["/scoreboard"]);
    }
}
