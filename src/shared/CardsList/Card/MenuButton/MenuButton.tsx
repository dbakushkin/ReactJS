import React from "react";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { Dropdown } from "../../../Dropdown";
import { MenuIcon } from "../../../Icons";
import { EColors, Text } from "../../../Text";
import styles from "./menubutton.css";
import { MenuListItem } from "./MenuListItem";

export function MenuButton() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
        onOpen={() => console.log("opened")}
        onClose={() => console.log("closed")}
      >
        <div className={styles.dropdown}>
          <MenuListItem postId="123" />
          <button className={styles.closeButton}>
            <Text mobileSize={12} size={14} color={EColors.grey66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
