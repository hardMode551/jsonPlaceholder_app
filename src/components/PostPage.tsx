import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import { Post } from "../utils/api";
import PostItem from "./PostItem";
import SkeletonPost from "./SkeletonPost";

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id && typeof id === "string") {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          setPost(response.data);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
        });
    }
  }, [id]);

  return <div>{post ? <PostItem post={post} /> : <SkeletonPost />}</div>;
};

export default PostPage;
