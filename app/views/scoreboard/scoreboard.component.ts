import { Component } from "@angular/core";
import { PageRoute } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { Player } from "../../models/player";

@Component({
    selector: "scoreboard",
    templateUrl: "./views/scoreboard/scoreboard.html",
})
    
export class ScoreboardComponent {
    public players: string[];
    public playerOne: Player;
    public playerTwo: Player;
    public playerThree: Player;

    public constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.players = params["players"];
            console.log(this.players);
        });

        this.playerOne = new Player("Nick", 100);
        this.playerTwo = new Player("Jason", 500);
        this.playerThree = new Player("David", 3400);
    }    
}
