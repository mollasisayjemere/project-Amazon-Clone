
// import React, { useContext } from "react";
// import classes from "./Cart.module.css";
// import Layout from "../../Components/LayOut/Layout"; // Corrected import
// import { Datacontext } from "../../DataProvider/DataProvider";

// function Cart() {
//   const {(basket), dipatch} = useContext(Datacontext)
//   return (
//     <Layout>
//       <section>
//         <div>
//            <h2>Hello</h2>
//         <h2>Your shopping Basket</h2>
//         </div>
       
//         <hr />
//             basket.length===0 ?(<p>No items in your carts</p>)
//       basket?.map((item,i)=>{
//         return <productCard key {i} product {item}/>
//       })
//       </section>
  
//     </Layout>
//   );
// }

// export default Cart;


import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Layout from "../../Components/LayOut/Layout"; // Corrected import
import { Datacontext } from "../../DataProvider/DataProvider";
import {ProductCard} from "../../Components/Products/ProductCard"; // Assuming you have a ProductCard component

function Cart() {
  const { state, dispatch } = useContext(Datacontext); // Corrected: Access 'state' and 'dispatch'
  const basket = state ? state.basket : []; // Safely access the basket

  return (
    <Layout>
      <section>
        <div>
          <h2>Hello</h2>
          <h2>Your shopping Basket</h2>
        </div>

        <hr />
        {basket.length === 0 ? (
          <p>No items in your cart</p>
        ) : (
          basket?.map((item, i) => (
            <ProductCard key={i} product={item} /> // Corrected syntax: key and prop assignment
          ))
        )}
      </section>
    </Layout>
  );
}

export default Cart;