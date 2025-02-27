import React  from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import styles from "./Header.module.css"; // Correct import
import { LowerHeader } from "./LowerHeader";
import { Link } from "react-router-dom";
import { Datacontext } from "../../DataProvider/DataProvider";
import { useContext } from "react";

const Header = () => {
  const { state } = useContext(Datacontext); // Access state from context
  const basket = state ? state.basket : []; //Safely access basket

  return (
    <section className={styles.fixed}>
      <div className={styles.header__container}>
        {/* Logo */}
        <div className={styles.logo__container}>
          <Link to="/">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
          </Link>

          {/* Location */}
          <div className={styles.delivery}>
            <span>
              <SlLocationPin />
            </span>

            <div>
              <p>Deliver to</p>
              <span>Luxembourg</span>
            </div>
          </div>
        </div>
        {/* Search */}
        <div className={styles.search}>
          <select>
            <option>All</option>
          </select>
          <input type="text" />
          <BsSearch size={25} />
        </div>

        {/* Navigation */}
        <div className={styles.order__container}>
          <Link to="/" className={styles.language}>
            <img
              src="https://flagpedia.net/data/flags/w1160/lu.webp"
              alt="Luxembourg flag"
            />
            <select>
              <option value="">En</option>
            </select>
          </Link>

          <Link to="/auth">
            <p>Sign In</p>
            <span>Account & List</span>
          </Link>

          <Link to="/Orders">
            <p>Returns</p>
            <span> & Orders</span>
          </Link>

          <Link to="/cart" className={styles.cart}>
            <BiCart size={35} />
            <span> {basket.length}</span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
};

export default Header;