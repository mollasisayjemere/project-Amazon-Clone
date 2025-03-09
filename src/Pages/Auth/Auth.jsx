import React, { useContext, useState } from "react";
import styles from "./ Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/Firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { PacmanLoader } from "react-spinners";
import { DataContext } from "../../DataProvider/DataProvider.jsx";
import Type from "../../DataProvider/DataProvider.jsx"; // Import Type from reducer
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);

    try {
      if (e.target.name === "signin") {
        setLoading({ ...loading, signIn: true });
        const userInfo = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch({ type: Type.SET_USER, user: userInfo.user });
        navigate("/");
        setLoading({ ...loading, signIn: false });
      } else {
        setLoading({ ...loading, signUp: true });
        const userInfo = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch({ type: Type.SET_USER, user: userInfo.user });
        navigate("/");
        setLoading({ ...loading, signUp: false });
      }
    } catch (err) {
      setError(err.message);
      setLoading(
        e.target.name === "signin"
          ? { ...loading, signIn: false }
          : { ...loading, signUp: false }
      );
    }
  };

  return (
    <section className={styles.login}>
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG12.png"
          alt="amazon logo"
          className={styles.amazonLogo}
        />
      </Link>

      <div className={styles.loginContainer}>
        <h1>Sign In</h1>
        {/* {error && <p className={styles.error}>{error}</p>} */}
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
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
              className={styles.inputField} // Apply a specific class for the input field
            />
          </div>
          <button
            type="submit"
            className={styles.signInButton}
            onClick={authHandler}
            name="signin"
          >
            {loading.signin ? (
              <>
                <PacmanLoader color="green" size={15} />
                {/* <PacmanLoader /> */}
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
                <PacmanLoader color="green" />
              ) : (
                "Creat your amazon Account"
              )}
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
