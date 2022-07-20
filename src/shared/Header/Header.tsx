import React from "react";
import { EIcons, Icon } from "../Icon";
import styles from "./header.css";
import { SearchBlock } from "./SearchBlock";
import { SortBlock } from "./SortBlock";
import { ThreadTitle } from "./ThreadTitle";

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
      <Icon name={EIcons.block} size={28} />
    </header>
  );
}
