import React from "react";

import apiURL from "../../api";

export function Update({
  article,
  setArticle,
  pages,
  setPages,
  isUpdatingArticle,
  setIsUpdatingArticle,
}) {
  const day = new Date(article.createdAt).getUTCDate();
  const month = new Date(article.createdAt).getUTCMonth();
  const year = new Date(article.createdAt).getUTCFullYear();

  const handleClick = async () => {
    window.location.reload(false);
    const response = await fetch(`${apiURL}/wiki/${article.slug}`, {
      method: "DELETE",
    });
    const data = await response.json();
    const res = await fetch(`${apiURL}/wiki`);
    const pagesData = await res.json();
    setPages(pagesData);
  };

  return (
    <>
      {isUpdatingArticle ? (
        <div>
          <Update
            isUpdatingArticle={isUpdatingArticle}
            setIsUpdatingArticle={setIsUpdatingArticle}
            pages={pages}
            setPages={setPages}
            setArticle={setArticle}
            article={article}
          />
        </div>
      ) : (
        <div className="article">
          <h2>{article.title}</h2>
          <br></br>
          <div>
            <strong>Author: </strong>
            {article.author.name}
          </div>
          <br></br>
          <div>
            <strong>Published: </strong>
            {`${month + 1}/${day}/${year}`}
          </div>
          <br></br>
          <div>{article.content}</div>
          <br></br>
          <div>
            <strong>Tags: </strong>
            {article.tags.map((tag, idx) => (
              <div key={idx}>{tag.name}</div>
            ))}
          </div>
          <br></br>
          <button onClick={handleClick}>DELETE</button>
          <br></br>
          <button onClick={() => setIsUpdatingArticle(true)}>
            Update Page
          </button>
          <br></br>
          <button onClick={() => setArticle(null)}>Back to List</button>
        </div>
      )}
    </>
  );
}
