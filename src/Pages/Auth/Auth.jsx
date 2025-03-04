

// import React, { useContext, useState } from "react";
// import styles from "./ Auth.module.css";
// import { Link } from "react-router-dom";
// import { auth } from "../../Utility/Firebase.js";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import {PacmanLoader } from 'react-spinners'
// import {Datacontext}  from "../../DataProvider/DataProvider.jsx";
// import  Type from "../../DataProvider/DataProvider.jsx"; // Import Type from reducer
// function Auth() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   // const [{ user }, dispatch] = useContext(Datacontext);
//  const[loading,setLoading]=useState({
//   signin:false,
//   signup:false,
//  })

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // This function is intentionally left empty.
//     // The authHandler function is responsible for handling the sign-in and sign-up logic.
//     // If you want to use handleSubmit for additional form-related tasks, implement them here.
//   };

//   const authHandler = async (e) => {
//     e.preventDefault();
//     console.log(e.target.name);

//     if (e.target.name === "signIn") {
//       try {
//         // From Firebase
//         setLoading({...loading,signin:true})
//         const userInfo = await signInWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );

//         dispatch({
//           type: Type.SET_USER, // Use the imported Type object
//           user: userInfo.user,
//         });
//         setLoading({ ...loading, signin: false });
//       } catch (err) {
//         setError(err.message); // Set the error message
//         // console.error("Sign-in error:", err);
//       }
//     } else {
//       try {
//         setLoading({ ...loading, signup: false });
//         const userInfo = await createUserWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );

//         dispatch({
//           type: Type.SET_USER, // Use the imported Type object
//           user: userInfo.user,
//         });
//          setLoading({ ...loading, signup: true });
//       } catch (err) {
//         setError(err.message); // Set the error message
//         console.error("Sign-up error:", err);
//       }
//     }
//   };

//   return (
//     <section className={styles.login}>
//       <Link to="/">
//         <img
//           src="../../../src/assets/images/Amazon-logo-sign.png"
//           alt="amazon logo"
//           className={styles.amazonLogo}
//         />
//       </Link>

//       <div className={styles.loginContainer}>
//         <h1>Sign In</h1>
//         {error && <p className={styles.error}>{error}</p>}
//         <form onSubmit={handleSubmit}>
//           {" "}
//           {/* Added onSubmit event */}
//           <div className={styles.formGroup}>
//             <label htmlFor="email">Email</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               id="email"
//               name="email"
//               className={styles.inputField} // Apply a specific class for the input field
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="password">Password</label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               id="password"
//               name="password"
//               className={styles.inputField} // Apply a specific class for the input field
//             />
//           </div>
//           <button
//             type="submit"
//             className={styles.signInButton}
//             onClick={authHandler}
//             name="signIn"
//           >
//             {loading.signin ? (
//               <>
//                 <PacmanLoader color="green"  size={15}/>
//                 <PacmanLoader />
//               </>
//             ) : nuu}
//             Sign In
//           </button>
//         </form>
//         <div className={styles.bottomSection}>
//           <p className={styles.termsText}>
//             By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
//             Sale. Please see our Privacy Notice, our Cookies Notice and our
//             Interest-Based Ads Notice.
//           </p>

//           <div className={styles.newAccount}>
//             <button
//               type="submit"
//               onClick={authHandler}
//               className={styles.registerButton}
//               name="signup"
//             >
//               Create your Amazon Account
//             </button>
//             error &&(
//             <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
//             );
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Auth;


import React, { useContext, useState } from "react";
import styles from "./ Auth.module.css";
import { Link,useNavigate } from "react-router-dom";
import { auth } from "../../Utility/Firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { PacmanLoader } from "react-spinners";
import { Datacontext } from "../../DataProvider/DataProvider.jsx";
import Type from "../../DataProvider/DataProvider.jsx"; // Import Type from reducer


function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(Datacontext); // Access dispatch from context
  const [loading, setLoading] = useState({
    signin: false,
    signup: false,
  });
  const navigate =useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // This function is intentionally left empty.
    // The authHandler function is responsible for handling the sign-in and sign-up logic.
    // If you want to use handleSubmit for additional form-related tasks, implement them here.
  };

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);

    if (e.target.name === "signIn") {
      try {
        // From Firebase
        setLoading({ ...loading, signin: true });
        navigate('/')
        const userInfo = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        dispatch({
          type: Type.SET_USER, // Use the imported Type object
          user: userInfo.user,
        });
        setLoading({ ...loading, signin: false });
      } catch (err) {
        setError(err.message); // Set the error message
        // console.error("Sign-in error:", err);
        setLoading({ ...loading, signin: false }); // Stop loading on error
      }
    } else {
      try {
        setLoading({ ...loading, signup: true }); // Start loading on signup
        navigate('/')
        const userInfo = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        dispatch({
          type: Type.SET_USER, // Use the imported Type object
          user: userInfo.user,
        });
        setLoading({ ...loading, signup: false }); // Stop loading after signup
      } catch (err) {
        setError(err.message); // Set the error message
        console.error("Sign-up error:", err);
        setLoading({ ...loading, signup: false }); // Stop loading on error
      }
    }
  };

  return (
    <section className={styles.login}>
      <Link to="/">
        <img
          src="../../../src/assets/images/Amazon-logo-sign.png"
          alt="amazon logo"
          className={styles.amazonLogo}
        />
      </Link>

      <div className={styles.loginContainer}>
        <h1>Sign In</h1>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Added onSubmit event */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className={styles.inputField} // Apply a specific class for the input field
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              className={styles.inputField} // Apply a specific class for the input field
            />
          </div>
          <button
            type="submit"
            className={styles.signInButton}
            onClick={authHandler}
            name="signIn"
          >
            {loading.signin ? (
              <>
                <PacmanLoader color="green" size={15} />
                {/* <PacmanLoader />  Remove this as it is causing two spinners */}
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <div className={styles.bottomSection}>
          <p className={styles.termsText}>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          <div className={styles.newAccount}>
            <button
              type="submit"
              onClick={authHandler}
              className={styles.registerButton}
              name="signup"
            >
              
              {loading.signup ? (
                <>
                  <PacmanLoader color="green" size={15} />
                  {/* <PacmanLoader />  Remove this as it is causing two spinners */}
                </>
              ) : (
                "Sign In"
              )}
              Create your Amazon Account
            </button>
            {error && ( 
              <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Auth;