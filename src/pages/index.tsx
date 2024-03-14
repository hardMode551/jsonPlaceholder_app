import React, { useEffect, useState } from "react";
import axios from "axios";
import PostList from "../components/PostList";
import { Post } from "../utils/api";
import Skeleton from "@/components/Skeleton";

import styles from "../styles/Home.module.css";

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  useEffect(() => {
    const start = Math.max(1, page - 2);
    const end = Math.min(totalPages, start + 4);
    setVisiblePages(
      Array.from({ length: end - start + 1 }, (_, i) => start + i)
    );
  }, [page, totalPages]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      const totalCount = response.headers["x-total-count"];
      setTotalPages(Math.ceil(Number(totalCount) / 10));
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const renderPagination = () => {
    const firstPageButton = (
      <button
        key="first"
        onClick={() => handlePageChange(1)}
        disabled={page === 1}
      >
        {"<<"}
      </button>
    );

    const lastPageButton = (
      <button
        key="last"
        onClick={() => handlePageChange(totalPages)}
        disabled={page === totalPages}
      >
        {">>"}
      </button>
    );

    const pages = visiblePages.map((pageNumber) => (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        disabled={page === pageNumber}
      >
        {pageNumber}
      </button>
    ));

    return (
      <div className={styles.pagination}>
        {firstPageButton}
        <button onClick={handlePrevPage} disabled={page === 1}>
          {"<"}
        </button>
        {pages}
        <button onClick={handleNextPage} disabled={page === totalPages}>
          {">"}
        </button>
        {lastPageButton}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h1>Посты</h1>
      {posts && posts.length > 0 ? <PostList posts={posts} /> : <Skeleton />}
      <div>{renderPagination()}</div>
    </div>
  );
};

export default HomePage;
