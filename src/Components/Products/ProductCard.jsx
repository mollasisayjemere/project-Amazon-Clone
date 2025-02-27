


import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import styles from "./ProductCard.module.css";
import { CurrencyFormater } from "../CurrencyFormater/CurrencyFormater";
import { Link } from "react-router-dom";
import { Datacontext } from "../../DataProvider/DataProvider.jsx";
import { Type } from "../../Utility/ActionType.js"; // Corrected import (uppercase T)

export const ProductCard = ({ products, flex, renderDesc }) => {
  const { image, title, rating, price, description, id } = products;
  // const(count,rate)=rating // Commented out unused code
const { state, dispatch } = useContext(Datacontext); // Corrected syntax

  const AddToCart = () => {
    // Corrected function name
    dispatch({
      type: Type.ADD_TO_BASKET, // Corrected: Assumed ADD_TO_BASKET is the correct action type.  Access it from Type
      item: products, // Corrected: Assuming you want to add the *product* itself
    });
  };

  const truncateDescription = (text, maxLength) => {
    if (!text) return "";

    if (text.length <= maxLength) {
      return text;
    }

    return text.substring(0, maxLength) + "...";
  };

  const truncatedDescription = truncateDescription(description, 50);

  return (
    <div className={styles.productCard}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div className={styles.productTitle}>
        <h2>{title}</h2>
      </div>
      <div className={styles.productRating}>
        {rating && (
          <>
            <Rating
              name="read-only"
              value={rating?.rate} // Use optional chaining
              precision={0.5}
              readOnly
            />
            <small>{rating?.count} ratings</small> {/* Use optional chaining */}
          </>
        )}
      </div>
      <div className={styles.productPrice}>
        <CurrencyFormater value={price} />
      </div>
      <div className={styles.productDescription}>{truncatedDescription}</div>
      <button className={styles.button} onClick={AddToCart}>
        Add to Cart
      </button>{" "}
      {/* Corrected function name */}
    </div>
  );
};