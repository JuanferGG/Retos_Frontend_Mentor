import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import logoHamburger from '../../assets/images/icon-hamburger.svg'

import './DropDown.css'

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu"
    >
        <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
        >
             <img src={logoHamburger} />
            <motion.div
                variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0.55 }}
            >
            </motion.div>
        </motion.button>
        <motion.ul
            variants={{
                open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.3,
                        staggerChildren: 0.05,
                    },
                },
                closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3,
                    },
                },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
            <motion.li onClick={() => setIsOpen(!isOpen)} variants={itemVariants}><a href="#about">About</a> </motion.li>
            <motion.li onClick={() => setIsOpen(!isOpen)} variants={itemVariants}><a href="#services">Services</a> </motion.li>
            <motion.li onClick={() => setIsOpen(!isOpen)} variants={itemVariants}><a href="#projects">Projects</a> </motion.li>
            <motion.li onClick={() => setIsOpen(!isOpen)} variants={itemVariants}><a href="#contact">Contact</a> </motion.li>
        </motion.ul>
    </motion.nav>;
};
