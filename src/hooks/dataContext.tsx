import { Dispatch, SetStateAction, createContext } from "react";
import { Post } from "@/types/post";
import { Filter } from "@/types/filters";

interface Args {
  filter: string | null;
  posts: Array<Post>;
  search: string;
  setFilter?: Dispatch<SetStateAction<Filter>>;
  setSearch?: Dispatch<SetStateAction<string>>;
}

export const DataContext = createContext<Args>({
  posts: [],
  filter: null,
  search: "",
});
