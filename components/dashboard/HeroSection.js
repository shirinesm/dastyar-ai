// Hero اصلی Dashboard
// نسخه Premium Design

import {
  Sparkles,
  TrendingUp,
  Brain,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function HeroSection() {

  return (

    <section
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-[#E7DED2]
        bg-gradient-to-br
        from-[#FFFDFB]
        via-[#FAF7F2]
        to-[#F4EFE7]
        p-8
        lg:p-10
      "
    >

      {/* Glow */}
      <div
        className="
          absolute
          right-[-140px]
          top-[-120px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-violet-300/20
          blur-[90px]
        "
      />

      <div
        className="
          absolute
          left-[-120px]
          bottom-[-120px]
          h-[260px]
          w-[260px]
          rounded-full
          bg-indigo-200/20
          blur-[90px]
        "
      />

      <div
        className="
          relative
          grid
          gap-10
          xl:grid-cols-[1.5fr_430px]
          xl:items-center
        "
      >

        {/* Left */}

        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#E8DED2]
              bg-white/80
              px-4
              py-2
              text-sm
              font-medium
              text-[#7C6CF2]
              backdrop-blur
            "
          >

            <Sparkles size={16} />

            AI Powered Productivity

          </div>





          <h1
            className="
              mt-8
              max-w-3xl
              text-5xl
              font-semibold
              leading-tight
              tracking-tight
              text-[#2C2825]
            "
          >

            Build better habits

            <br />

            with your

            <span className="text-[#7C6CF2]">

              {" "}AI assistant

            </span>

          </h1>





          <p
            className="
              mt-6
              max-w-2xl
              text-[16px]
              leading-8
              text-[#756C65]
            "
          >

            Dastyar analyzes your daily activities,
            reminds you about important tasks and helps
            you build consistent routines with AI-powered
            recommendations.

          </p>





          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
            "
          >

            <button
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-[#8D7EF8]
                to-[#7262EE]
                px-6
                py-4
                text-sm
                font-medium
                text-white
                shadow-lg
                shadow-violet-200
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >

              Start Planning

              <ArrowRight size={18} />

            </button>





            <button
              className="
                rounded-2xl
                border
                border-[#E7DED2]
                bg-white/70
                px-6
                py-4
                text-sm
                font-medium
                text-[#5F5750]
                backdrop-blur
                transition
                hover:bg-white
              "
            >

              View Analytics

            </button>

          </div>





          {/* KPI */}

          <div
            className="
              mt-10
              grid
              gap-4
              sm:grid-cols-3
            "
          >

            <div
              className="
                rounded-2xl
                bg-white/75
                p-5
                backdrop-blur
              "
            >

              <p className="text-sm text-[#8C837B]">

                Tasks

              </p>

              <h3 className="mt-2 text-3xl font-semibold">

                18

              </h3>

            </div>





            <div
              className="
                rounded-2xl
                bg-white/75
                p-5
                backdrop-blur
              "
            >

              <p className="text-sm text-[#8C837B]">

                Focus

              </p>

              <h3 className="mt-2 text-3xl font-semibold">

                75%

              </h3>

            </div>





            <div
              className="
                rounded-2xl
                bg-white/75
                p-5
                backdrop-blur
              "
            >

              <p className="text-sm text-[#8C837B]">

                AI Score

              </p>

              <h3 className="mt-2 text-3xl font-semibold">

                90

              </h3>

            </div>

          </div>

        </div>









        {/* Right Card */}

        <div
          className="
            rounded-[28px]
            border
            border-white/60
            bg-white/70
            p-7
            backdrop-blur-xl
            shadow-xl
            shadow-black/5
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p
                className="
                  text-sm
                  text-[#8C837B]
                "
              >

                AI Insight

              </p>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-semibold
                "
              >

                Daily Analysis

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
              "
            >

              <Brain
                size={24}
                className="text-[#7C6CF2]"
              />

            </div>

          </div>





          <p
            className="
              mt-7
              leading-8
              text-[#746B64]
            "
          >

            Your productivity has increased over the
            last three days. Maintaining your current
            routine can improve your weekly performance.

          </p>





          <div
            className="
              mt-8
              rounded-2xl
              bg-[#F7F4EF]
              p-5
            "
          >

            <div className="flex items-center gap-3">

              <TrendingUp
                size={20}
                className="text-emerald-500"
              />

              <div>

                <p className="font-medium">

                  +12% Improvement

                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-[#8C837B]
                  "
                >

                  compared with yesterday

                </p>

              </div>

            </div>

          </div>





          <div
            className="
              mt-5
              flex
              items-center
              gap-3
            "
          >

            <CheckCircle2
              size={18}
              className="text-emerald-500"
            />

            <span
              className="
                text-sm
                text-[#746B64]
              "
            >

              AI confidence: 96%

            </span>

          </div>

        </div>

      </div>

    </section>

  );

}