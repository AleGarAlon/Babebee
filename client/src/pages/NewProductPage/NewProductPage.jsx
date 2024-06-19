import React, { useState } from "react";
import axios from "axios";
import("./NewProductPage.css");

function NewProductPage() {
  const [newProduct, setNewProduct] = useState({
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setNewProduct({
        ...newProduct,
        [name]: checked,
      });
    } else if (name.includes("size.")) {
      const [_, sizeKey, sizeField] = name.split(".");
      setNewProduct((prevState) => ({
        ...prevState,
        size: {
          ...prevState.size,
          [sizeKey]: {
            ...prevState.size[sizeKey],
            [sizeField]: value,
          },
        },
      }));
    } else if (name.includes("bundle.") || name.includes("gallery.")) {
      const [, fieldKey] = name.split(".");
      setNewProduct((prevState) => ({
        ...prevState,
        [name.includes("bundle.") ? "bundle" : "gallery"]: {
          ...prevState[name.includes("bundle.") ? "bundle" : "gallery"],
          [fieldKey]: value,
        },
      }));
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    }
  };

  const handleCategoryChange = (e) => {
    const options = e.target.options;
    const selectedCategories = [];
    for (const option of options) {
      if (option.selected) {
        selectedCategories.push(option.value);
      }
    }
    setNewProduct({
      ...newProduct,
      category: selectedCategories,
    });
  };

  const handleAgeChange = (e) => {
    const options = e.target.options;
    const selectedAges = [];
    for (const option of options) {
      if (option.selected) {
        selectedAges.push(option.value);
      }
    }
    setNewProduct({
      ...newProduct,
      age: selectedAges,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sanitizedBundle = {};
    for (const key in newProduct.bundle) {
      sanitizedBundle[key] =
        newProduct.bundle[key] === "" ? null : newProduct.bundle[key];
    }

    const productToSubmit = {
      ...newProduct,
      bundle: sanitizedBundle,
    };

    console.log(productToSubmit);

    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/product/newProduct`,
        productToSubmit
      );
    } catch (error) {
      console.error("There was an error creating the product!", error);
    }
  };

  return (
    <div className="newProductPage">
      <form className="newProductForm" onSubmit={handleSubmit}>
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
            <select
              name="category"
              value={newProduct.category}
              onChange={handleCategoryChange}
              multiple
              required
            >
              <option value="Peluches">Peluches</option>
              <option value="Muñecos y Dudús">Muñecos y Dudús</option>
              <option value="Hora de Jugar">Hora de Jugar</option>
              <option value="Estimulación Sensorial">
                Estimulación Sensorial
              </option>
              <option value="Juguetes Educativos">Juguetes Educativos</option>
              <option value="Accesorios">Accesorios</option>
              <option value="Decoración y Orden">Decoración y Orden</option>
            </select>
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
            Gallery:
            <input
              type="text"
              name="gallery.image1"
              value={newProduct.gallery.image1}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gallery.image2"
              value={newProduct.gallery.image2}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gallery.image3"
              value={newProduct.gallery.image3}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gallery.image4"
              value={newProduct.gallery.image4}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gallery.image5"
              value={newProduct.gallery.image5}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gallery.image6"
              value={newProduct.gallery.image6}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gallery.image7"
              value={newProduct.gallery.image7}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gallery.image8"
              value={newProduct.gallery.image8}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Collection:
            <select
              name="collection"
              value={newProduct.collection}
              onChange={handleChange}
              required
            >
              <option value="Bajo el agua">Bajo el agua</option>
              <option value="El Bosque">El Bosque</option>
              <option value="Mundo Diminuto">Mundo Diminuto</option>
            </select>
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
            <select
              name="age"
              value={newProduct.age}
              onChange={handleAgeChange}
              multiple
            >
              <option value="baby">Baby</option>
              <option value="toddler">Toddler</option>
              <option value="kid">Kid</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Customizable:
            <input
              type="checkbox"
              name="custom"
              checked={newProduct.custom}
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
              value={newProduct.bundle.bundle1}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bundle.bundle2"
              value={newProduct.bundle.bundle2}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bundle.bundle3"
              value={newProduct.bundle.bundle3}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bundle.bundle4"
              value={newProduct.bundle.bundle4}
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
              value={newProduct.externalLink}
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
              value={newProduct.stock}
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
              value={newProduct.info.join(", ")}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  info: e.target.value.split(", "),
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
              value={newProduct.variable.join(", ")}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  variable: e.target.value.split(", "),
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
                  value={newProduct.size[size].length}
                  onChange={handleChange}
                />
              </label>
              <label>
                Height:
                <input
                  type="number"
                  name={`size.${size}.height`}
                  value={newProduct.size[size].height}
                  onChange={handleChange}
                />
              </label>
              <label>
                Width:
                <input
                  type="number"
                  name={`size.${size}.width`}
                  value={newProduct.size[size].width}
                  onChange={handleChange}
                />
              </label>
              <label>
                Weight:
                <input
                  type="number"
                  name={`size.${size}.weight`}
                  value={newProduct.size[size].weight}
                  onChange={handleChange}
                />
              </label>
            </div>
          ))}
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default NewProductPage;
