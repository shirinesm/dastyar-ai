"use client";

// کارت نمایش Activity
// Premium Design + Motion Version

import { motion } from "framer-motion";

import {
  Clock3,
  CircleCheck,
  Circle,
  ArrowUpRight,
} from "lucide-react";

const statusConfig = {

  Completed: {

    icon: CircleCheck,

    badgeClass:
      "bg-emerald-100 text-emerald-700",

    iconClass:
      "text-emerald-600",

  },



  Pending: {

    icon: Circle,

    badgeClass:
      "bg-amber-100 text-amber-700",

    iconClass:
      "text-amber-600",

  },

};

export default function ActivityCard({

  title,

  duration,

  status,

}) {

  const currentStatus =
    statusConfig[status] ||
    statusConfig.Pending;

  const StatusIcon =
    currentStatus.icon;

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

      {/* Background Glow */}

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



      {/* Header */}

      <div className="relative flex items-start justify-between">

        <div>

          <h3
            className="
              text-xl
              font-semibold
              tracking-tight
              text-[#2C2825]
            "
          >

            {title}

          </h3>



          <div
            className="
              mt-5
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

              {duration} min

            </span>

          </div>

        </div>





        <motion.div

          whileHover={{
            scale: 1.08,
          }}

          className={`
            inline-flex
            items-center
            gap-2
            rounded-full
            px-4
            py-2
            text-xs
            font-semibold
            ${currentStatus.badgeClass}
          `}

        >

          <StatusIcon

            size={15}

            className={
              currentStatus.iconClass
            }

          />

          {status}

        </motion.div>

      </div>





      {/* Footer */}

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

          Keep building consistency every day.

        </p>



        <motion.div

          whileHover={{
            x: 4,
            y: -4,
          }}

        >

          <ArrowUpRight

            size={18}

            className="
              text-[#B7AEA4]
            "

          />

        </motion.div>

      </div>

    </motion.div>

  );

}