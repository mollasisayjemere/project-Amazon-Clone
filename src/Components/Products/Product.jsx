
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ProductCard } from "./ProductCard";

// export const Product = () => {
//   const [products, setProducts] = useState([]); // Corrected state updater

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         console.log(res);
//         const singleProduct = res.data; // Corrected state setting
//         setProducts(singleProduct); // Corrected state setting
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []); // Dependency array.  Empty array means it runs only once on mount

//   return (
//     <section>
//       {products?.map(
//         (
//           productInfo,
//           index // Corrected mapping with proper syntax
//         ) => (
//           <ProductCard key={index} products={productInfo} /> // Corrected passing product info
//         )
//       )}
//     </section>
//   );
// };

// Product.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCard } from './ProductCard';
import styles from './Product.module.css';  // Import the CSS Module

export const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className={styles.products_container}> {/* Use styles.products_container */}
      {products.map((product) => (
        <ProductCard key={product.id} products={product} />
      ))}
    </section>
  );
};