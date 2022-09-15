import React, { useState } from "react";
import apiURL from "../api";

export const Form = ({ setArticle }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tags, setTags] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(`${apiURL}/wiki/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, name, email, tags }),
    });

    const data = await response.json();
    setArticle(null);
  }

  return (
    <>
      <h2>Add a Page</h2>
      <form>
        <div>
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={content}
            placeholder="Article Content"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Author Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={email}
            placeholder="Author Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={tags}
            placeholder="Tags"
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => handleSubmit}>Create Page</button>
          <button onClick={() => handleSubmit}>Main Page</button>
        </div>
      </form>
    </>
  );
};
