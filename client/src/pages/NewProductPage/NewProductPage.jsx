import React, { useState } from "react";
import axios from "axios";

function NewProductPage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    category: "",
    collection: "",
    reference: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/product/newProduct`,
        newProduct
      );
    } catch (error) {
      console.error("There was an error creating the product!", error);
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
            value={newProduct.name}
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
            value={newProduct.description}
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
            value={newProduct.price}
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
            value={newProduct.category}
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
            value={newProduct.image}
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
            value={newProduct.collection}
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
            value={newProduct.reference}
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
            value={newProduct.age}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
}

export default NewProductPage;
