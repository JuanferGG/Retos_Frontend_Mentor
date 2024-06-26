import React from "react";
import { motion } from 'framer-motion'

import logoSunnySite from "../../assets/images/logo.svg";

import "./HeaderComponent.css";
import { DropDown } from "./DropDown";

export const HeaderComponent = () => {
  return (
    <motion.div
      className='header'
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
    >
      <a href="#home"><img src={logoSunnySite} width={"160px"} height={"30px"} /></a>
      <ul>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a className="contact" href='#contact'>CONTACT</a>
        </li>
      </ul>
      <DropDown />

    </motion.div>
  );
};
