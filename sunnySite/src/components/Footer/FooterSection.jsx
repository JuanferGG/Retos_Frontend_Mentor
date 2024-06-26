import { motion } from 'framer-motion'

import { FaFacebook, FaInstagram, FaTwitter, FaPinterestP  } from "react-icons/fa";

import logoSunnySite from '../../assets/images/logo.svg'

import './FooterSection.css'

const animateLeft = {
    offscreen:{
        opacity: 0,
        x: -50
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition:{
            type: 'spring',
            duration: .7,
            delay: .3
        }
    }
}

export const FooterSection = () => {
    return (
        <motion.div
            id='contact'
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: .4 }}
            variants={animateLeft}
        >
            <div className='footerContainer'>
                <a href='#home'><img src={logoSunnySite} width={'180px'} /></a>
                <div className='redes'>
                    <a href='#about'>About</a>
                    <a href='#services'>Services</a>
                    <a href='#projects'>Projects</a>
                </div>
                <div className='icons'>
                    <a href=''><FaFacebook/></a>
                    <a href=''><FaInstagram/></a>
                    <a href=''><FaTwitter/></a>
                    <a href=''><FaPinterestP/></a>
                </div>
            </div>


        </motion.div>
    )
}
