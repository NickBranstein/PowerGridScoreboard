import { Injectable } from "@angular/core";
import { Scoreboard } from "../models/scoreboard";
import * as fileSystem from "file-system";

@Injectable()
export class ScoreboardService {
    load(): Scoreboard | null {
        let file = fileSystem.knownFolders.documents().getFile("scoreboard.json");

        if (file.readTextSync().length === 0)
            return null;
        
        return <Scoreboard>JSON.parse(file.readTextSync());
    }

    save(scoreboard: Scoreboard): void {
        let file = fileSystem.knownFolders.documents().getFile("scoreboard.json");
        let json = JSON.stringify(scoreboard);

        file.writeTextSync(json);
    }

    clearGameData(): void {
        let file = fileSystem.knownFolders.documents().getFile("scoreboard.json");

        file.removeSync();
    }

    gameDataExists(): boolean {
        let file = fileSystem.knownFolders.documents().getFile("scoreboard.json");

        return file.readTextSync().length !== 0;
    }
}