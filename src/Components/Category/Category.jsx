

// import React from "react";
// import { CategoryCard } from "./CategoryCard";
// import Infos from "./CategoryInfo"; // Import the Infos data

// export const Category = () => {
//   return (
//     <>
//       {Infos?.map((info) => (
//         <CategoryCard key={info.id} data={info} />
//       ))}
//     </>
//   );
// };


import React from "react";
import { CategoryCard } from "./CategoryCard";
import Infos from "./CategoryInfo";
import styles from "./Category.module.css"; // Import CSS Module for Category

export const Category = () => {
  return (
    <div className={styles.categoryContainer}>
      {" "}
      {/* Apply the container class */}
      {Infos?.map((info) => (
        <CategoryCard key={info.id} data={info} />
      ))}
    </div>
  );
};