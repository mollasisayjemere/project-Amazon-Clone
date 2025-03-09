// import React, { useContext, useState } from "react";
// import StyleS from "./Paymentpage.module.css";
// import Layout from "../../Components/LayOut/Layout";
// import { Datacontext } from "../../DataProvider/DataProvider";
// import { ProductCard } from "../../Components/Products/ProductCard";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import CurrencyFormater from "../../Components/CurrencyFormater/CurrencyFormater";

// function PaymentPage() {
//   const [{ user, basket }] = useContext(Datacontext);
//   const totalItem = basket.reduce((amount, item) => amount + item.amount, 0);

//     const total = basket.reduce((amount, item) => {
//       return item.price * item.amount + amount;
//     }, 0);

//   const stripe = useStripe();
//   const elements = useElements();

//   const [cardError, setCardError] = useState(null);

//   const handleChange =  (e) => {
//     e.preventDefault();

//      console.log(e);
//      e?.error?.message? setCardError(e?.error?.message):setCardError('')
//   };

//   return (
//     // <Layout>
//     //   <div className={StyleS.payment_header}>checkout ({totalItem}) items</div>
//     //   <hr />
//     //   <hr />
//     //   <section className={StyleS.Payment}>
//     //     <div className={StyleS.flex}>
//     //       <h3>Delivery Address</h3>
//     //       <div>
//     //         <div>{user && user.email ? user.email : "Guest User"}</div>
//     //         <div>125 Belvaux</div>
//     //         <div>Luxembourg,LU</div>
//     //       </div>
//     //       <div className={StyleS.flex}>

//     //         <div>
//     //           <h3>Review items an Delivery</h3>
//     //           {basket?.map((item) => (
//     //             <ProductCard key={item.id} products={item} flex={true} />
//     //           ))}
//     //         </div>
//     //       </div>

//     //     </div>

//     //     <div className={StyleS.flex}>
//     //       <h3>Payment Methods</h3>
//     //       <div>
//     //         <div className={StyleS.flex}>
//     //           <form action="">
//     //             {cardError && (
//     //             <small style={{ color: "red" }}>{cardError} </small>)}
//     //             <CardElement onChange={handleChange} />
//     //             <div>
//     //               <div>
//     //                 <span>
//     //                   Total order <CurrencyFormater amount={total} />
//     //                 </span>
//     //               </div>
//     //             </div>
//     //             <button></button>
//     //             {/* {error && <div className={StyleS.error}>{error}</div>} */}
//     //           </form>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </section>
//     // </Layout>

//     <Layout>
//       <div className={StyleS.payment_header}>checkout ({totalItem}) items</div>
//       <hr />
//       <hr />
//       <section className={StyleS.Payment}>
//         <div className={StyleS.flex}>
//           <h3>Delivery Address</h3>
//           <div>
//             <div>{user && user.email ? user.email : "Guest User"}</div>
//             <div>125 Belvaux</div>
//             <div>Luxembourg,LU</div>
//           </div>
//         </div>

//         <div className={StyleS.flex}>
//           <h3>Review items and Delivery</h3>
//           <div>
//             {basket?.map((item) => (
//               <ProductCard key={item.id} products={item} flex={true} />
//             ))}
//           </div>
//         </div>

//         <div className={StyleS.flex}>
//           <h3>Payment Methods</h3>
//           <div className={StyleS.total_card_flex}>
//             <form action="">
//               {cardError && (
//                 <small style={{ color: "red" }}>{cardError} </small>
//               )}
//               <div className={StyleS.flex}>
//                 <span>
//                   Total order <CurrencyFormater amount={total} />
//                 </span>
//               </div>
//               <CardElement onChange={handleChange} />

//               <button></button>
//               {/* {error && <div className={StyleS.error}>{error}</div>} */}
//             </form>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }

// export default PaymentPage;

import React, { useContext, useState } from "react";
import Styles from "./Paymentpage.module.css";
import LayOut from "../../Components/LayOut/Layout";
import { DataContext } from "../../DataProvider/DataProvider";
import { ProductCard } from "../../Components/Products/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormater/CurrencyFormater";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/Firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/ActionType";

const Payment = () => {
  // const [{ user, basket }, dispatch] = useContext(Datacontext);
  const [{ user, basket }, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setProcessing(true);
      //1. backend || function ---> contact to the client secret
      const response = await axiosInstance({
        method: "POST",

        url: `/payment/create?amountInCents=${total * 100}`,
      });

      const clientSecret = response.data?.clientSecret;

      //2. client side (react side confirmation)
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      //3. after the confirmation --> order firestore database save, clear basket

      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

      //empty the basket
      dispatch({ type: Type.EMPTY_BASKET });

      setProcessing(false);
      navigate("/orders", { state: { msg: "you have placed new Orders" } });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };

  return (
    <LayOut>
      {/* header */}
      <div className={Styles.payment__header}>Checkout ({totalItem}) items</div>
      {/* payment method */}
      <section className={Styles.payment}>
        {/* address */}
        <div className={Styles.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>MeryLand, Md</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={Styles.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item, i) => (
              <ProductCard key={i} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={Styles.flex}>
          <h3>Payment methods</h3>
          <div className={Styles.payment__card__container}>
            <div className={Styles.payment__details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={Styles.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order | </p>
                      <CurrencyFormat amount={total} />{" "}
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={Styles.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please wait ...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Payment;
