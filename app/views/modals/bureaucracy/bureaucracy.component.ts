import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Player } from "../../../models/player";
import { Utilities } from "../../../utilities";

@Component({
    selector: "bureaucracy",
    templateUrl: "views/modals/bureaucracy/bureaucracy.html",
    styleUrls: ["views/modals/bureaucracy/bureaucracy.css"]
})

export class BureaucracyComponent {
    public player: Player;
    public housesPowered: any;
    public coalUsed: any;
    public oilUsed: any;
    public garbageUsed: any;
    public uraniumUsed: any;
    public payout: any;

    public constructor(private params: ModalDialogParams) {
        this.player = <Player>params.context;
        //this.payout = this.getPayout(this.housesPowered);
    }

    public close(result: string) {
        if (result == 'OK') {
            this.player.Money += this.getPayout(this.housesPowered);
            this.player.Coal -= this.coalUsed;
            this.player.Oil -= this.oilUsed;
            this.player.Garbage -= this.garbageUsed;
            this.player.Uranium -= this.uraniumUsed;            
        }
        
        this.params.closeCallback(this.player);
    }
    
    public getPayout(houses: any): number {
        houses = parseInt(houses);
        if(houses === 0) return 10;
        if(houses === 1) return 22;
        if(houses === 2) return 33;
        if(houses === 3) return 44;
        if(houses === 4) return 54;
        if(houses === 5) return 64;
        if(houses === 6) return 73;
        if(houses === 7) return 82;
        if(houses === 8) return 90;
        if(houses === 9) return 98;
        if(houses === 10) return 105;
        if(houses === 11) return 112;
        if(houses === 12) return 118;
        if(houses === 13) return 124;
        if(houses === 14) return 129;
        if(houses === 15) return 134;
        if(houses === 16) return 138;
        if(houses === 17) return 142;
        if(houses === 18) return 145;
        if(houses === 19) return 148;
        if(houses === 20) return 150;
        return 0;
    }
}