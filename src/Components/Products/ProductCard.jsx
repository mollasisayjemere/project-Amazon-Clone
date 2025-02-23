
import React from "react";
import Rating from "@mui/material/Rating";
import styles from "./ProductCard.module.css";
import { CurrencyFormater } from "../CurrencyFormater/CurrencyFormater"; // Correct import

export const ProductCard = ({ products }) => {
  const { image, title, rating, price, description } = products;

  const truncateDescription = (text, maxLength) => {
    if (!text) return ""; // Handle cases where description is null/undefined

    if (text.length <= maxLength) {
      return text;
    }

    return text.substring(0, maxLength) + "..."; // Truncate and add ellipsis
  };

  const truncatedDescription = truncateDescription(description, 50); // Truncate at 100 characters

  return (
    <div className={styles.productCard}>
      <a href="">
        <img src={image} alt={title} />
      </a>
      <div className={styles.productTitle}>
        <h2>{title}</h2>
      </div>
      <div className={styles.productRating}>
        {rating && (
          <>
            <Rating
              name="read-only"
              value={rating.rate}
              precision={0.5}
              readOnly
            />
            <small>{rating.count} ratings</small>
          </>
        )}
      </div>
      <div className={styles.productPrice}>
        <CurrencyFormater value={price} /> {/* This is what you want */}
      </div>
      <div className={styles.productDescription}>{truncatedDescription}</div>{" "}
      {/* Use truncatedDescription */}
      <button className={styles.button}>Add to Card</button>
    </div>
  );
};
