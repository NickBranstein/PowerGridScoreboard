import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Player } from "../../../models/player";

@Component({
    selector: "buyPower",
    templateUrl: "views/modals/buyPower/buyPower.html",
    styleUrls: ["views/modals/buyPower/buyPower.css"]
})

export class BuyPowerComponent {
    public player: Player;
    public housesPowered: any;
    public coalUsed: any;
    public oilUsed: any;
    public garbageUsed: any;
    public uraniumUsed: any;
    public payout: any;

    public constructor(private params: ModalDialogParams) {
        this.player = <Player>params.context;
    }

    public close(result: string) {
        if (result == 'OK') {           
        }
        
        this.params.closeCallback(this.player);
    }
}