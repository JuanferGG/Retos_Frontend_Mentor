import { motion } from "framer-motion";

import imgGraphicDesing from "../../assets/images/desktop/image-graphic-design.jpg";
import imgPhotography from "../../assets/images/desktop/image-photography.jpg";

import "./ServicesSection.css";

const sectionService = {
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

export const ServicesSection = () => {
    return (
        <motion.section
            id="services"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionService}
        >
            <div
                className="left"
                style={{ backgroundImage: `url(${imgGraphicDesing})` }}
            >
                <div>
                    <h2>Graphic design</h2>
                    <p>
                        Great design makes you memorable. We deliver artwork that
                        underscores your brand message and captures potential clients’
                        attention.
                    </p>
                </div>
            </div>

            <div
                className="right"
                style={{ backgroundImage: `url(${imgPhotography})` }}
            >
                <div>
                    <h2>Photography</h2>
                    <p>
                        Increase your credibility by getting the most stunning, high-quality
                        photos that improve your business image.
                    </p>
                </div>
            </div>
        </motion.section>
    );
};
