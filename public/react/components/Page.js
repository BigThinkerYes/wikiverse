import React from "react";

export const Page = ({ fetchArticleData, page }) => {
  return (
    <>
      <div className="box">
        <h3 onClick={() => fetchArticleData(page)}>
          {page.title}
          <br /> {page.content} <br />
          {page.status}
        </h3>
      </div>
    </>
  );
};
