const mistake = [] as Array<number>;

mistake.push(1);

const bigObject = {
  debug: "on",
  window: {
    title: "Sample Konfabulator Widget",
    name: "main_window",
    width: 500,
    height: 500,
  },
  image: {
    src: "Images/Sun.png",
    name: "sun1",
    hOffset: 250,
    vOffset: 250,
    alignment: "center",
  },
  text: {
    data: "Click Here",
    size: 36,
    style: "bold",
    name: "text1",
    hOffset: 250,
    vOffset: 100,
    alignment: "center",
    onMouseUp: "sun1.opacity = (sun1.opacity / 100) * 90;",
  },
  compare_same_ref: true,
};

type TMyBigObject = typeof bigObject;

const typedBigObject: MyReadonly<TMyBigObject> = bigObject;

// typedBigObject.text = "false";

typedBigObject.text.alignment = "false";

type TObjKeys = keyof TMyBigObject;
type TCommitType = TMyBigObject["text"];

type MyReadonly<T> = {
  readonly [N in keyof T]: T[N];
};

type MyPartial<T> = {
  [N in keyof T]?: T[N];
};

type MyPick<T, K extends keyof T> = {
  [N in K]: T[N];
};

type picked = MyPick<TMyBigObject, "compare_same_ref">;

// const some: MyReadonly<TMyBigObject> = {
//   comp: false,
// };

type MyReadonlyDeep<T> = {
  readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N];
};

const typedBigObjectDeep: MyReadonlyDeep<TMyBigObject> = bigObject;

// typedBigObjectDeep.compare_same_ref = "false";

// typedBigObjectDeep.text.data = "false";

type TSomeType = MyReadonlyDeep<TMyBigObject>;
// type inference
type RemoveReadOnly<T> = T extends MyReadonlyDeep<infer E> ? E : T;

type TTest = RemoveReadOnly<TSomeType>;

function greaterThenZero(a: number, b: string) {
  return a > 0;
}

type FnReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type FnParametrs<T> = T extends (...args: infer R) => any ? R : never;

type TReturnType = ReturnType<typeof greaterThenZero>;
type TArgsType = Parameters<typeof greaterThenZero>;
