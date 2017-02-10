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
        let poop = this.player.Houses + parseInt(this.houseQuantity); // f u angular weird binding issue
        console.log(poop);
        return 'Total Houses ' + (this.houseQuantity != null ? poop : this.player.Houses);
    }

    public close(result: string) {
        console.log(this.player.Name);
        this.params.closeCallback('poop');
    }
}