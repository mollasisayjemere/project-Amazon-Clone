import React from "react";
import { useContext } from "react";
import {Datacontext} from "../../../src/DataProvider/DataProvider";
import { ProductCard } from "../../Components/Products/ProductCard";
import CurrencyFormater from "../../Components/CurrencyFormater/CurrencyFormater";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import DataProvider from "../../../src/DataProvider/DataProvider";
import classes from "./Cart.module.css";
import Layout from "../../Components/LayOut/Layout";
import { Type } from "../../Utility/ActionType";

function Cart() {
  const [{basket},dispatch]=useContext(Datacontext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.cart__container}>
          <h1>Your Shopping Basket</h1>
          <hr />
          {basket?.length === 0 ? (
            <h3>No items in your Cart!</h3>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={classes.cart__product} key={item.id}>
                  <ProductCard
                    key={i}
                    products={item}
                    RenderAdd={false}
                    renderDesc={true}
                    flex={true}
                  />
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={30}/>
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={30}/>
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items) </p>
              <CurrencyFormater value={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small> This order contain a gift</small>
            </span>
            <Link to="/payments"> continue Checkout </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Cart;
