import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
        

          <motion.div id='div2'
          initial={{
            opacity:0,
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            delay:1,
            duration:2
          }}>
            <motion.img
            src='img/banner-new.jpeg'
            className='banner'
            width={750}

            initial={{
              opacity:0.8
            }}

            transition={{
              duration:5
            }}

            whileTap={{rotate:360}}/>

          </motion.div>
          <div id='divImg'>
          

            <motion.button className='btn btn-primary'
            whileHover={{
              scale:1.2
            }}>Хочу сотрудничать!</motion.button>
            </div>

    </div>
  )
}

export default Description