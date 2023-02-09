import { DataContext } from "@/hooks/dataContext";
import { FC, useContext } from "react";
import { PostPreview } from "./post";

interface Props {}

export const Content: FC<Props> = ({}) => {
  const { posts } = useContext(DataContext);

  return (
    <section className="content">
      {posts.map((post, index) => (
        <PostPreview key={index} post={post} />
      ))}
    </section>
  );
};
