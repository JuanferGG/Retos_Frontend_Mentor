import { motion } from "framer-motion";

import imgEgg from "../../assets/images/desktop/image-egg.jpg";
import imgStandout from '../../assets/images/desktop/image-stand-out.jpg';

import "./AboutSection.css";

const sectionVariants = {
    offscreen: {
        opacity: 0,
        x: -100,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            duration: 1,
            delay: 0.2,
        },
    },
};

export const AboutSection = () => {
    return (
        <>
            <motion.section
                id="about"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="left">
                    <div>
                        <h1>Transform your brand</h1>
                        <p>
                            We are a full-service creative agency specializing in helping
                            brands grow fast. Engage your clients through compelling visuals
                            that do most of the marketing for you.
                        </p>
                        <a href="#">Learn More</a>
                    </div>
                </div>

                <div
                    className="right"
                    style={{ backgroundImage: `url(${imgEgg})` }}
                ></div>
            </motion.section>
            <motion.section 
                id="about-2"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div
                    className="left"
                    style={{ backgroundImage: `url(${imgStandout})` }}
                ></div>
                <div className="right">
                    <div>
                        <h1>Stand out to the right audience</h1>
                        <p>
                            Using a collaborative formula of designers, researchers,
                            photographers, videographers, and copywriters, we’ll build and
                            extend your brand in digital places.
                        </p>
                        <a href="#">Learn More</a>
                    </div>
                </div>
            </motion.section>
        </>
    );
};
