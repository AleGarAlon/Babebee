import React from "react";
import { Link } from "react-router-dom";
import("./CollectionsPage.css");

function CollectionsPage() {
  return (
    <div className="collectionsPage">
      <h1>Collections</h1>

      <Link className="collectionImgLink" to="/collections/underwater">
        <img
          src="https://res.cloudinary.com/dvml0gelc/image/upload/v1717621066/Babebee/Brand/UnderWater_collection_zdedsu.png"
          alt="underwaterImg"
        />
        <h3 className="collectionName">Underwater</h3>
      </Link>
      <Link className="collectionImgLink" to="/collections/theWoods">
        <img
          src="https://res.cloudinary.com/dvml0gelc/image/upload/v1717621066/Babebee/Brand/The_Woods_collection_b7ii5g.png"
          alt="theWoodsImg"
        />
        <h3 className="collectionName">The Woods</h3>
      </Link>
      <Link className="collectionImgLink" to="/collections/tinyWorld">
        <img
          src="https://res.cloudinary.com/dvml0gelc/image/upload/v1717621065/Babebee/Brand/Tinyworld_colection_kq6eyl.png"
          alt="tinyWorldImg"
        />
        <h3 className="collectionName">Tinyworld</h3>
      </Link>
    </div>
  );
}

export default CollectionsPage;
