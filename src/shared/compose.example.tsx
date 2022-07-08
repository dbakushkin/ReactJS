import { getValue } from "../utils/react/pickFromSyntheticEvent";
import { preventDefault } from "../utils/react/preventDefault";
import { stopPropagation } from "../utils/react/stopPropagation";
import * as React from "react";

function InputExample({ value, onChange }: any) {
  return (
    <input
      type="text"
      value={value}
      onChange={preventDefault(stopPropagation(getValue))}
      // onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
      // onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
    />
  );
}

function compose<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

function pipe<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

function pick<K extends string>(props: K) {
  return <O extends Record<K, any>>(obj: O) => obj[props];
}

function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}

const comments = [
  { id: 22, text: "text 1" },
  { id: 32, text: "text 2" },
];

const createFilterBy = (prop: string) => (id: number) =>
  pipe(pick(prop), isEqual(22), cond);
const filterWithId = createFilterBy("id");

const filteredComments = comments.filter(filterWithId(22));

function cond(b: boolean) {
  return !b;
}

const getValueNumber = pipe<number>(
  pick("currentTarget"),
  pick("value"),
  parseInt
);
