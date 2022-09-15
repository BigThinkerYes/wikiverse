import React from "react";

export const Page = ({ fetchArticleData, page }) => {
  return (
    <>
      <div className="box">
        <h3 onClick={() => fetchArticleData(page)}>
          <strong>{page.title}</strong>
        </h3>
        <br />{" "}
        <p>
          <strong>{page.content}</strong>
        </p>{" "}
        <br />
        <p>
          <strong>{page.status}</strong>
        </p>
      </div>
    </>
  );
};
