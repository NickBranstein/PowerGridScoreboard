import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Player } from "../../../models/player";
import { Utilities } from "../../../utilities";

@Component({
    selector: "buyPower",
    templateUrl: "views/modals/buyPower/buyPower.html",
    styleUrls: ["views/modals/buyPower/buyPower.css"]
})

export class BuyPowerComponent {
    public player: Player;
    public price: number;

    public constructor(private params: ModalDialogParams) {
        this.player = <Player>params.context;
    }

    public close(result: string) {
        if (result == 'OK') {           
            this.price = Utilities.valueOrIfNullReturnZero(this.price);
            this.player.Money -= this.price;
        }
        
        this.params.closeCallback(this.player);
    }
}