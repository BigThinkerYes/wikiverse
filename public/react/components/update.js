import React, { useState, useEffect } from "react";

export const UpdateArticle = ({
  updatedData,
  submitUpdatedData,
  setIsUpdatingArticle,
  initialInputOptions,
  updatedInputOptions,
  setUpdatedInputOptions,
}) => {
  useEffect(() => {
    initialInputOptions.tags = "";

    if (updatedData.tags.length) {
      updatedData.tags.forEach((tag) => (initialInputOptions.tags += tag.name));
    }

    initialInputOptions.title = updatedData.title;
    initialInputOptions.content = updatedData.content;
    setUpdatedInputOptions({ ...initialInputOptions });
  }, []);

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "12.5%",
          margin: "1.2rem 2.4rem",
        }}
        onSubmit={submitUpdatedData}
      >
        <input
          onChange={(e) =>
            setUpdatedInputOptions({
              ...updatedInputOptions,
              title: e.target.value,
            })
          }
          value={updatedInputOptions.title}
          placeholder="Title"
          type="text"
        />
        <input
          onChange={(e) =>
            setUpdatedInputOptions({
              ...updatedInputOptions,
              content: e.target.value,
            })
          }
          value={updatedInputOptions.content}
          placeholder="Article Content"
        />
        <input
          onChange={(e) =>
            setUpdatedInputOptions({
              ...updatedInputOptions,
              tags: e.target.value,
            })
          }
          value={updatedInputOptions.tags}
          placeholder="Tags"
        />
        <button type="submit">Update Page</button>
        <button onClick={() => setIsUpdatingArticle(false)}>Cancel</button>
      </form>
    </>
  );
};
