import React, { useState } from "react";
import axios from "axios";

function NewArticlePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleBody = (e) => setBody(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/article/newArticle`,
        { title, body }
      );
    } catch (error) {}
  };

  return (
    <div>
      <h2>Crea una nueva noticia</h2>
      <form onSubmit={handleSubmit}>
        <label>Título</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />
        <label>Cuerpo</label>
        <input type="text" name="body" value={body} onChange={handleBody} />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default NewArticlePage;
