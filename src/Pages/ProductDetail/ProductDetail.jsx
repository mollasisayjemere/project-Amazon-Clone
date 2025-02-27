


import React, { useEffect, useState } from "react";
// import classes from "./productDetail.module.css";
import LayOut from "../../Components/LayOut/LayOut/";
import { useParams } from "react-router-dom";
import axios from "axios";
import  productUrl  from "../../Api/endPoint";
import{ ProductCard} from '../../Components/Products/ProductCard'
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setError(err); // Clear any previous errors

      try {
        // const response = await axios.get(`${productUrl}/products/${productId}`);


        const response = await axios.get(`${productUrl}/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err); 
      
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]); // Add productId to the dependency array

  if (isLoading) {
    return (
      <LayOut>
        <Loader />
      </LayOut>
    );
  }

  if (error) {
    return (
      <LayOut>
        <div>Error loading product. Please try again later.</div>
      </LayOut>
    );
  }

  if (!product) {
    return (
      <LayOut>
        <div>Product not found.</div>
      </LayOut>
    );
  }

  return (
    <LayOut>
      <ProductCard product = {product} 
        data={[product]} // Wrap product in an array
        flex={true}
        renderDesc={true}
        renderAdd={true}
      />

  
    </LayOut>
  );
}

export default ProductDetail;