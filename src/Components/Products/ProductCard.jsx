import React from "react";
import Rating from "@mui/material/Rating";
import styles from "./ProductCard.module.css";
import { CurrencyFormater } from "../CurrencyFormater/CurrencyFormater";
import { Link } from "react-router-dom";

export const ProductCard = ({ products, flex, renderDesc }) => {
  const { image, title, rating, price, description, id } = products;

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
      <Link to={`/product/${id}`}>
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
      <button className={styles.button}>Add to Card</button>
    </div>
  );
};