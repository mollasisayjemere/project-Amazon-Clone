import React from "react";
import { useContext } from "react";
import {DataContext} from "../../../src/DataProvider/DataProvider";
import { ProductCard } from "../../Components/Products/ProductCard";
import CurrencyFormater from "../../Components/CurrencyFormater/CurrencyFormater";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import DataProvider from "../../DataProvider/DataProvider";
import styles from "./Cart.module.css";
import Layout from "../../Components/LayOut/Layout";
import { Type } from "../../Utility/ActionType";

function Cart() {
  const [{basket},dispatch]=useContext(DataContext);
  const totalItem = basket.reduce((amount, item) => {
    return item.amount * item.amount + amount;
  }, 0);

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
      <div className={styles.container}>
        <div className={styles.cart__container}>
          <h1>Your Shopping Basket</h1>
          <hr />
          {basket?.length === 0 ? (
            <h3>No items in your Cart!</h3>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={styles.cart__product} key={item.id}>
                  <ProductCard
                    key={i}
                    products={item}
                    RenderAdd={false}
                    renderDesc={true}
                    flex={true}
                  />
                  <div className={styles.btn_container}>
                    <button
                      className={styles.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={30} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={styles.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={30} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items) </p>
              <CurrencyFormater value={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small> This order contain a gift</small>
            </span>
            <Link to="/payment"> continue Checkout </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Cart;
