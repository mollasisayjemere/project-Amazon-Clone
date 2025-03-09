import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import styles from "./ProductCard.module.css";
import CurrencyFormater from "../CurrencyFormater/CurrencyFormater.jsx";
import { Link } from "react-router-dom";
import { DataContext } from "../../DataProvider/DataProvider.jsx";

import { Type } from "../../Utility/ActionType.js";

export const ProductCard = ({ products, flex, renderDesc, RenderAdd }) => {
  const { image, title, rating, price, description, id } = products || {};
  const item = { image, title, rating, price, description, id };

  // const [state, dispatch] = useContext(Datacontext);
  const [state, dispatch] = useContext(DataContext);

  const AddToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      // item: {
      //   image,
      //   title,
      //   rating,
      //   price,
      //   description,
      //   id,
      // },
      item,
    });
  };

  return (
    <div
      className={`${styles.card_container} ${
        flex ? styles.product__flexed : ""
      }`}
    >
      {" "}
      {/* Corrected template literal and class application */}
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <div className={styles.productTitle}>
          <h2>{title}</h2>
        </div>
        {renderDesc && (
          <div style={{ maxWidth: "800px", fontSize: "20px" }}>
            {description}
          </div>
        )}
        <div className={styles.productRating}>
          {rating && (
            <>
              <Rating
                name="read-only"
                value={rating?.rate}
                precision={0.5}
                readOnly
              />
              <small>{rating?.count} ratings</small>
            </>
          )}
        </div>
        <div className={styles.productPrice}>
          <CurrencyFormater value={price} />
        </div>
        {RenderAdd && (
          <button className={styles.button} onClick={AddToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
