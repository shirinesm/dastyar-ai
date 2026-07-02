// خلاصه عملکرد روزانه
// نمایش وضعیت کلی و تحلیل کوتاه AI

import {
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function DailySummary({

  completedActivities,

  message,

}) {

  return (

    <section
      className="
        rounded-[28px]
        border
        border-[#E7DED2]
        bg-gradient-to-br
        from-[#FFFDF9]
        to-[#F6F2EB]
        p-8
      "
    >

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p
            className="
              text-sm
              text-[#7D746D]
            "
          >

            Daily Overview

          </p>

          <h2
            className="
              mt-2
              text-2xl
              font-semibold
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
            bg-[#EEEAFE]
            text-[#7C6CF2]
          "
        >

          <Sparkles size={24} />

        </div>

      </div>





      {/* Statistics */}

      <div
        className="
          mt-8
          grid
          gap-5
          md:grid-cols-2
        "
      >

        <div
          className="
            rounded-3xl
            bg-[#FFFDF9]
            p-5
            border
            border-[#E7DED2]
          "
        >

          <div className="flex items-center gap-3">

            <CheckCircle2
              size={22}
              className="text-emerald-600"
            />

            <span
              className="
                text-sm
                text-[#7D746D]
              "
            >

              Completed Activities

            </span>

          </div>

          <p
            className="
              mt-4
              text-4xl
              font-semibold
              text-[#2C2825]
            "
          >

            {completedActivities}

          </p>

        </div>





        <div
          className="
            rounded-3xl
            bg-[#FFFDF9]
            p-5
            border
            border-[#E7DED2]
          "
        >

          <div className="flex items-center gap-3">

            <TrendingUp
              size={22}
              className="text-emerald-600"
            />

            <span
              className="
                text-sm
                text-[#7D746D]
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
              text-[#7D746D]
            "
          >

            {message}

          </p>

        </div>

      </div>

    </section>

  );

}