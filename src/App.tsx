import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import "./main.global.css";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { GenericList } from "./shared/GenericList/GenericList";
import {
  generateId,
  generateRandomString,
} from "./utils/react/generateRandomIndex";
import { merge } from "./utils/js/merge";
import { Dropdown } from "./shared/Dropdown";

const LIST = [{ text: "some" }, { text: "other some" }, { text: "some" }].map(
  generateId
);

function AppComponent() {
  const [list, setList] = React.useState(LIST);
  const handleItemClick = (id: string) => {
    console.log(id);
    setList(list.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    setList(list.concat(generateId({ text: generateRandomString() })));
  };

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
