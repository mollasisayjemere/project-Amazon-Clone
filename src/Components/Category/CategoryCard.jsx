

// import React from "react";
// import styles from "./CategoryCard.module.css";
// import { Link } from "react-router-dom";

// export const CategoryCard = ({ data }) => {
//   return (
//     <div className={styles.Category}>
   
   
//       <Link to={'category/${data.name}'}>
//         <h3>{data.title}</h3> {/* Access title from product prop */}
//         <img src={data?.imgLink} alt={data.title} />
//         <p>Shop now</p>
//       </Link>
//     </div>
//   );
// };

// CategoryCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";

export const CategoryCard = ({ data }) => {
  return (
    <div className={styles.category}>
      <Link to={`/category/${data.name}`}>
      
      <span>  <h2>{data.title}</h2></span>

        <img src={data.imgLink} alt={data.title} />
        <p>Shop Now</p>
      </Link>
    </div>
  );
};