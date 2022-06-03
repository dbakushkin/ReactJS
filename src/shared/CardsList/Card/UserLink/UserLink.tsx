import React from "react";
import styles from "./userlink.css";

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img
        src="https://cdn.dribbble.com/users/24078/avatars/normal/b995a47ef10412a6054d3133b0f009a8.jpg?1481552676"
        alt=""
        className={styles.avatar}
      />
      <a className={styles.username} href="#user-url">
        Дмитрий Гришин
      </a>
    </div>
  );
}
