

import React from "react";
import { CategoryCard } from "./CategoryCard";
import Infos from "./CategoryInfo";
import styles from "./Category.module.css";

function Category() {
  // Corrected component definition
  return (
    <div className={styles.category__container}>
      {Infos?.map((info) => (
        <CategoryCard key={info.id} data={info} />
      ))}
    </div>
  );
}

export default Category;