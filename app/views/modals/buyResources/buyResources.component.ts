import { Component, ViewChild, ElementRef } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Player } from "../../../models/player";

@Component({
    selector: "buyResources",
    templateUrl: "views/modals/buyResources/buyResources.html",
    styleUrls: ["views/modals/buyResources/buyResources.css"]
})

export class BuyResourcesComponent {
    public player: Player;
    public coalPurchased: any;
    public oilPurchased: any;
    public garbagePurchased: any;
    public uraniumPurchased: any;
    public coalCost: any;
    public oilCost: any;
    public garbageCost: any;
    public uraniumCost: any;
    @ViewChild("coal") test: ElementRef;

    public constructor(private params: ModalDialogParams) {
        this.player = <Player>params.context;
    }

    public close(result: string) {
        if (result == 'OK') {            
            this.player.Money = this.player.Money - ((parseInt(this.coalCost) * parseInt(this.coalPurchased))
                                                   + (parseInt(this.oilCost) * parseInt(this.oilPurchased)) 
                                                   + (parseInt(this.garbageCost) * parseInt(this.garbagePurchased))
                                                   + (parseInt(this.uraniumCost) * parseInt(this.uraniumPurchased)));            

            //let intHouses = this.player.Houses + parseInt(this.houseQuantity); // weird angular binding issue            

            this.player.Coal += this.coalPurchased;
            this.player.Oil += this.oilPurchased;
            this.player.Garbage += this.garbagePurchased;
            this.player.Uranium += this.uraniumPurchased;            
        }
        
        this.params.closeCallback(this.player);
    }

    public onChange(event: any) {
        console.log(event);
    }
}