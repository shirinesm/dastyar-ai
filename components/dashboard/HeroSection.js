// Hero اصلی Dashboard
// نمایش خوش‌آمدگویی، وضعیت روز و خلاصه AI

import {
  Sparkles,
  TrendingUp,
  Brain,
} from "lucide-react";

export default function HeroSection() {

  return (

    <section
      className="
        overflow-hidden
        rounded-[28px]
        border
        border-[#E7DED2]
        bg-gradient-to-br
        from-[#F7F3EC]
        via-[#FFFCF8]
        to-[#F3EBDD]
        p-8
      "
    >

      <div
        className="
          grid
          gap-8
          lg:grid-cols-[1.4fr_420px]
          lg:items-center
        "
      >

        {/* بخش معرفی */}
        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#E7DED2]
              bg-[#FFFDF9]
              px-4
              py-2
              text-sm
              text-[#7D746D]
            "
          >

            <Sparkles size={16} />

            AI Powered Productivity

          </div>



          <h1
            className="
              mt-6
              max-w-3xl
              text-4xl
              font-semibold
              leading-tight
              tracking-tight
              text-[#2C2825]
            "
          >

            Build consistency,

            <br />

            one productive day

            <span className="text-[#7C6CF2]">
              {" "}at a time.
            </span>

          </h1>



          <p
            className="
              mt-5
              max-w-2xl
              text-[15px]
              leading-7
              text-[#7D746D]
            "
          >

            Track your activities, understand your habits and receive AI-powered
            insights to improve your focus, productivity and daily routines.

          </p>

        </div>





        {/* AI Insight */}
        <div
          className="
            rounded-3xl
            border
            border-[#E7DED2]
            bg-[#FFFDF9]
            p-6
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-[#7D746D]">
                Today's Insight
              </p>

              <h3
                className="
                  mt-1
                  text-lg
                  font-semibold
                  text-[#2C2825]
                "
              >
                AI Assistant
              </h3>

            </div>


            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-[#EEEAFE]
                text-[#7C6CF2]
              "
            >

              <Brain size={22} />

            </div>

          </div>



          <p
            className="
              mt-6
              text-sm
              leading-7
              text-[#7D746D]
            "
          >

            You have maintained a strong focus during the last few days.

            Consider taking a short break after completing your next task to
            maintain your productivity.

          </p>



          <div
            className="
              mt-6
              flex
              items-center
              gap-3
              rounded-2xl
              bg-[#F6F2EB]
              p-4
            "
          >

            <TrendingUp
              size={20}
              className="text-[#22C55E]"
            />

            <div>

              <p
                className="
                  text-sm
                  font-medium
                  text-[#2C2825]
                "
              >
                Productivity increased
              </p>

              <p
                className="
                  text-xs
                  text-[#7D746D]
                "
              >
                +12% compared to yesterday
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}