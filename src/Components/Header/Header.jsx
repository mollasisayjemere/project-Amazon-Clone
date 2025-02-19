import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import styles from "./Header.module.css"; // Correct import

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles["header__container"]}>
        {/* Logo */}
        <div>
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG18.png"
              alt="Amazon-logo"
              className={styles.header__logo}
            />
          </a>
        </div>

        {/* Location */}
        <div className={styles.header__location}>
          <SlLocationPin />
          <div className={styles.header__deliveryText}>
            <p>Deliver to</p>
            <span>Luxembourg</span>
          </div>
        </div>

        {/* Search */}
        <div className={styles["header__search"]}>
          <select className={styles["header__searchSelect"]}>
            <option>All</option>
          </select>
          <input type="text" className={styles["header__searchInput"]} />
          <BsSearch className={styles["header__searchIcon"]} size={25} />
        </div>

        {/* Navigation */}
        <div className={styles["header__nav"]}>
          <a href="#" className={styles["header__navLink"]}>
            <img
              src="https://flagpedia.net/data/flags/w1160/lu.webp"
              className={styles.header__flag}
              alt="Luxembourg flag"
            />
            <select className={styles.header__languageSelect}>
              <option>En</option>
            </select>
          </a>

          <a href="#" className={styles["header__navLink"]}>
            <span className={styles.header__account}>Sign In</span>
            <span className={styles.header__orders}>Account & List</span>
          </a>

          <a href="#" className={styles["header__navLink"]}>
            <span className={styles.header__account}>Returns</span>
            <span className={styles.header__orders}>& Orders</span>
          </a>

          <a href="#" className={styles.header__cart}>
            <BiCart className={styles.header__cartIcon} />
            <span className={styles.header__cartCount}>0</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
