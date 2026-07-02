"use client";

// Daily Summary
// Premium Version

import { motion } from "framer-motion";

import {

  Sparkles,

  CheckCircle2,

  TrendingUp,

} from "lucide-react";

export default function DailySummary({

  completedActivities,

  message,

}) {

  return (

    <motion.section

      initial={{
        opacity: 0,
        y: 25,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: .45,
      }}

      className="
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/60
        bg-white/70
        p-7
        backdrop-blur-xl
        shadow-[0_14px_40px_rgba(0,0,0,.05)]
      "

    >

      {/* Glow */}

      <div
        className="
          absolute
          -right-20
          -top-20
          h-56
          w-56
          rounded-full
          bg-violet-100/40
          blur-3xl
        "
      />



      <div className="relative">

        <div className="flex items-center justify-between">

          <div>

            <p
              className="
                text-sm
                font-medium
                text-[#8B8179]
              "
            >

              Daily Overview

            </p>



            <h2
              className="
                mt-2
                text-2xl
                font-bold
                text-[#2C2825]
              "
            >

              Today's Summary

            </h2>

          </div>





          <div
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

            <Sparkles size={24} />

          </div>

        </div>





        <div
          className="
            mt-8
            space-y-5
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              bg-[#F8F4EF]
              p-5
            "
          >

            <div className="flex items-center gap-3">

              <CheckCircle2
                className="text-emerald-600"
              />

              <span
                className="
                  text-sm
                  text-[#6E655E]
                "
              >

                Completed Activities

              </span>

            </div>



            <span
              className="
                text-3xl
                font-bold
                text-[#2C2825]
              "
            >

              {completedActivities}

            </span>

          </div>





          <div
            className="
              rounded-2xl
              bg-gradient-to-r
              from-violet-50
              to-indigo-50
              p-5
            "
          >

            <div className="flex items-center gap-3">

              <TrendingUp
                className="text-violet-600"
              />

              <span
                className="
                  text-sm
                  font-semibold
                  text-[#2C2825]
                "
              >

                AI Recommendation

              </span>

            </div>



            <p
              className="
                mt-4
                text-sm
                leading-7
                text-[#6E655E]
              "
            >

              {message}

            </p>

          </div>

        </div>

      </div>

    </motion.section>

  );

}