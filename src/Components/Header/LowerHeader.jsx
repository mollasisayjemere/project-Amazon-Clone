import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import Styles from './Header.module.css'

export const LowerHeader = () => {
  return (
    <div className={Styles.LowerHeader}>
      <div>
        <ul>
          <li>
            {<AiOutlineMenu />}
            <p>All</p>
          </li>
          <li>Today's Deals</li>
          <li> Costemer Service</li>
          <li>Regestry</li>
          <li> Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
    </div>
  );
}
