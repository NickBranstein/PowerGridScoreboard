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
        let players: Array<string>;
        let continueGame: boolean;

        this.route.queryParams.subscribe(params => {
            players = params["players"] != null ? JSON.parse(params["players"]) : null;       
            continueGame = params["continueGame"];
        });

        if (continueGame && this.scoreboardService.gameDataExists()) {
            this.scoreboard = this.scoreboardService.load()
        }
        else {
            scoreboardService.clearGameData();
            this.scoreboard = new Scoreboard(players[0], players[1], players[2], players[3], players[4]);
        }

        scoreboardService.save(this.scoreboard);
    }    
}