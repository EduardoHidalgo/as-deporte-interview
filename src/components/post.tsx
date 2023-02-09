import { FC } from "react";
import { Post } from "@/types/post";
import { useRouter } from "next/router";
import { Categories } from "@/types/categories";
import classNames from "classnames";
import { Filter } from "@/types/filters";

interface Props {
  post: Post;
}

export const PostPreview: FC<Props> = ({ post }) => {
  const router = useRouter();

  const formatDate = (postDate: string) => {
    const date = new Date(postDate);
    let month: string = "";

    switch (date.getMonth()) {
      case 0:
        month = "Enero";
        break;
      case 1:
        month = "Febrero";
        break;
      case 2:
        month = "Marzo";
        break;
      case 3:
        month = "Abril";
        break;
      case 4:
        month = "Mayo";
        break;
      case 5:
        month = "Junio";
        break;
      case 6:
        month = "Julio";
        break;
      case 7:
        month = "Agosto";
        break;
      case 8:
        month = "Septiembre";
        break;
      case 9:
        month = "Octumbre";
        break;
      case 10:
        month = "Noviembre";
        break;
      case 11:
        month = "Diciembre";
        break;
    }

    return `${month}, ${date.getDate()} ${date.getFullYear()}`;
  };

  const getCategoryColor = () => {
    const category = post.category as Categories;

    switch (category) {
      case Categories.health:
        return "content__post-category--purple";
      case Categories.news:
        return "content__post-category--blue";
      case Categories.sportsTourism:
        return "content__post-category--yellow";
      case Categories.trends:
        return "content__post-category--red";
      case Categories.motivation:
      default:
        return "";
    }
  };

  const goToArticle = () => {
    router.push("/article");
  };

  return (
    <article className="content__post" onClick={goToArticle}>
      <div className="content__post-image-container">
        <img
          className="content__post-image"
          alt={post.title}
          src={post.image}
        />
        {post.type === Filter.podcast && (
          <div className="content__post-icon">
            <div className={"content__post-podcast"} />
          </div>
        )}
        {post.type === Filter.video && (
          <div className="content__post-icon">
            <div className={"content__post-play"} />
          </div>
        )}
      </div>
      <span
        className={classNames("content__post-category", getCategoryColor())}
      >
        {post.category}
      </span>
      <h2 className="content__post-title">{post.title}</h2>
      <span className="content__post-description">{post.description}</span>
      <span className="content__post-date">{formatDate(post.date)}</span>
    </article>
  );
};
