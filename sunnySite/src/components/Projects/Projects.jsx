import { motion } from "framer-motion";
import { ObjTestimonials } from "../ServicesSection/testimonials";

import './Projects.css'

const fnVariant = (key) => {
    return ({
        offscreen: {
            opacity: 0,
            x: -50
        },
        onscreen: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                duration: .6 * (key + 1),
                delay: .3 * (key + 1)
            }
        }
    })
}

const animateh1 = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            type: "spring",
            duration: .7,
            delay: .7
        }
    }
}

export const Projects = () => {
    return (
        <motion.section id="projects">
            <motion.h1
                className="title"
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true, amount: 0.3 }}
                variants={animateh1}
            >
                Client testimonials</motion.h1>
            <motion.ul className="testimonialsContainer">
                {ObjTestimonials.map((testimonial, key) => {
                    return (
                        <motion.li
                            key={key}
                            className="testimonial"
                            initial='offscreen'
                            whileInView='onscreen'
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fnVariant(key)}
                        >
                            <div className="imgUser">
                                <img src={testimonial.imgUser} width={'80px'} height={'80px'} />
                            </div>
                            <p className="testimonialUser">{testimonial.testimonial}</p>
                            <div>
                                <h3>{testimonial.name}</h3>
                                <sub>
                                    {testimonial.work}
                                </sub>
                            </div>
                        </motion.li>
                    );
                })}
            </motion.ul>
        </motion.section>
    );
};
