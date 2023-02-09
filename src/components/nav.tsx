import { FC } from "react";
import { Filter } from "@/types/filters";
import { NavElement } from "./navElement";
import { Searchbox } from "./searchbox";

interface Props {}

export const Nav: FC<Props> = ({}) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavElement label="Todos" type={Filter.all} />
        <NavElement label="Artículos" type={Filter.article} />
        <NavElement label="Videos" type={Filter.video} />
        <NavElement label="Podcast" type={Filter.podcast} />
      </ul>
      <Searchbox />
    </nav>
  );
};
