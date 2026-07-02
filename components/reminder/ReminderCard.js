"use client";

// کارت نمایش Reminder
// Premium Design + Motion Version

import { motion } from "framer-motion";

import {
  Bell,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

export default function ReminderCard({

  title,

  time,

}) {

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
      }}

      transition={{
        duration: .35,
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
          -right-12
          -top-12
          h-36
          w-36
          rounded-full
          bg-violet-100/40
          blur-3xl
          transition
          duration-500
          group-hover:scale-150
        "
      />



      <div className="relative flex items-start gap-4">

        <motion.div

          whileHover={{
            rotate: 12,
            scale: 1.08,
          }}

          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-violet-100
            text-violet-600
          "

        >

          <Bell size={22} />

        </motion.div>





        <div className="flex-1">

          <h3
            className="
              text-lg
              font-semibold
              text-[#2C2825]
            "
          >

            {title}

          </h3>



          <div
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[#F7F3EE]
              px-3
              py-2
            "
          >

            <Clock3
              size={16}
              className="text-[#8C837B]"
            />

            <span
              className="
                text-sm
                font-medium
                text-[#6E655E]
              "
            >

              {time}

            </span>

          </div>

        </div>

      </div>





      <div
        className="
          relative
          mt-7
          flex
          items-center
          justify-between
          border-t
          border-[#EEE6DB]
          pt-5
        "
      >

        <p
          className="
            text-sm
            leading-6
            text-[#7D746D]
          "
        >

          Never miss what matters most.

        </p>





        <motion.div

          whileHover={{
            x: 4,
            y: -4,
          }}

        >

          <ArrowUpRight
            size={18}
            className="text-[#B7AEA4]"
          />

        </motion.div>

      </div>

    </motion.div>

  );

}