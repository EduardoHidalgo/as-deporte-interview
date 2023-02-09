import { Filter } from "./filters";

export interface Post {
  category: string;
  date: string;
  description: string;
  image: string;
  title: string;
  type: Filter;
}
