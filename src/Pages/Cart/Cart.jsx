


// import React, { useContext } from "react";
// import classes from "./Cart.module.css";
// import Layout from "../../Components/LayOut/Layout"; // Corrected import
// import { Datacontext } from "../../DataProvider/DataProvider";
// import {ProductCard} from "../../Components/Products/ProductCard"; // Assuming you have a ProductCard component

// function Cart() {
//   const [ (basket), dispatch ] = useContext(Datacontext);


//   return (
//     <Layout>
//       <section>
//         <div>
//           <h2>Hello</h2>
//           <h3>Your shopping Basket</h3>
//         <hr />
//         {basket.length === 0 ? ( <p>No items in your cart</p>
//         ) :(basket?.map((item, i) => (
//             <ProductCard key={i} product={item}  /> 
//           ))
//         )}
      
//         </div>
//       </section>
//     </Layout>
//   );
// }

// export default Cart;

import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Layout from "../../Components/Layout/Layout"; // Ensure correct path casing
import { Datacontext } from "../../DataProvider/DataProvider";
import { ProductCard } from "../../Components/Products/ProductCard";

function Cart() {
  const [basket, dispatch] = useContext(Datacontext); // Removed parentheses around basket

  return (
    <Layout>
      <section>
        <div>
          <h2>Hello</h2>
          <h3>Your shopping Basket</h3>
          <hr />
          {basket.length === 0 ? (
            <p>No items in your cart</p>
          ) : (
            basket?.map((item, i) => <ProductCard key={i} product={item} />)
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Cart;