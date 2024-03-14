import React from "react";
import { Post } from "../utils/api";

import styles from "@/styles/PostItem.module.css";
import Link from "next/link";

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <div className={styles["post-item"]}>
      <h2>
        <b>Заголовок: </b>
        {post.title}
      </h2>
      <p>
        <b>Текст: </b>
        {post.body}
      </p>
      <Link href="/">
        <button>Назад</button>
      </Link>
    </div>
  );
};

export default PostItem;
