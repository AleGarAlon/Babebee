import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import "./Article.css";

function Article() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/article/allArticles`
    );
    console.log(res.data);
    setArticles(res.data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      {articles.length > 0 ? (
        articles.reverse().map((article) => (
          <div key={article._id} className="articleComponet">
            <h3 className="articleTitle">{article.title}</h3>
            <p className="articleBody">{article.body}</p>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Article;
