import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import './Splash.css'

export default function Splash({onFinish}){
  useEffect(()=>{
    const t = setTimeout(()=> onFinish && onFinish(), 3200)
    return ()=> clearTimeout(t)
  },[onFinish])

  return (
    <div className="splash-root">
      <div className="splash-center">
        <motion.h1 className="splash-title"
          initial={{opacity:0, y:10}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.8}}
        >motive</motion.h1>
        <motion.div className="splash-sub"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.8}}
        >Driven by purpose</motion.div>
        <motion.div className="rainbow-bar"
          initial={{scaleX:0}}
          animate={{scaleX:1}}
          transition={{duration:2}}
        />
        
      </div>
    </div>
  )
}
