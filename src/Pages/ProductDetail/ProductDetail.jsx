


import React, { useEffect, useState } from "react";
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
 

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
   

      try {
     
        const response = await axios.get(`${productUrl}/products/${productId}`);
        setProduct(response.data);
        setIsLoading(false)
      } catch (err) {
        console.error("Error fetching product:", err);
      
      setIsLoading(false)
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]); 


  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          products={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;