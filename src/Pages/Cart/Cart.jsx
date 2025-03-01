

import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Layout from "../../Components/LayOut/Layout";
import { Datacontext } from "../../DataProvider/DataProvider";
import { ProductCard } from "../../Components/Products/ProductCard";

function Cart() {
  const { state } = useContext(Datacontext);
  const basket = state?.basket || [];

  // Debugging: Log the basket contents
  console.log("Basket contents:", basket);

  return (
    <Layout>
      <section className={classes.cart_container}>
        <div className={classes.cart_content}>
          <h2>Your Shopping Cart</h2>
          <h3>{basket.length} items in your basket</h3>
          <hr />

          {basket.length === 0 ? (
            <p className={classes.empty_cart}>Your cart is empty</p>
          ) : (
            <div className={classes.items_list}>
              {basket.map((item) => (
                <ProductCard
                  key={item.i}
                  products={item}
                  flex={true}
                  renderAdd={false}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Cart;