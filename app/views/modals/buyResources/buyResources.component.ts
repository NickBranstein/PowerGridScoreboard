import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Player } from "../../../models/player";

@Component({
    selector: "buyResources",
    templateUrl: "views/modals/buyResources/buyResources.html",
    styleUrls: ["views/modals/buyResources/buyResources.css"]
})

export class BuyResourcesComponent {
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