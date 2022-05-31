function sumTS(arr: number[]) {
  return arr.reduce((a, v) => a + v);
}

const tsNumber = 2;
const tsString = "str";

const result = tsString + tsNumber;
const result2 = +tsString - tsNumber;

// union type

const strOrNumber: string | number = "2";

//Type alias

type StrOrNumber = string | number;

const StrOrNumber1: StrOrNumber = "2";

const tsArray: number[] = [1, 2, 3];
const tsArrayGeneric: Array<number> = [];

//Tuple-массив фиксированной длины
const myTuple: [number, string] = [1, "2"];

type MyObjType = { a: number; b: string };

interface MyFirstInterface {
  readonly a: number;
  b: string;
  // c: number[]
}

const myObj: MyFirstInterface = {
  a: 2,
  b: "123",
};

const ApiAnswer = { key: "asd", key1: "asd" };

interface IndexInterface {
  [n: string]: string;
}

enum Methods {
  add,
  sub,
}

function calculate(method: Methods, left: number, right: number): number {
  switch (method) {
    case Methods.add:
      return left + right;
    case Methods.sub:
      return left - right;
  }
}

const ArrowFn: FnInerface = (value) => 2;

type TypeFn = () => number;

interface FnInerface {
  (a: number): void;
}

const sum = calculate(Methods.add, 2, 2);

const some: any = "2";

const un: unknown = "2";

if (typeof un === "string") {
  un.concat();
}

function neverFn(): never {
  throw new Error();
}

const someValue = neverFn();
