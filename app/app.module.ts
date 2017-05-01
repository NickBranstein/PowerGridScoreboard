import { Component, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { ScoreboardComponent } from "./views/scoreboard/scoreboard.component";
import { PlayerCardComponent } from "./views/playerCard/playerCard.component";
import { BuildHousesComponent } from "./views/modals/buildHouses/buildHouses.component";
import { BureaucracyComponent } from "./views/modals/bureaucracy/bureaucracy.component";
import { BuyResourcesComponent } from "./views/modals/buyResources/buyResources.component";
import { BuyPowerComponent } from "./views/modals/buyPower/buyPower.component";

// validators
import { GreaterThanZeroValidatorDirective } from "./validators/greaterThanZeroValidator"

@NgModule({
    declarations: [
        AppComponent,
        BuildHousesComponent,
        BureaucracyComponent,
        BuyResourcesComponent,
        BuyPowerComponent,
        GreaterThanZeroValidatorDirective,
        ...navigatableComponents
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        BuildHousesComponent,
        BureaucracyComponent,
        BuyResourcesComponent,
        BuyPowerComponent,
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        TNSFontIconModule.forRoot({
            'fa': 'font-awesome.css'
        })
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
