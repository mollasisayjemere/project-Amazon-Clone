

// import React, { useState, useEffect } from "react";
// // import classes from "./Result.module.css";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// import producturl from "../../Api/endPoint"; 
// import Layout from "../../Components/LayOut/Layout";
// import { ProductCard } from "../../Components/Products/ProductCard";

// function Result() {
//   const [results, setResults] = useState([]); // Corrected state name
//   const { categoryName } = useParams(); // Corrected variable name and usage

//   useEffect(() => {
//     (async () => {
//       try {
//         const request = await axios.get(
//           `${productUrl}/products/category/${categoryName}` // Corrected URL construction
//         );
//         console.log(request);
//         setResults(request.data); // Corrected setResults and using request.data
//       } catch (error) {
//         console.error(error);
//       }
//     })(); // Immediately invoked function expression
//   }, [categoryName]); // Added categoryName to the dependency array

//   return (
//     <Layout>
//       <div>
//         <h1>Results</h1>
//         <p> category/categoryName</p>
//         <hr />
//         {results?.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </Layout>
//   );
// }

// export default Result;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductCard } from "../../Components/Products/ProductCard";
import Layout from "../../Components/LayOut/Layout";
import producturl from '../../Api/endPoint'
import styles from './Result.module.css'
import Loader from "../../Components/Loader/Loader";
function Result() {
  const [loading,setLoading]=useState(false)
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `${producturl}/products/category/${categoryName}`
        );
        // console.log(response.data); // Add this line to check the data
        setResults(response.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false)
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <Layout>
      <div className={styles.results__container}>
        <h1>Results</h1>
        <p style={{ padding: "2rem" }}>Category / {categoryName}</p>

        <hr />

        {loading ? (
          <Loader />
        ) : (
          <div className={styles.products__container}>
            {results.map((product) => (
              <ProductCard
                key={product.id}
                products={product}
                RenderAdd={true}
                renderDesc={false}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Result;