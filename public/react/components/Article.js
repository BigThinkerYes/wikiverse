import React from "react";
import apiURL from "../api";

export const Article = ({ props, setArticle }) => {
  async function handleDelete(event) {
    const response = await fetch(`${apiURL}/wiki/${props.slug}`, {
      method: "DELETE",
    });
    const data = await response.json();
    setArticle(null);
  }

  return (
    <>
      <h3>Title: {props.title}</h3>
      <h3>Author: {props.author.name}</h3>
      <h3>Content: {props.content}</h3>
      <h3>
        Tags:
        {props.tags.map((tag, idx) => (
          <p key={idx}>{tag.name}</p>
        ))}
      </h3>
      <h3>Date Published: {props.createdAt}</h3>
      <button onClick={() => setArticle(null)}>Back to List</button>
      <button onClick={() => handleDelete(props.slug)}>DELETE</button>
    </>
  );
};
