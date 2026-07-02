"use client";

// Hero اصلی Dashboard
// Premium Version + Motion

import { motion } from "framer-motion";

import {
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function HeroSection() {

  return (

    <motion.section

      initial={{
        opacity: 0,
        y: 30,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.6,
      }}

      className="
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-white/60
        bg-white/65
        p-8
        backdrop-blur-2xl
        shadow-[0_18px_50px_rgba(0,0,0,.06)]
      "
    >

      {/* Glow */}

      <div
        className="
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-violet-200/30
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -left-24
          bottom-0
          h-60
          w-60
          rounded-full
          bg-indigo-100/40
          blur-3xl
        "
      />



      <div className="relative z-10">

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-violet-100
            px-4
            py-2
            text-sm
            font-medium
            text-violet-700
          "
        >

          <Sparkles size={16} />

          AI Productivity Assistant

        </div>



        <h1
          className="
            mt-6
            max-w-3xl
            text-4xl
            font-bold
            leading-tight
            tracking-tight
            text-[#2C2825]
            md:text-5xl
          "
        >

          Build Better Habits.
          <br />
          Stay Productive Every Day.

        </h1>



        <p
          className="
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-[#6F665E]
          "
        >

          Dastyar helps you organize your day,
          manage reminders,
          track activities
          and improve your productivity with AI.

        </p>



        <div
          className="
            mt-10
            flex
            flex-wrap
            gap-5
          "
        >

          <div
            className="
              rounded-3xl
              bg-gradient-to-r
              from-[#8D7EF8]
              to-[#7262EE]
              px-6
              py-5
              text-white
              shadow-xl
              shadow-violet-200
            "
          >

            <p className="text-sm opacity-80">

              Productivity Score

            </p>

            <p className="mt-2 text-4xl font-bold">

              85%

            </p>

          </div>



          <div
            className="
              rounded-3xl
              border
              border-[#E7DED2]
              bg-white/70
              px-6
              py-5
              backdrop-blur-xl
            "
          >

            <p className="text-sm text-[#7D746D]">

              Focus Level

            </p>

            <p className="mt-2 text-4xl font-bold text-[#2C2825]">

              75%

            </p>

          </div>

        </div>



        <button
          className="
            mt-10
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-[#2C2825]
            px-6
            py-4
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-black
          "
        >

          View Dashboard

          <ArrowRight size={18} />

        </button>

      </div>

    </motion.section>

  );

}