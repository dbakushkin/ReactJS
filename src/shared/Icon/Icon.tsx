import React from "react";
import { BlockIcon, IconAnon } from "../Icons";
import styles from "./icon.css";

export enum EIcons {
  block,
  anon,
}

type ISizes =
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 40
  | 50;

interface IIconProps {
  name: EIcons;
  size: ISizes;
}

export function Icon({ name, size }: IIconProps) {
  if (name === EIcons.block) {
    return (
      <div style={{ width: size, height: size }}>
        <BlockIcon size={size} />
      </div>
    );
  } else if (name === EIcons.anon) {
    return (
      <div style={{ width: size, height: size }}>
        <IconAnon size={size} />
      </div>
    );
  } else {
    return null;
  }
}
