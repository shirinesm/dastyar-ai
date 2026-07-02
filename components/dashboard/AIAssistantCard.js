import {
  Sparkles,
  Brain,
  ArrowRight,
} from "lucide-react";

export default function AIAssistantCard() {

  return (

    <section
      className="
        overflow-hidden
        rounded-[28px]
        border
        border-[#DCD1FF]
        bg-gradient-to-br
        from-[#F4F1FF]
        via-[#F9F7FF]
        to-[#EEEAFE]
        p-7
      "
    >

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
            text-[#7C6CF2]
          "
        >

          <Brain size={26} />

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

        You completed your important tasks today.
        Consider scheduling a short reading session
        before finishing your day.

      </p>

      <button
        className="
          mt-7
          inline-flex
          items-center
          gap-2
          rounded-2xl
          bg-[#7C6CF2]
          px-5
          py-3
          text-sm
          font-medium
          text-white
          transition-all
          hover:opacity-90
        "
      >

        Generate New Insight

        <ArrowRight size={18} />

      </button>

    </section>

  );

}