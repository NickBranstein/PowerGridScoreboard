export class Utilities {
    valueOrIfNullReturnZero(val : any) {
        return val === null || val === undefined ? 0: val;
    }
}
