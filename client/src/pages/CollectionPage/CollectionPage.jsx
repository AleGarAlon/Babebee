import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import "./CollectionPage.css";

function CollectionPage() {
  let { collection } = useParams();
  const [products, setProducts] = useState([]);

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
  }, [collection]);

  const createRows = () => {
    const rows = [];
    for (let i = 0; i < products.length; i += 4) {
      rows.push(products.slice(i, i + 4));
    }
    return rows;
  };

  const rows = createRows();

  return (
    <div className="collectionPage">
      <h1 className="collectionPageTitle">{collection}</h1>

      {products.length > 0 ? (
        rows.map((row, rowIndex) => (
          <div
            className={`collectionRow ${rowIndex % 2 === 1 ? "offset" : ""}`}
            key={rowIndex}
          >
            {row.map((product) => (
              <Link
                to={`/item/${product._id}`}
                key={product._id}
                className="collectionItem"
              >
                <img src={product.image} alt="productImage" />
              </Link>
            ))}
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default CollectionPage;
