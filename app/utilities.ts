export class Utilities {
    public static valueOrIfNullReturnZero(val : any) {
        return val === null || val === undefined ? 0: val;
    }
}
