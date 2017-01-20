import { Component } from "@angular/core";
import { TNSFontIconService } from "nativescript-ngx-fonticon";
import { Player } from "../../models/player";

@Component({
    selector: "playerCard",
    templateUrl: "views/playerCard/playerCard.html",
    styleUrls: ["views/playerCard/playerCard.css"]
})

export class PlayerCardComponent {
    private player: Player;

    public constructor(private fonticon: TNSFontIconService) {
        this.player = new Player("Nick", 1000);
    }
}