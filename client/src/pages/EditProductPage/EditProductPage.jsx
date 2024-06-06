import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditProductPage.css";

function EditProductPage() {
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
  console.log("ususususususuUUSUUSUSUSUSU", id);
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/product/${id}`
      );
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching the product!", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/product/editProduct/${id}`,
        product
      );
      navigate(`/item/${id}`);
    } catch (error) {
      console.error("There was an error updating the product!", error);
    }
  };

  return (
    <>
      <h2 className="editProductTitle">Edit Product Page</h2>

      <form className="editForm" onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="text"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Image:
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Collection:
            <input
              type="text"
              name="collection"
              value={product.collection}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Reference:
            <input
              type="text"
              name="reference"
              value={product.reference}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={product.age}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button className="editButton" type="submit">
          Update Product
        </button>
      </form>
    </>
  );
}

export default EditProductPage;
