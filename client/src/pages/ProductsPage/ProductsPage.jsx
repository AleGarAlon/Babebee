import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import "./ProductsPage.css";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios(`${process.env.REACT_APP_SERVER_URL}/product/all`);
    const data = res.data.allProducts;
    console.log(res.data);
    setProducts(data);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="productsPage">
      <div>ProductsPage</div>
      {products ? (
        products.map((product) => (
          <Link to={`/item/${product._id}`} key={product._id}>
            <div className="productPageProduct">
              <h2>{product.name}</h2>
              <img src={product.image} alt="productImage" />
              <p>Price: {product.price}</p>
            </div>
          </Link>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ProductsPage;
