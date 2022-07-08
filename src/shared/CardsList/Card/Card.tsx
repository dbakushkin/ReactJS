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
import { Dropdown } from "../../Dropdown";
import { GenericList } from "../../GenericList/GenericList";
import { generateId } from "../../../utils/react/generateRandomIndex";

const LIST = [
  { As: "a" as const, text: "Комментарии" },
  { As: "a" as const, text: "Поделиться" },
  { As: "a" as const, text: "Скрыть" },
  { As: "a" as const, text: "Сохранить" },
  { As: "a" as const, text: "Пожаловаться" },
].map(generateId);

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
      <Dropdown
        onOpen={() => console.log("opened")}
        onClose={() => console.log("closed")}
        button={<MenuButton />}
      >
        {" "}
        <GenericList list={LIST} />
      </Dropdown>
      <Controls>
        <KarmaCounter />
        <CommentsButton />
        <ActionsButtons />
      </Controls>
    </li>
  );
}
