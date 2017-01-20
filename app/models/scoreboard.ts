import { Player } from "./player";

export class Scoreboard {
    PlayerOne: Player;
    PlayerTwo: Player;
    PlayerThree: Player;
    PlayerFour: Player;
    PlayerFive: Player;

    constructor(playerOne: string, playerTwo: string, playerThree?: string, playerFour?: string, playerFive?: string) {
        this.PlayerOne = new Player(playerOne);
        this.PlayerTwo = new Player(playerTwo);
        this.PlayerThree = new Player(playerThree);
        this.PlayerFour = new Player(playerFour);
        this.PlayerFive = new Player(playerFive);
    }
}