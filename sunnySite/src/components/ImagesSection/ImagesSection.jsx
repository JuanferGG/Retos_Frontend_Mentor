import { motion } from 'framer-motion'

import img1 from '../../assets/images/desktop/image-gallery-milkbottles.jpg'
import img2 from '../../assets/images/desktop/image-gallery-orange.jpg'
import img3 from '../../assets/images/desktop/image-gallery-cone.jpg'
import img4 from '../../assets/images/desktop/image-gallery-sugarcubes.jpg'

import './ImagesSection.css'

const variants = {
    offscreen: {
        opacity: 0,
        y: -50
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition:{
            type: 'spring',
            duration: .7,
            delay: .3
        }
    }
}

export const ImagesSection = () => {
    return (
        <motion.div
            className="imgsContainer"
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: .3 }}
            variants={variants}
        >
            <div className='left'>
                <div style={{ backgroundImage: `url(${img1})` }}></div>
                <div style={{ backgroundImage: `url(${img2})` }}></div>
            </div>
            <div className='right'>
                <div style={{ backgroundImage: `url(${img3})` }}></div>
                <div style={{ backgroundImage: `url(${img4})` }}></div>
            </div>
        </motion.div>
    )
}
