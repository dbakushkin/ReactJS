// 1. Работа с простыми типами

type FnConcat = (a: string, b: string) => string;

const concat: FnConcat = (arg1, arg2) => {
  return arg1 + arg2;
};

concat("Hello ", "World");

const concat1 = (arg1: string, arg2: string): string => arg1 + arg2;

concat1("Hello ", "World");

// 2.Работа с интерфейсами

interface HomeTask {
  howIDoIt: string;
  simeArray: [string, string, number];
  withData: [
    {
      howIDoIt: string;
      simeArray: [string, number];
    }
  ];
}

const MyHometask: HomeTask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

// 3. Типизация функций, используя Generic
const initialValue = 0;
const myArray1: MyArray1<number> = [1, 2, 3];

interface MyArray1<T> {
  [N: number]: T;

  map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>;
  reduce(fn: (acc: T, value: T, initialValue: number, array: T[]) => T): T;
}

myArray1.reduce((accumulator, value) => accumulator + value);

// 4.Работа с MappedTypes

interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  };
}
type MyPartialDeep<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartialDeep<T[N]> : T[N];
};

const homeTask: MyPartialDeep<IHomeTask> = {
  externalData: {
    value: "win",
  },
};
