export class Player {
    Coal: number;
    Oil: number;
    Garbage: number;
    Uranium: number;

    constructor(public Name: string, public Money: number) {
        this.Coal = this.Oil = this.Garbage = this.Uranium = 0;
    }
}