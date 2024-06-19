import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditProductPage.css";

function EditProductPage() {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    gallery: {
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      image6: "",
      image7: "",
      image8: "",
    },
    description: "",
    price: "",
    size: {
      S: { length: "", height: "", width: "", weight: "" },
      M: { length: "", height: "", width: "", weight: "" },
      L: { length: "", height: "", width: "", weight: "" },
      Única: { length: "", height: "", width: "", weight: "" },
    },
    category: [],
    collection: "",
    reference: "",
    age: [],
    custom: false,
    bundle: { bundle1: "", bundle2: "", bundle3: "", bundle4: "" },
    externalLink: "",
    stock: 0,
    info: [],
    variable: [],
  });

  const { id } = useParams();
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

    if (
      name.includes("size.") ||
      name.includes("bundle.") ||
      name.includes("gallery.")
    ) {
      const [, key, subKey] = name.split(".");
      setProduct((prevProduct) => ({
        ...prevProduct,
        [key]: {
          ...prevProduct[key],
          [subKey]: value,
        },
      }));
    } else if (
      name === "category" ||
      name === "age" ||
      name === "info" ||
      name === "variable"
    ) {
      setProduct({
        ...product,
        [name]: value.split(",").map((item) => item.trim()),
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
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
              value={product.category.join(", ")}
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
            Gallery:
            <input
              type="text"
              name="gallery.image1"
              value={product.gallery.image1}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gallery.image2"
              value={product.gallery.image2}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gallery.image3"
              value={product.gallery.image3}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gallery.image4"
              value={product.gallery.image4}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gallery.image5"
              value={product.gallery.image5}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gallery.image6"
              value={product.gallery.image6}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gallery.image7"
              value={product.gallery.image7}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gallery.image8"
              value={product.gallery.image8}
              onChange={handleChange}
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
              value={product.age.join(", ")}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Customizable:
            <input
              type="checkbox"
              name="custom"
              checked={product.custom}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Bundle:
            <input
              type="text"
              name="bundle.bundle1"
              value={product.bundle.bundle1}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bundle.bundle2"
              value={product.bundle.bundle2}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bundle.bundle3"
              value={product.bundle.bundle3}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bundle.bundle4"
              value={product.bundle.bundle4}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            External Link:
            <input
              type="text"
              name="externalLink"
              value={product.externalLink}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Stock:
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Info:
            <input
              type="text"
              name="info"
              value={product.info.join(", ")}
              onChange={(e) =>
                handleChange({
                  target: { name: "info", value: e.target.value },
                })
              }
            />
          </label>
        </div>
        <div>
          <label>
            Variable (Colors):
            <input
              type="text"
              name="variable"
              value={product.variable.join(", ")}
              onChange={(e) =>
                handleChange({
                  target: { name: "variable", value: e.target.value },
                })
              }
            />
          </label>
        </div>
        <div>
          <h3>Sizes:</h3>
          {["S", "M", "L", "Única"].map((size) => (
            <div key={size}>
              <h4>{size}</h4>
              <label>
                Length:
                <input
                  type="number"
                  name={`size.${size}.length`}
                  value={product.size[size].length}
                  onChange={handleChange}
                />
              </label>
              <label>
                Height:
                <input
                  type="number"
                  name={`size.${size}.height`}
                  value={product.size[size].height}
                  onChange={handleChange}
                />
              </label>
              <label>
                Width:
                <input
                  type="number"
                  name={`size.${size}.width`}
                  value={product.size[size].width}
                  onChange={handleChange}
                />
              </label>
              <label>
                Weight:
                <input
                  type="number"
                  name={`size.${size}.weight`}
                  value={product.size[size].weight}
                  onChange={handleChange}
                />
              </label>
            </div>
          ))}
        </div>
        <button className="editButton" type="submit">
          Update Product
        </button>
      </form>
    </>
  );
}

export default EditProductPage;
