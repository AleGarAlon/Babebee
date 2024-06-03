import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ItemPage() {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    category: "",
    collection: "",
    reference: "",
    age: "",
  });
  const { id } = useParams();

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/product/${id}`
      );
      setProduct(res.data);
      console.log(product);
    } catch (error) {
      console.error("Error fetching the product!", error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <h2>{product.name}</h2>
      <img src={product.img} alt="productImage" />
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <p>Collection: {product.collection}</p>
      <p>Category: {product.category}</p>
      <Link to={`/editProduct/${product._id}`}>
        <button>Edit</button>
      </Link>
    </>
  );
}

export default ItemPage;
