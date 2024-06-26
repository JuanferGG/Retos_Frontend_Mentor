import React from "react";
import { motion } from "framer-motion";
import logoArrow from "../../assets/images/icon-arrow-down.svg";

import "./HomeSection.css";

export const HomeSection = () => {
  return (
    <motion.div
      className="home-section"
      id='home'
      initial={{ opacity: 0, y: -800 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        <h1>WE ARE CREATIVES</h1>
        <a href="#about" className="imgRow">
          <motion.img
            animate={{ rotate: [0, 0, 7, -7, 7, -7, 0, 0] }}
            transition={{
              duration: 2,
              delay: 1.7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ rotate: [0] }}
            src={logoArrow}
          />
        </a>
      </motion.div>
    </motion.div>
  );
};
