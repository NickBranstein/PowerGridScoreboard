import { HomeComponent } from "./views/home/home.component";
import { ScoreboardComponent } from "./views/scoreboard/scoreboard.component";

export const routes: any = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "scoreboard/:players", component: ScoreboardComponent }
];

export const navigatableComponents: any = [
  HomeComponent,
  ScoreboardComponent
];