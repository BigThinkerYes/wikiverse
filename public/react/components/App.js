import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { Article } from "./Article";
import { Form } from "./Form";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [article, setArticle] = useState(null);
  const [isAddingArticle, setIsAddingArticle] = useState(false);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchArticleData(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`);
      const articleData = await response.json();
      setArticle(articleData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <main>
      <h1>WikiVerse</h1>
      {article ? (
        <Article props={article} setArticle={setArticle} />
      ) : isAddingArticle ? (
        <Form setArticle={setArticle} />
      ) : (
        <div>
          <h2>An interesting 📚</h2>
          <PagesList pages={pages} handleClick={fetchArticleData} />
          <button onClick={() => setIsAddingArticle(true)}>Add Article</button>
        </div>
      )}
    </main>
  );
};
