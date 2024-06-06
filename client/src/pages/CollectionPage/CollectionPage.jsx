import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import "./CollectionPage.css";

function CollectionPage() {
  const { collection } = useParams();
  const [products, setProducts] = useState([""]);

  const fetchCollection = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/product/collections/${collection}`
      );
      setProducts(res.data);
      console.log("Your products are", products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCollection();
  }, []);

  return (
    <div className="collectionPage">
      <h1 className="collectionPageTitle">{collection}</h1>

      {products ? (
        <div className="collectionMap">
          {products.map((product) => (
            <Link
              to={`/item/${product._id}`}
              key={product._id}
              className="collectionItem"
            >
              <h2>{product.name}</h2>
              <img src={product.image} alt="productImage" />
              <p>Price: {product.price}</p>
            </Link>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default CollectionPage;
