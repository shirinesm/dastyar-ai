"use client";

// نمایش شاخص‌های عملکرد کاربر
// Premium Design + Motion Version

import { motion } from "framer-motion";

import {
  TrendingUp,
  Brain,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const variants = {

  progress: {

    icon: TrendingUp,

    iconBackground:
      "bg-emerald-100",

    iconColor:
      "text-emerald-600",

    progressColor:
      "bg-emerald-500",

  },



  focus: {

    icon: Brain,

    iconBackground:
      "bg-violet-100",

    iconColor:
      "text-violet-600",

    progressColor:
      "bg-violet-500",

  },



  ai: {

    icon: Sparkles,

    iconBackground:
      "bg-indigo-100",

    iconColor:
      "text-indigo-600",

    progressColor:
      "bg-indigo-500",

  },

};

export default function ScoreCard({

  title,

  value,

  description,

  progress = 0,

  variant = "progress",

}) {

  const currentVariant =
    variants[variant];

  const Icon =
    currentVariant.icon;

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      whileHover={{
        y: -6,
        scale: 1.015,
      }}

      transition={{
        duration: 0.35,
      }}

      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/60
        bg-white/70
        p-6
        backdrop-blur-xl
        shadow-[0_12px_35px_rgba(0,0,0,.05)]
      "

    >

      {/* Glow */}

      <div
        className="
          absolute
          -right-10
          -top-10
          h-28
          w-28
          rounded-full
          bg-violet-100/60
          blur-3xl
          transition
          duration-500
          group-hover:scale-150
        "
      />



      {/* Header */}

      <div className="relative flex items-start justify-between">

        <div>

          <p
            className="
              text-sm
              font-medium
              text-[#847A71]
            "
          >

            {title}

          </p>



          <motion.h3

            initial={{
              scale: .9,
            }}

            animate={{
              scale: 1,
            }}

            transition={{
              delay: .15,
            }}

            className="
              mt-4
              text-5xl
              font-bold
              tracking-tight
              text-[#2C2825]
            "
          >

            {value}

          </motion.h3>

        </div>



        <motion.div

          whileHover={{
            rotate: 12,
            scale: 1.08,
          }}

          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            ${currentVariant.iconBackground}
          `}
        >

          <Icon

            size={24}

            className={
              currentVariant.iconColor
            }

          />

        </motion.div>

      </div>





      {/* Progress */}

      <div className="relative mt-8">

        <div
          className="
            h-2.5
            overflow-hidden
            rounded-full
            bg-[#EFE8DE]
          "
        >

          <motion.div

            initial={{
              width: 0,
            }}

            animate={{
              width: `${progress}%`,
            }}

            transition={{
              duration: .8,
              ease: "easeOut",
            }}

            className={`
              h-full
              rounded-full
              ${currentVariant.progressColor}
            `}

          />

        </div>

      </div>





      {/* Footer */}

      <div
        className="
          relative
          mt-6
          flex
          items-center
          justify-between
        "
      >

        <p
          className="
            max-w-[80%]
            text-sm
            leading-6
            text-[#7D746D]
          "
        >

          {description}

        </p>



        <motion.div

          whileHover={{
            x: 3,
            y: -3,
          }}

        >

          <ArrowUpRight

            size={18}

            className="
              text-[#B4AAA1]
            "

          />

        </motion.div>

      </div>

    </motion.div>

  );

}