import { Component, ViewChild, ElementRef } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Player } from "../../../models/player";
import { Utilities } from "../../../utilities";

@Component({
    selector: "buyResources",
    templateUrl: "views/modals/buyResources/buyResources.html",
    styleUrls: ["views/modals/buyResources/buyResources.css"]
})

export class BuyResourcesComponent {
    public player: Player;
    public coalPurchased: number;
    public oilPurchased: number;
    public garbagePurchased: number;
    public uraniumPurchased: number;
    public coalCost: number;
    public oilCost: number;
    public garbageCost: number;
    public uraniumCost: number;

    public constructor(private params: ModalDialogParams) {
        this.player = <Player>params.context;
    }

    public close(result: string) {
        if (result == 'OK') {
            this.parseValues();

            this.player.Money = this.player.Money - (this.coalCost * this.coalPurchased)
                + (this.oilCost * this.oilPurchased)
                + (this.garbageCost * this.garbagePurchased)
                + (this.uraniumCost * this.uraniumPurchased);            

            this.player.Coal += this.coalPurchased;
            this.player.Oil += this.oilPurchased;
            this.player.Garbage += this.garbagePurchased;
            this.player.Uranium += this.uraniumPurchased;            
        }
        
        this.params.closeCallback(this.player);
    }

    private parseValues(): void {
            this.coalCost = Utilities.valueOrIfNullReturnZero(this.coalCost);
            this.coalPurchased = Utilities.valueOrIfNullReturnZero((this.coalPurchased);
            this.oilCost = Utilities.valueOrIfNullReturnZero(this.oilCost);
            this.oilPurchased = Utilities.valueOrIfNullReturnZero(this.oilPurchased);
            this.garbageCost = Utilities.valueOrIfNullReturnZero(this.garbageCost);
            this.garbagePurchased = Utilities.valueOrIfNullReturnZero(this.garbagePurchased);
            this.uraniumCost = Utilities.valueOrIfNullReturnZero(this.uraniumCost);
            this.uraniumPurchased = Utilities.valueOrIfNullReturnZero(this.uraniumPurchased);
    }
}