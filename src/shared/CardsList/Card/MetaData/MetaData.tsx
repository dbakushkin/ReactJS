import React from "react";
import styles from "./metadata.css";

interface IMetaDataProps {
  children?: React.ReactNode;
}

export function MetaData({ children }: IMetaDataProps) {
  return <div className={styles.metaData}>{children}</div>;
}
