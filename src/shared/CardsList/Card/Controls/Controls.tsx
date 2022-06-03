import React from "react";
import styles from "./controls.css";

interface IControlsProps {
  children?: React.ReactNode;
}

export function Controls({ children }: IControlsProps) {
  return <div className={styles.controls}>{children}</div>;
}
