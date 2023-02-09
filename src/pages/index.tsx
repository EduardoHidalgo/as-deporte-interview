import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UrlObject } from "url";

import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { Nav } from "@/components/nav";
import { DataContext } from "@/hooks/dataContext";
import { Post } from "@/types/post";
import { Filter } from "@/types/filters";
import json from "@/data/posts.json";

export default function Home() {
  const allPosts = json as Array<Post>;

  const router = useRouter();
  const { query } = router;

  const [posts, setPosts] = useState<Array<Post>>(allPosts);
  const [filter, setFilter] = useState<Filter>(
    query["filter"] ? (String(query["filter"]) as Filter) : Filter.all
  );
  const [search, setSearch] = useState<string>(
    query["search"] ? String(query["search"]) : ""
  );

  useEffect(() => searchPosts(), [search]);

  useEffect(() => filterPosts(), [filter]);

  const searchPosts = () => {
    if (search === "" || search.length == 0) return setPosts(allPosts);

    setPosts(
      allPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase())
      )
    );
    setRouteParams();
  };

  const filterPosts = () => {
    if (filter == Filter.all) return setPosts(allPosts);

    setPosts(allPosts.filter((p) => p.type === filter));
    setRouteParams();
  };

  const setRouteParams = () => {
    const url: UrlObject = { pathname: "/", query: { filter, search } };
    router.push(url, url, { shallow: true });
  };

  return (
    <DataContext.Provider
      value={{ filter, posts, search, setFilter, setSearch }}
    >
      <Header />
      <Nav />
      <Content />
    </DataContext.Provider>
  );
}
