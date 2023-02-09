import { FC, useContext, useEffect } from "react";
import { DataContext } from "@/hooks/dataContext";

interface Props {}

export const Searchbox: FC<Props> = ({}) => {
  const { search, setSearch } = useContext(DataContext);

  useEffect(() => {
    searchValue();
  }, [search]);

  const searchValue = () => {
    if (!setSearch) return;

    if (search.length <= 0 || /^\s+$/.test(search)) return setSearch("");

    setSearch(search);
  };

  return (
    <input
      className="nav__searchbox"
      onChange={(e) => setSearch && setSearch(e.target.value)}
      placeholder="Busca por nombre"
      type="text"
      value={search}
    />
  );
};
