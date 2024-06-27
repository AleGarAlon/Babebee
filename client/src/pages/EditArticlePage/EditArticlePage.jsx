import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({ title: "", body: "" });

  const fetchArticle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/article/${id}`
      );
      console.log(res.data);
      setArticle(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTitle = (e) => setArticle({ ...article, title: e.target.value });
  const handleBody = (e) => setArticle({ ...article, body: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/article/${id}`,
        article
      );
      navigate("/articles");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <div>
      <h2>Edita la noticia</h2>
      <form onSubmit={handleSubmit}>
        <label>Título</label>
        <input
          type="text"
          name="title"
          value={article.title}
          onChange={handleTitle}
        />
        <label>Cuerpo</label>
        <input
          type="text"
          name="body"
          value={article.body}
          onChange={handleBody}
        />
        <button type="submit">Editar</button>
      </form>
    </div>
  );
}

export default EditArticlePage;
