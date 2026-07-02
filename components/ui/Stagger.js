"use client";

import { motion } from "framer-motion";

export default function Stagger({

  children,

}) {

  return (

    <motion.div

      variants={{

        hidden: {},

        visible: {

          transition: {

            staggerChildren: 0.08,

          },

        },

      }}

      initial="hidden"

      animate="visible"

    >

      {children}

    </motion.div>

  );

}