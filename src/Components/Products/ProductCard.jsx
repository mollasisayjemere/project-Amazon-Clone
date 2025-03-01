


// import React, { useContext } from "react";
// import Rating from "@mui/material/Rating";
// import styles from "./ProductCard.module.css";
// import {CurrencyFormater} from '../CurrencyFormater/CurrencyFormater.jsx';
// import { Link } from "react-router-dom";
// import { Datacontext } from "../../DataProvider/DataProvider";
// import { Type } from "../../Utility/ActionType.js"; 

// export const ProductCard = ({ products, flex, renderDesc })  {
//   const { image, title, rating, price, description, id } = products;

// const { state, dispatch } = useContext(Datacontext);  

//   const AddToCart = () => {
  
//     dispatch({
//       type: Type.ADD_TO_BASKET, 
//       item:[image,title,rating,id,price,description]  
//     });
//   };

//   return (
//     <div className={ $`{styles.card_container}` $`{flex}? style.product_flexel`}>
//       <Link to={`/products/${id}`}>
//         <img src={image} alt={title} />
//       </Link>
//       <div className={styles.productTitle}>
//         <h2>{title}</h2>
//       </div>
//       <div className={styles.productRating}>
//         {rating && (
//           <>
//             <Rating
//               name="read-only"
//               value={rating?.rate} // Use optional chaining
//               precision={0.5}
//               readOnly
//             />
//             <small>{rating?.count} ratings</small> {/* Use optional chaining */}
//           </>
//         )}
//       </div>
//       <div className={styles.productPrice}>
//         <CurrencyFormater value={price} />
//       </div>
//       <div className={styles.productDescription}>{truncatedDescription}</div>
//       <button className={styles.button} onClick={AddToCart}>
//         Add to Cart
//       </button>{" "}
//       {/* Corrected function name */}
//     </div>
//   );
// };



import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import styles from "./ProductCard.module.css";
import { CurrencyFormater } from "../CurrencyFormater/CurrencyFormater.jsx";
import { Link } from "react-router-dom";
import { Datacontext } from "../../DataProvider/DataProvider";
import { Type } from "../../Utility/ActionType.js";

export const ProductCard = ({ products, flex, renderDesc,RenderAdd }) => {
  const { image, title, rating, price, description, id } = products;

  const { state, dispatch } = useContext(Datacontext);

  const AddToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: 
      { image, title, rating, id, price, description }, 
    });
  };

  //Truncate Description
  const truncatedDescription =
    description?.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  return (
    <div
      className={`${styles.card_container} ${
        flex ? styles.product_flexel : ""
      }`}
    >
      {" "}
      {/* Corrected template literal and class application */}
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
      (RenderAdd && (
      <button className={styles.button} onClick={AddToCart}>
        Add to Cart
      </button>
      ))
      <div className={styles.productDescription}>{truncatedDescription}</div>
    </div>
  );
};


