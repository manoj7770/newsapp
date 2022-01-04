import React from "react";

const NewsItem = (props) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>
        <h1>{props.data.title}</h1>
        <p>{props.data.description}</p>
      </div>

      <img
        src={props.data.urlToImage}
        style={{ height: "200px", width: "300px", objectFit: "cover" }}
      />
    </div>
  );
};

export default NewsItem;