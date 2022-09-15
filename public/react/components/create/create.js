import React, { useState } from "react";

export function Create({
  isAddingArticle,
  setIsAddingArticle,
  pages,
  setPages,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");

  const [tags, setTags] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${apiURL}/wiki`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          //CREATE here
          {
            title: title,
            content: content,
            name: authorName,
            email: authorEmail,
            tags: tags,
          }
        ),
      });
      const data = await response.json();
      setPages([...pages, data]);
    } catch (err) {
      console.log(err);
    }
    setTitle("");
    setContent("");
    setAuthorName("");
    setAuthorEmail("");
    setTags("");
  };

  return (
    <>
      <h1>WikiVerse</h1>
      <h2>Add a Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Title"
            type="text"
            aria-label="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Article Content"
            type="text"
            aria-label="article-content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Author Name"
            type="text"
            aria-label="author-name"
            value={authorName}
            onChange={(event) => setAuthorName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Author Email"
            type="email"
            aria-label="author-email"
            value={authorEmail}
            onChange={(event) => setAuthorEmail(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Tags"
            type="text"
            aria-label="tags"
            value={tags}
            onChange={(event) => setTags(event.target.value)}
          />
        </div>
        <button type="submit">Create a Page!</button>
        <button onClick={() => setIsAddingArticle(false)}>Back to List</button>
      </form>
    </>
  );
}
