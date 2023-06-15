export interface Alllibs {
    [prop: string]: {
        namespace: string;
        version: string;
        runtime: Function;
    }
}