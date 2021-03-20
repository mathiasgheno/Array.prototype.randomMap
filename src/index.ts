interface Array<T> {
  randomMap<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];
}

Array.prototype.randomMap = function (callback, thisArg) {
  const arrayOriginal = this;
  const arrayMapeado = arrayOriginal.map(callback, thisArg);
  arrayMapeado.sort(() => (Math.random() > 0.5) ? 1 : -1);
  return arrayMapeado;
}