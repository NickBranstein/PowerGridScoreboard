import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "home",
    templateUrl: "./views/home/home.html",
})
    
export class HomeComponent {
    public playerOne: string;
    public playerTwo: string;
    public playerThree: string;
    public playerFour: string;
    public playerFive: string;
    public players: string[];

    public constructor(private router: Router) {
    
    }
    
    public onTap() {
        let players: string[] = [this.playerOne, this.playerTwo, this.playerThree, this.playerFour, this.playerFive];
        this.router.navigate(["scoreboard", this.players]);
    }
}
