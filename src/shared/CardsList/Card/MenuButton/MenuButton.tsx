import React from "react";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { Dropdown } from "../../../Dropdown";
import { GenericList } from "../../../GenericList/GenericList";
import { CommentsBlock } from "../CommentsBlock";
import { CommentsButton } from "../CommentsButton";
import { ComplainButton } from "../ComplainButton";
import { HideButton } from "../HideButton";
import { SaveButton } from "../SaveButton";
import { ShareButton } from "../ShareButton";
import styles from "./menubutton.css";

const LIST = [
  {
    listElement: <CommentsBlock />,
    As: "li" as const,
  },
  {
    listElement: <ShareButton />,
    As: "li" as const,
  },
  {
    listElement: <HideButton />,
    As: "li" as const,
  },
  {
    listElement: <SaveButton />,

    As: "li" as const,
  },
  {
    listElement: <ComplainButton />,
    As: "li" as const,
  },
].map(generateId);

export function MenuButton() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <svg
              width="5"
              height="20"
              viewBox="0 0 5 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
              <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
              <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
            </svg>
          </button>
        }
        onOpen={() => console.log("opened")}
        onClose={() => console.log("closed")}
      >
        <ul className={styles.dropdown}>
          <GenericList list={LIST} />
        </ul>
      </Dropdown>
    </div>
  );
}
