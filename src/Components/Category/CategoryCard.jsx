

import React from "react";
import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ data }) => {
  return (
    <div className="styles.Category">
      <a href="#">
        <h1>{data.title}</h1>
        <img src={data.imgLink} alt={data.title} />
        <p>Shop Now</p>
      </a>
    </div>
  );
};