import React, { ReactNode } from "react";

interface IItem {
  listElement: ReactNode;
  id: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: "a" | "li" | "button" | "div";
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

const noop = () => {};

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(
        ({ As = "div", listElement, onClick = noop, className, id, href }) => (
          <As
            className={className}
            onClick={() => onClick(id)}
            key={id}
            href={href}
          >
            <a href="">{listElement}</a>
          </As>
        )
      )}
    </>
  );
}
