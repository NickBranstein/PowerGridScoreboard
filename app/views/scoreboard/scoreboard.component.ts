import { Component } from "@angular/core";
import { PageRoute } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { Player } from "../../models/player";
import { Scoreboard } from "../../models/scoreboard";
import { ScoreboardService } from "../../services/scoreboardService";

@Component({
    selector: "scoreboard",
    providers: [ScoreboardService],
    templateUrl: "./views/scoreboard/scoreboard.html",
})
    
export class ScoreboardComponent {
    private scoreboard: Scoreboard;

    public constructor(private scoreboardService: ScoreboardService, private route: ActivatedRoute) {
        let players : Array<string>;

        this.route.queryParams.subscribe(params => {
            players = JSON.parse(params["players"]);            
        });

        if (this.scoreboardService.gameDataExists())
            this.scoreboard = this.scoreboardService.load()
        else
            this.scoreboard = new Scoreboard(players[0], players[1], players[2], players[3], players[4]);
    }    
}
