import { Component } from "@angular/core";
import { Router } from "@angular/router";
import * as Platform from "platform";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
    selector: "playerCard",
    templateUrl: "views/playerCard/playerCard.html",
    styleUrls: ["views/playerCard/playerCard.css"]
})

export class PlayerCardComponent {
    public constructor(private fonticon: TNSFontIconService) {
    
    }
}