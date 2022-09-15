import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { Create } from "./create/create";

import dataJs from "../../../../wikiverse/server/seedData";
// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { Update } from "./update/update";
/////////////////////////////////////////////////
const initialInputOptions = {
  title: "",
  content: "",
  name: "",
  email: "",
  tags: "",
};
///////////////////////////////////////
const updateArticleOptions = {
  title: "title",
  content: "content",
  name: "name",
  email: "email",
  tags: "tags",
};
///////////////////////////////////////
export const App = () => {
  const [pages, setPages] = useState([]);
  const [data, setData] = useState(null);
  const [isAddingArticle, setIsAddingArticle] = useState(false);
  /////////
  const [inputOptions, setInputOptions] = useState(initialInputOptions);

  const [updateArticle, setIsUpdatingArticle] = useState(updateArticleOptions);
  //////////
  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }
  // ////////////////////////////////////////////////
  async function fetchArticleData(page) {
    try {
      const res = await fetch(`${apiURL}/wiki/${page.slug}`);
      const articleData = await res.json();
      setData(articleData);
    } catch (err) {
      console.log("An error has occurred!", err);
    }
  }
  //////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  async function submitHandler(e) {
    e.preventDefault();
    const articleData = inputOptions;
    const res = await fetch(`${apiURL}/wiki`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleData),
    });
    const data = await res.json();

    await fetchPages();
    setIsAddingArticle(false);
    resetFields();
  }
  ///////////////////////////////////////////////////
  async function submitHandler(e) {
    e.preventDefault();
    const articleUpdate = updateArticle;
  }
  ///////////////////////////////////////////////////
  function resetFields() {
    setInputOptions(initialInputOptions);
  }
  ////////////////////////////////////////////////////

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <div className="Main">
      {isAddingArticle ? (
        // shows output to screen
        <Create
          inputOptions={inputOptions}
          setInputOptions={setInputOptions}
          submitHandler={submitHandler}
        />
      ) : (
        <>
          {data ? (
            <Update fetchPages={fetchPages} setData={setData} data={data} />
          ) : (
            <main>
              <h1>WikiVerse</h1>
              <h2>An interesting 📚</h2>
              {/*  */}
              <PagesList fetchArticleData={fetchArticleData} pages={pages} />
              <button onClick={() => setIsAddingArticle(true)}>
                Create a new page
              </button>
              {/*  */}
              <button onClick={() => setIsUpdatingArticle(true)}>
                Update Article
              </button>
              <button onClick={() => setIsAddingArticle(true)}>View All</button>
            </main>
          )}
        </>
      )}
    </div>
  );
};
