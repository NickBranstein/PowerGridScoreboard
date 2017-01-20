import { Component } from "@angular/core";
import { PageRoute } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/switchMap";

@Component({
    selector: "scoreboard",
    templateUrl: "./views/scoreboard/scoreboard.html",
})
    
export class ScoreboardComponent {
    public players: string[];

    public constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.players = params["players"];
            console.log(this.players);
        });
    }    
}
