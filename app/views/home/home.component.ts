import { Component } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import * as Platform from "platform";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { ScoreboardService } from "../../services/scoreboardService";

@Component({
    selector: "home",
    providers: [ScoreboardService],
    templateUrl: "views/home/home.html",
    styleUrls: ["views/home/home.css"]
})
    
export class HomeComponent {
    public playerOne: string;
    public playerTwo: string;
    public playerThree: string;
    public playerFour: string;
    public playerFive: string;
    public landscape: boolean;
    public hasPlayerThree: boolean;
    public hasPlayerFour: boolean;
    public hasPlayerFive: boolean;
    public continueGame: boolean;

    public constructor(private router: Router, private fonticon: TNSFontIconService, private scoreboardService: ScoreboardService) {
        if (Platform.screen.mainScreen.widthPixels > 1024) {
            this.landscape = true;
        } else {
            this.landscape = false;
        }

        this.continueGame = scoreboardService.gameDataExists();
    }

    public onPlayerThreeTap() {
        this.hasPlayerThree = !this.hasPlayerThree;
    }

    public onPlayerFourTap() {
        this.hasPlayerFour = !this.hasPlayerFour;
    }

    public onPlayerFiveTap() {
        this.hasPlayerFive = !this.hasPlayerFive;
    }

    public onPlayTap() {
        if (this.playerOne == null || this.playerTwo == null
            || (this.hasPlayerThree && this.playerThree == null)
            || (this.hasPlayerFour && this.playerFour == null)
            || (this.hasPlayerFive && this.playerFive == null))
            return;

        let players = [this.playerOne, this.playerTwo, this.playerThree, this.playerFour, this.playerFive];
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "players": JSON.stringify(players)
            }
        };
        
        this.router.navigate(["scoreboard"], navigationExtras);
    }

    public onContinueTap() {
         let navigationExtras: NavigationExtras = {
            queryParams: {
                "continueGame": true
            }
         };
        
        this.router.navigate(["scoreboard"], navigationExtras);
    }
}
