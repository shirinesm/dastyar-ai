"use client";

// کارت دستیار هوشمند Dastyar
// Premium AI Panel

import { motion } from "framer-motion";

import {
  Sparkles,
  Brain,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function AIAssistantCard() {

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

      whileHover={{
        y: -4,
      }}

      className="
        relative
        overflow-hidden
        rounded-[30px]
        bg-gradient-to-br
        from-[#8C7AF8]
        via-[#7866F1]
        to-[#6555EA]
        p-7
        text-white
        shadow-[0_25px_60px_rgba(109,93,251,.35)]
      "

    >

      {/* Glow */}

      <div
        className="
          absolute
          -right-16
          -top-16
          h-56
          w-56
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -left-12
          bottom-0
          h-40
          w-40
          rounded-full
          bg-white/10
          blur-3xl
        "
      />



      <div className="relative">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-white/15
                backdrop-blur-lg
              "
            >

              <Brain size={26} />

            </div>



            <div>

              <p
                className="
                  text-sm
                  text-white/70
                "
              >

                Dastyar AI

              </p>

              <h2
                className="
                  mt-1
                  text-xl
                  font-semibold
                "
              >

                Productivity Insight

              </h2>

            </div>

          </div>



          <Sparkles
            size={22}
            className="opacity-80"
          />

        </div>





        {/* Message */}

        <div className="mt-8">

          <h3
            className="
              text-3xl
              font-bold
              leading-tight
            "
          >

            Your focus is improving.

          </h3>



          <p
            className="
              mt-5
              text-sm
              leading-7
              text-white/80
            "
          >

            You completed your most important tasks today.
            Based on your activity history,
            scheduling one additional
            30-minute deep work session
            could increase tomorrow's productivity.

          </p>

        </div>





        {/* Recommendation */}

        <div
          className="
            mt-8
            rounded-2xl
            border
            border-white/15
            bg-white/10
            p-5
            backdrop-blur-lg
          "
        >

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <TrendingUp size={20} />

            <span
              className="
                text-sm
                font-medium
              "
            >

              AI Recommendation

            </span>

          </div>



          <p
            className="
              mt-3
              text-sm
              leading-7
              text-white/80
            "
          >

            Finish one pending task before 8:00 PM
            to keep your productivity streak alive.

          </p>

        </div>





        {/* Button */}

        <motion.button

          whileHover={{
            scale: 1.04,
          }}

          whileTap={{
            scale: .98,
          }}

          className="
            mt-8
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-white
            px-5
            py-3
            font-medium
            text-[#6555EA]
            transition
          "

        >

          Open AI Assistant

          <ArrowRight size={18} />

        </motion.button>

      </div>

    </motion.section>

  );

}