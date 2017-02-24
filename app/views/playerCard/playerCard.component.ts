import { Component, Input, Output, EventEmitter, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { TNSFontIconService } from "nativescript-ngx-fonticon";
import { Player } from "../../models/player";
import { BuildHousesComponent } from "../modals/buildHouses/buildHouses.component";
import { BureaucracyComponent } from "../modals/bureaucracy/bureaucracy.component";

@Component({
    selector: "playerCard",
    templateUrl: "views/playerCard/playerCard.html",
    styleUrls: ["views/playerCard/playerCard.css"]
})

export class PlayerCardComponent {
    @Input() player: Player;
    @Output() change = new EventEmitter();

    public constructor(private fonticon: TNSFontIconService,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef) {
    }

    public buildHouses() {
        let options: ModalDialogOptions = {
            context: this.player,
            fullscreen: true,
            viewContainerRef: this.viewContainerRef
        };

        this.modalService.showModal(BuildHousesComponent, options)
            .then((dialogResult: Player) => {
                this.player = dialogResult;
                this.change.emit();
            });
    }
    public bureaucracy() {
        let options: ModalDialogOptions = {
            context: this.player,
            fullscreen: true,
            viewContainerRef: this.viewContainerRef
        };

        this.modalService.showModal(BureaucracyComponent, options)
            .then((dialogResult: Player) => {
                this.player = dialogResult;
                this.change.emit();
            });
    }
}