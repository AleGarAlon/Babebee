import React from "react";
import { Link } from "react-router-dom";
import("./CollectionsPage.css");

function CollectionsPage() {
  return (
    <div className="collectionsPage">
      <h1 className="collectionsPageTitle">Colecciones</h1>
      <div className="collectionsLinks">
        <Link className="collectionImgLink" to="/collections/Bajo el agua">
          <img
            src="https://res.cloudinary.com/dvml0gelc/image/upload/v1717621066/Babebee/Brand/UnderWater_collection_zdedsu.png"
            alt="underwaterImg"
          />
          <h3 className="collectionName">Bajo el agua</h3>
        </Link>
        <Link className="collectionImgLink" to="/collections/El Bosque">
          <img
            src="https://res.cloudinary.com/dvml0gelc/image/upload/v1717621066/Babebee/Brand/The_Woods_collection_b7ii5g.png"
            alt="theWoodsImg"
          />
          <h3 className="collectionName">El Bosque</h3>
        </Link>
        <Link className="collectionImgLink" to="/collections/Mundo Diminuto">
          <img
            src="https://res.cloudinary.com/dvml0gelc/image/upload/v1717621065/Babebee/Brand/Tinyworld_colection_kq6eyl.png"
            alt="tinyWorldImg"
          />
          <h3 className="collectionName">Mundo Diminuto</h3>
        </Link>
      </div>
    </div>
  );
}

export default CollectionsPage;
