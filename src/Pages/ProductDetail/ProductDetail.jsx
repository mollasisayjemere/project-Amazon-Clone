import React, { useState, useEffect } from "react";
import Layout from "../../Components/LayOut/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductCard } from "../../Components/Products/ProductCard";
import Loader from "../../Components/Loader/Loader"; 
import styles from "./ProductDetail.module.css";
import producturl from "../../Api/endPoint";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); // Initialize with null
  const [loading, setLoading] = useState(true); // Initialize with true

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${productUrl}/products/${productId}`); // Corrected URL
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        // Corrected catch syntax
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div>Product not found.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ProductCard products={product} flex={true} rendeDecri={true} />
    </Layout>
  );
}

export default ProductDetail;