import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Player } from "../../../models/player";

@Component({
    selector: "buildHouses",
    templateUrl: "views/modals/buildHouses/buildHouses.html",
    styleUrls: ["views/modals/buildHouses/buildHouses.css"]
})

export class BuildHousesComponent {
    public player: Player;
    public housePrice: number;
    public houseQuantity: any;

    public constructor(private params: ModalDialogParams) {
        this.player = <Player>params.context;
    }

    public totalHouses(): string {
        let intHouses = this.player.Houses + parseInt(this.houseQuantity); // f u angular weird binding issue

        return 'Total Houses ' + (this.houseQuantity != null ? intHouses : this.player.Houses);
    }

    public close(result: string) {
        if (result == 'OK') {
            this.player.Money -= this.housePrice;
            this.player.Houses += <number>this.houseQuantity;
        }

        this.params.closeCallback(this.player);
    }
}