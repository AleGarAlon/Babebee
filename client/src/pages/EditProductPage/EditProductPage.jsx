import React, { useState, useEffect } from "react";
import { redirect, useParams } from "react-router-dom";
import axios from "axios";

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
      redirect(`/item/${id}`);
    } catch (error) {
      console.error("There was an error updating the product!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder={product.name}
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
            placeholder={product.description}
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
            placeholder={product.price}
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
            placeholder={product.category}
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
            placeholder={product.image}
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
            placeholder={product.collection}
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
            placeholder={product.reference}
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
            placeholder={product.age}
            required
          />
        </label>
      </div>
      <button type="submit">Update Product</button>
    </form>
  );
}

export default EditProductPage;
