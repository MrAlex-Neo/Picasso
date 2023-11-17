// FullPost.js
import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostsByIdQuery } from "../../redux/api";

import "./post.css";

const FullPost = () => {
  const { id } = useParams();

  // Используйте хук useGetPostsByIdQuery для получения данных по id
  const { data, isLoading, isError } = useGetPostsByIdQuery(id);

  // Проверьте, есть ли ошибка
  if (isError) {
    return <div>Error fetching post</div>;
  }

  // Проверьте, загружаются ли данные
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Проверьте, есть ли данные, прежде чем их отображать
  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div className="container">
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default FullPost;
