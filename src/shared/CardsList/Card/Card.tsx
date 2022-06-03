import React from "react";
import { ActionsButtons } from "./ActionsButtons";
import styles from "./card.css";
import { CommentsButton } from "./CommentsButton";
import { Controls } from "./Controls";
import { CreatedAt } from "./CreatedAt";
import { KarmaCounter } from "./KarmaCounter";
import { MenuButton } from "./MenuButton";
import { Preview } from "./Preview";
import { Title } from "./Title";
import { UserLink } from "./UserLink";
import { TextContent } from "./TextContent";
import { MetaData } from "./MetaData";

export function Card() {
  return (
    <li className={styles.card}>
      <TextContent>
        <MetaData>
          <UserLink />
          <CreatedAt />
        </MetaData>
        <Title />
      </TextContent>
      <Preview />
      <MenuButton />
      <Controls>
        <KarmaCounter />
        <CommentsButton />
        <ActionsButtons />
      </Controls>
    </li>
  );
}
