import React from "react";
import { Page } from "./Page";

export const PagesList = ({ fetchArticleData, pages }) => {
  return (
    <>
      {pages.map((page, idx) => {
        return (
          <Page fetchArticleData={fetchArticleData} page={page} key={idx} />
        );
      })}
    </>
  );
};
