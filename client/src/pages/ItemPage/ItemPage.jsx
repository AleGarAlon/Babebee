import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import("./ItemPage.css");

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
      console.log("asdasdadsa", res.data);
    } catch (error) {
      console.error("Error fetching the product!", error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {product.name.length > 1 ? (
        <>
          <div className="itemColumns">
            <div className="leftColumn">
              <h2>{product.name}</h2>
              <img className="itemImg" src={product.image} alt="productImage" />

              <div className="itemGallery">
                {product.gallery.image1 ? (
                  <img
                    className="galleryImage"
                    src={product.gallery.image1}
                    alt="image1"
                  />
                ) : (
                  <></>
                )}
                {product.gallery.image2 ? (
                  <img
                    className="galleryImage"
                    src={product.gallery.image2}
                    alt="image2"
                  />
                ) : (
                  <></>
                )}
                {product.gallery.image3 ? (
                  <img
                    className="galleryImage"
                    src={product.gallery.image3}
                    alt="image3"
                  />
                ) : (
                  <></>
                )}
                {product.gallery.image4 ? (
                  <img
                    className="galleryImage"
                    src={product.gallery.image4}
                    alt="image4"
                  />
                ) : (
                  <></>
                )}
                {product.gallery.image5 ? (
                  <img
                    className="galleryImage"
                    src={product.gallery.image5}
                    alt="image5"
                  />
                ) : (
                  <></>
                )}
                {product.gallery.image6 ? (
                  <img
                    className="galleryImage"
                    src={product.gallery.image6}
                    alt="image6"
                  />
                ) : (
                  <></>
                )}
                {product.gallery.image7 ? (
                  <img
                    className="galleryImage"
                    src={product.gallery.image7}
                    alt="image7"
                  />
                ) : (
                  <></>
                )}
                {product.gallery.image8 ? (
                  <img
                    className="galleryImage"
                    src={product.gallery.image8}
                    alt="image8"
                  />
                ) : (
                  <></>
                )}
              </div>
              <p>Descripción: {product.description}</p>
            </div>
            <div className="rightColumn">
              <p>Precio: {product.price}</p>
              <p>Referencia: {product.reference}</p>
              <p>Colección: {product.collection}</p>
              <p>Categorías: {product.category}</p>
              <p>Edad : {product.age}</p>
              <p>¿Personalizable?: {product.custom === false ? "No" : "Si"}</p>
              <p>Stock: {product.stock}</p>
            </div>
          </div>
          <div className="footerInfo">
            <p>Caracteristicas adicionales: {product.info}</p>
            <div className="bundleGallery">
              {" "}
              Combinalo con:
              {product.bundle.bundle1 ? (
                <img
                  className="bundleImage"
                  src={product.bundle.bundle1.image}
                  alt="bundle1Image"
                />
              ) : (
                <></>
              )}
              {product.bundle.bundle2 ? (
                <img
                  className="bundleImage"
                  src={product.bundle.bundle2.image}
                  alt="bundle2Image"
                />
              ) : (
                <></>
              )}
              {product.bundle.bundle3 ? (
                <img
                  className="bundleImage"
                  src={product.bundle.bundle3.image}
                  alt="bundle3Image"
                />
              ) : (
                <></>
              )}
              {product.bundle.bundle4 ? (
                <img
                  className="bundleImage"
                  src={product.bundle.bundle4.image}
                  alt="bundle4Image"
                />
              ) : (
                <></>
              )}
            </div>
          </div>

          <Link to={`/editProduct/${product._id}`}>
            <button>Editar</button>
          </Link>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ItemPage;
