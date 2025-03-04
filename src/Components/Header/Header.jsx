import React  from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import styles from "./Header.module.css"; // Correct import
import { LowerHeader } from "./LowerHeader";
import { Link } from "react-router-dom";
import { Datacontext } from "../../DataProvider/DataProvider";
import { useContext } from "react";
import {auth} from '../../Utility/Firebase'


const Header = () => {
  // const [{basket},dispatch] = useContext(Datacontext); 

    // const context = useContext(Datacontext);
    // const { state } = context || {};
    // const basket = state?.basket || [];
 const [{user, basket },dispatch] = useContext(Datacontext);


 const totalItem = basket.reduce((amount,item)=> amount + item.amount,0)

  return (
    <section className={styles.fixed}>
      <div className={styles.header__container}>
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

          <Link to={!user && "/Auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[9]}</p>

                  <span onClick={()=>auth.signOut()}>sign out</span>
                </>
              ) : (
                <>
                  <p>Sign In</p>
                  <span>Account & List</span>
                </>
              )}
              (<p>Hello Molla </p>)
            </div>

            <span>Account & List</span>
          </Link>

          <Link to="/Orders">
            <p>Returns</p>
            <span> & Orders</span>
          </Link>

          <Link to="/cart" className={styles.cart}>
            <BiCart size={35} />
            <span> {totalItem}</span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
};

export default Header;