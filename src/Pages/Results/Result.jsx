// import React from 'react'
// import classes from  './Result.module.css'
// import axios from axios;

// import {producturl}from '../../Api/endPoint'
// function Result() {
//   const [reaults, setreaults] = useState([])
//   cons {categoryName}=useparams
//   useEffect(() => {
  
// (async ()=>{
// try {
//   let request =await axios.get(
//     '${producturl}./products/category/$(categoryName)';
//     console.log(request);
//     setresults(results.data);
  
//   )}catch(error){
//     console.error(error);
   
//   }
//   )
// })

//   }, [])
  
//   return (
//     <div>
//       <h1>Result</h1>
//     </div>
//   );
// }

// export default Result


// import React, { useState, useEffect } from "react";
// // import classes from "./Result.module.css";
// import axios from "axios";
// import { useParams } from "react-router-dom"; 
// import { producturl } from "../../Api/endPoint";
// import Layout from "../../Components/LayOut/Layout";
// import { ProductCard } from "../../Components/Products/ProductCard";

// function Result() {
//   const [results, setResults] = useState([]); // Corrected state name
//   const { categoryName } = useParams(); // Corrected variable name and usage

//   useEffect(() => {
//     (async () => {
//       try {
//         const request = await axios.get(
//           `${producturl}/products/category/${categoryName}` // Corrected URL construction
//         );
//         console.log(request);
//         setResults(request.data); // Corrected setResults and using request.data
//       } catch (error) {
//         console.error(error);
//       }
//     })(); // Immediately invoked function expression
//   }, [categoryName]); // Added categoryName to the dependency array

//   return (
//     <layout>
//       <div>
//         <h1>Results</h1>
//         <p> category/categoryName</p>
//         <hr />
//         {results?.map((product) => (
//        <ProductCard key={product.id} product {product}/>
//         ))}
//       </div>
//     </layout>
//   );
// }

// export default Result;

import React, { useState, useEffect } from "react";
// import classes from "./Result.module.css"; // Consider i
import axios from "axios";
import { useParams } from "react-router-dom";
import { producturl } from "../../Api/endPoint";
import Layout from "../../Components/LayOut/Layout"; // Ensure LayOut exists and is correct!
import { ProductCard } from "../../Components/Products/ProductCard";

function Result() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(
          `${producturl}/products/category/${categoryName}`
        );
        console.log(request);
        setResults(request.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [categoryName]);

  return (
    <Layout>
      <div>
        <h1>Results</h1>
        <p> category: {categoryName}</p> {/* Display the category name */}
        <hr />
        {results?.map((product) => (
          <ProductCard key={product.id} product={product} /> //Corrected prop
        ))}
      </div>
    </Layout>
  );
}

export default Result;