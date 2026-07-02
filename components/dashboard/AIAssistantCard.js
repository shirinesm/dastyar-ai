// کارت دستیار هوشمند
// Premium AI Widget

import {
  Sparkles,
  Brain,
  ArrowRight,
  CircleCheck,
  Activity,
} from "lucide-react";

import Card from "../ui/Card";

export default function AIAssistantCard() {

  return (

    <Card
      className="
        relative
        overflow-hidden
        border-[#E5DDFE]
        bg-gradient-to-br
        from-[#F8F5FF]
        via-[#FCFBFF]
        to-[#F2EEFD]
      "
    >

      {/* Glow */}

      <div
        className="
          absolute
          -right-10
          -top-10
          h-44
          w-44
          rounded-full
          bg-violet-300/20
          blur-[70px]
        "
      />



      <div className="relative">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-[#7C6CF2]
              "
            >

              <Sparkles size={16} />

              AI Assistant

            </div>



            <h2
              className="
                mt-5
                text-2xl
                font-semibold
                leading-tight
                text-[#2C2825]
              "
            >

              Your productivity
              <br />
              looks great today.

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
              bg-white
            "
          >

            <Brain
              size={26}
              className="text-[#7C6CF2]"
            />

          </div>

        </div>





        <p
          className="
            mt-6
            text-sm
            leading-7
            text-[#6B625C]
          "
        >

          You completed your most important tasks.
          The best next action is scheduling
          a short learning session.

        </p>





        {/* Stats */}

        <div
          className="
            mt-7
            space-y-3
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              bg-white/70
              px-4
              py-3
            "
          >

            <div className="flex items-center gap-3">

              <Activity
                size={18}
                className="text-violet-500"
              />

              <span className="text-sm">

                Productivity

              </span>

            </div>

            <span className="font-semibold">

              92%

            </span>

          </div>





          <div
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              bg-white/70
              px-4
              py-3
            "
          >

            <div className="flex items-center gap-3">

              <CircleCheck
                size={18}
                className="text-emerald-500"
              />

              <span className="text-sm">

                AI Confidence

              </span>

            </div>

            <span className="font-semibold">

              96%

            </span>

          </div>

        </div>





        <button
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-2xl
            bg-gradient-to-r
            from-[#8D7EF8]
            to-[#7262EE]
            px-5
            py-3
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

          Generate New Insight

          <ArrowRight size={18} />

        </button>

      </div>

    </Card>

  );

}