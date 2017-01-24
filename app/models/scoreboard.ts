import { Player } from "./player";

export class Scoreboard {
    PlayerOne: Player;
    PlayerTwo: Player;
    PlayerThree: Player;
    PlayerFour: Player;
    PlayerFive: Player;

    constructor(playerOne: string, playerTwo: string, playerThree?: string, playerFour?: string, playerFive?: string) {
        let startingMoney = 50;
        this.PlayerOne = new Player(playerOne, startingMoney);
        this.PlayerTwo = new Player(playerTwo, startingMoney);
        this.PlayerThree = new Player(playerThree, playerThree != null ? startingMoney : null);
        this.PlayerFour = new Player(playerFour, playerFour != null ? startingMoney : null);
        this.PlayerFive = new Player(playerFive, playerFive != null ? startingMoney : null);
    }
}