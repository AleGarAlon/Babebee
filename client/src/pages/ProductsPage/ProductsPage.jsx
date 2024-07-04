import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import "./ProductsPage.css";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  console.log("Your category is", category);

  const fetchProducts = async () => {
    if (category !== "Todos") {
      try {
        const res = await axios(
          `${process.env.REACT_APP_SERVER_URL}/product/products/${category}`
        );
        const data = res.data.products;
        setProducts(data);
        console.log("Your products are", products);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios(
          `${process.env.REACT_APP_SERVER_URL}/product/all`
        );
        const data = res.data.allProducts;
        setProducts(data);
        console.log("Your products are", products);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  return (
    <div className="productsPage">
      <h1 className="productsPageTitle">Productos</h1>
      {products ? (
        products.map((product) => (
          <Link
            to={`/item/${product._id}`}
            key={product._id}
            className="productItem"
          >
            <img src={product.image} alt={product.name} />
          </Link>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ProductsPage;
