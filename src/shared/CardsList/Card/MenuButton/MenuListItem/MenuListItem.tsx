import React from "react";
import {
  BlockIcon,
  CommentIcon,
  SaveIcon,
  ShareIcon,
  WarningIcon,
} from "../../../../Icons";
import { EColors, Text } from "../../../../Text";
import styles from "./menulistitem.css";

interface IMenuListItemProps {
  postId: string;
}

export function MenuListItem({ postId }: IMenuListItemProps) {
  return (
    <ul className={styles.menuItemList}>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <CommentIcon />
        <Text size={12} color={EColors.grey99}>
          Комментарии
        </Text>
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem}>
        <ShareIcon />
        <Text size={12} color={EColors.grey99}>
          Поделиться
        </Text>
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <BlockIcon />
        <Text size={12} color={EColors.grey99}>
          Скрыть
        </Text>
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem}>
        <SaveIcon />
        <Text size={12} color={EColors.grey99}>
          Сохранить
        </Text>
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem}>
        <WarningIcon />
        <Text size={12} color={EColors.grey99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
