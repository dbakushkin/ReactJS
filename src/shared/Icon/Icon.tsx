import React from "react";
import { BlockIcon, IconAnon, WarningIcon } from "../Icons";
import styles from "./icon.css";

export enum EIcons {
  block,
  warning,
}

interface IIconProps {
  name: EIcons;
  size: number;
}

const icons = {
  [EIcons.block]: <BlockIcon />,

  [EIcons.warning]: <WarningIcon />,
};

export function Icon({ name, size }: IIconProps) {
  return <div style={{ width: size, height: size }}>{icons[name]}</div>;
}
