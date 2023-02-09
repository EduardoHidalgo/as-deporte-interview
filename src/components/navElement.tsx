import { FC, useContext } from "react";
import classNames from "classnames";
import { DataContext } from "@/hooks/dataContext";
import { Filter } from "@/types/filters";

interface Props {
  label: string;
  type: Filter;
}

export const NavElement: FC<Props> = ({ label, type }) => {
  const { filter, setFilter } = useContext(DataContext);

  const filterPosts = () => setFilter && setFilter(type);
  return (
    <li
      className={classNames(
        "nav__element",
        filter === type && "nav_element--active"
      )}
      onClick={filterPosts}
    >
      <a>{label}</a>
    </li>
  );
};
