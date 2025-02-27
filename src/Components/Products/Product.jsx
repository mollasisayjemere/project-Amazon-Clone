
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ProductCard } from './ProductCard';
// import styles from './Product.module.css';   

//  const product = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//         setLoading(false),
//       })
//       .catch((err) => {
//         console.log(err);
//            setLoading(false)
//       });
//   }, []);
  
//   return (
// setLoading?(<Loader/>):

//     <section className={styles.products_container}> 


//       {products.map((product) => (
//         <ProductCard key={product.id} products={product} />
//       ))}
//     </section>
//   );
// };
// export default product


import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../../Components/Products/ProductCard";
import styles from "./Product.module.css";

import Loader from "../Loader/Loader";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading to true

  useEffect(() => {
    const fetchData = async () => {
      // Use async/await for cleaner code
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // Still set loading to false on error
      }
    };

    fetchData(); // Call the async function
  }, []);

  return (
    <>
      {" "}
      {/* Use a React Fragment instead of the ternary operator at the top level*/}
      {loading ? (
        <Loader />
      ) : (
        <section className={styles.products_container}>
          {products?.map((product,i) => (
            <ProductCard key={i} products={product} />
          ))}
        </section>
      )}
    </>
  );
};

export default Product;