import React from "react";
import NewsItem from "./newsItem";

const NewsList = (props) => {
  return (
    <div>
      {props.news.map((item) => (
        <NewsItem data={item} />
      ))}
    </div>
  );
};

export default NewsList;