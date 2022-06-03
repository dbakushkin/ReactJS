import React from "react";
import styles from "./textcontent.css";

interface ITextContentProps {
  children?: React.ReactNode;
}

export function TextContent({ children }: ITextContentProps) {
  return <div className={styles.textContent}>{children}</div>;
}
