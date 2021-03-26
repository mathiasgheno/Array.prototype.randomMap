interface Array<T> {
    randomMap<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
}
