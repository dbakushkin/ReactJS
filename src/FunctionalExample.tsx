import React from "react";
import { preventDefault } from "./utils/react/preventDefault";
import { stopPropagation } from "./utils/react/stopPropagation";

const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;
add(1)(1);

const withIdKey = withKey("wq");

function Feed(props: { blocks: IBlockProps[] }) {
  return <div>{props.blocks.map(withIdKey(Block))}</div>;
}

interface IBlockProps {
  title: string;
  id: string;
}

function Block(props: IBlockProps) {
  return <div>{props.title}</div>;
}

function withKey(key?: string) {
  return <E, T extends React.ComponentType<E>>(component: T) =>
    (props: E, index: number) =>
      React.createElement(
        component
        //{ ...props, key: key ? props[key as keyof E] : index },
        //[]
      );
}

function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) =>
    <E extends (t: T[K]) => void>(fn: E) =>
    (e: React.SyntheticEvent<T>) =>
      fn(e.currentTarget[key]);
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()("value");
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()("checked");

function NoStandardLink(props: any) {
  return <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>;
}

interface InputProps {
  onChange: (value: string) => void;
  value: string;
}

function Input({ value, onChange }: InputProps) {
  return (
    <input
      value={value}
      onChange={preventDefault(stopPropagation(getValue(onChange)))}
    />
  );
}
