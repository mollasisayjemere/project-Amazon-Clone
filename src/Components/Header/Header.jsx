import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import styles from "./Header.module.css"; // Correct import
import { LowerHeader } from "./LowerHeader";


const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.header__container}>
        {/* Logo */}
        <div className={styles.logo__container}>
          <a href="/">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
          </a>

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
          <a href="#" className={styles.language}>
            <img
              src="https://flagpedia.net/data/flags/w1160/lu.webp"
              alt="Luxembourg flag"
            />
            <select>
              <option value="">En</option>
            </select>
          </a>

          <a href="#">
            <p>Sign In</p>
            <span>Account & List</span>
          </a>

          <a href="#">
            <p>Returns</p>
            <span> & Orders</span>
          </a>

          <a href="#" className={styles.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
};

export default Header;