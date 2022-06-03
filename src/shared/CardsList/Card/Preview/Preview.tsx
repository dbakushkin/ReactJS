import React from "react";
import styles from "./preview.css";

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/users/4878986/screenshots/18388393/media/1ee491ec153c65d9bd485c19237a0998.png?compress=1&resize=1200x900&vertical=top"
        alt=""
      />
    </div>
  );
}
