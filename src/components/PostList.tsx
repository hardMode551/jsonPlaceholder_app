import React from "react";
import Link from "next/link";
import { Post } from "../utils/api";

import styles from "../styles/Post.module.css";

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className={styles["post-container"]}>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
