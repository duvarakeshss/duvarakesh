import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.98,
        filter: 'blur(4px)'
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)'
      }}
      exit={{
        opacity: 0,
        y: -30,
        scale: 1.02,
        filter: 'blur(2px)'
      }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.1
      }}
      layout
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
