import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

function AllArticlesPage() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/article/allArticles`
    );
    console.log(res.data);
    setArticles(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/article/${id}`);
    setArticles((prevArticles) =>
      prevArticles.filter((article) => article._id !== id)
    );
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Noticias</h1>

      {articles ? (
        articles.reverse().map((article) => (
          <div key={article._id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <Link to={`/editArticle/${article._id}`}>
              <button>Editar</button>
            </Link>
            <button onClick={() => handleDelete(article._id)}>Borrar</button>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default AllArticlesPage;
