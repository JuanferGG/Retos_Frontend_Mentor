import React from "react";
import { motion } from "framer-motion";

import "./userInfo.css";

export const UserInfoComponent = ({ userInfo }) => {
  const LinksArray = Object.entries(userInfo.links);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="user-info"
    >
      <img src={userInfo.image} width={"90px"} height={"90px"} />
      <div className="headUser">
        <h3>{userInfo.name}</h3>
        <p>{userInfo.location}</p>
      </div>
      <p className="infoBio">{userInfo.bio}</p>

      <ul>
        {LinksArray.map((link, key) => {
          return (
            <li key={key} href={link[1]}>
              {link[0]}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
