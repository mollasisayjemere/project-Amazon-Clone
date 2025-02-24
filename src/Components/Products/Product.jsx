
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCard } from './ProductCard';
import styles from './Product.module.css';   

 const product = () => {
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
export default product