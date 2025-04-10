
// import React from "react";
// import classes from "./Orders.module.css";
// import Layout from "../../Components/LayOut/Layout";

// function Orders() {
//   return (
// <Layout>
  
//   <div>
//     <h1>Orders page</h1>
//   </div>
// </Layout>
//   );
// }

// export default Orders;


import React, { useContext, useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/Layout";
import Styles from "./Orders.module.css";
import { db } from "../../Utility/Firebase";
import { DataContext } from "../../DataProvider/DataProvider";
import {ProductCard} from "../../Components/Products/ProductCard";

const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);

          setOrders(
            snapshot?.docs?.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <LayOut>
      <section className={Styles.container}>
        <div className={Styles.orders__container}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && (
            <div style={{ padding: "20px" }}>You don't have orders yet.</div>
          )}
          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => (
                    <ProductCard flex={true} products={order} key={order.id} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Orders;
