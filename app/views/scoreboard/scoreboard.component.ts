import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "scoreboard",
    templateUrl: "./views/scoreboard/scoreboard.html",
})
    
export class ScoreboardComponent {
    public players: string[];

    public constructor(private route: ActivatedRoute) {
        this.route.params.subscribe((params) => {
            this.players = params["players"];
        });      
    }
    
}
