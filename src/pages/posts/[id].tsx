import React from 'react';
import { useRouter } from 'next/router';
import PostPage from '../../components/PostPage';

const Post = () => {
  const router = useRouter();
  return <PostPage />;
};

export default Post;
