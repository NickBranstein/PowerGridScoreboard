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
    public housesPowered: number;
    public coalUsed: number;
    public oilUsed: number;
    public garbageUsed: number;
    public uraniumUsed: number;
    public payout: number;

    public constructor(private params: ModalDialogParams) {
        this.player = <Player>params.context;
    }

    public close(result: string) {
        if (result == 'OK') {           
        }
        
        this.params.closeCallback(this.player);
    }
    private parse(val: any): number {
        return val === null || val == undefined ? 0 : val;
    }
}