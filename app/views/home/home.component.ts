import { Component } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import * as Platform from "platform";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
    selector: "home",
    templateUrl: "views/home/home.html",
    styleUrls: ["views/home/home.css"]
})
    
export class HomeComponent {
    public playerOne: string;
    public playerTwo: string;
    public playerThree: string;
    public playerFour: string;
    public playerFive: string;
    public players: string[];
    public landscape: boolean;
    public hasPlayerTwo: boolean;
    public hasPlayerThree: boolean;
    public hasPlayerFour: boolean;
    public hasPlayerFive: boolean;

    public constructor(private router: Router, private fonticon: TNSFontIconService) {
        if (Platform.screen.mainScreen.widthPixels > 1024) {
            this.landscape = true;
        } else {
            this.landscape = false;
        }
    }
    
    public onPlayerTwoTap() {
        this.hasPlayerTwo = !this.hasPlayerTwo;
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

    public onTap() {
        this.players = [this.playerOne, this.playerTwo, this.playerThree, this.playerFour, this.playerFive];
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "players": this.players
            }
        };
        this.router.navigate(["scoreboard"], navigationExtras);
    }

    public onPlayerCardTap() {
        this.router.navigate(["playerCard"]);
    }
}
