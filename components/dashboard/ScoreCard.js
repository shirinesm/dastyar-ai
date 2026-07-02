// نمایش شاخص‌های عملکرد کاربر
// این Component به صورت Reusable طراحی شده و بر اساس Variant ظاهر متفاوتی دارد.

import {
  TrendingUp,
  Brain,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const variants = {

  progress: {

    icon: TrendingUp,

    iconBackground: "bg-emerald-100",

    iconColor: "text-emerald-600",

    progressColor: "bg-emerald-500",

  },

  focus: {

    icon: Brain,

    iconBackground: "bg-violet-100",

    iconColor: "text-violet-600",

    progressColor: "bg-violet-500",

  },

  ai: {

    icon: Sparkles,

    iconBackground: "bg-indigo-100",

    iconColor: "text-indigo-600",

    progressColor: "bg-indigo-500",

  },

};

export default function ScoreCard({

  title,

  value,

  description,

  progress = 0,

  variant = "progress",

}) {

  const currentVariant = variants[variant];

  const Icon = currentVariant.icon;

  return (

    <div
      className="
        group
        rounded-[26px]
        border
        border-[#E7DED2]
        bg-[#FFFDF9]
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#D7CCBE]
        hover:shadow-lg
      "
    >

      {/* Header */}
      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-[#7D746D]">

            {title}

          </p>

          <h3
            className="
              mt-3
              text-4xl
              font-semibold
              tracking-tight
              text-[#2C2825]
            "
          >

            {value}

          </h3>

        </div>



        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            ${currentVariant.iconBackground}
          `}
        >

          <Icon
            size={22}
            className={currentVariant.iconColor}
          />

        </div>

      </div>



      {/* Progress */}

      <div className="mt-6">

        <div
          className="
            h-2
            overflow-hidden
            rounded-full
            bg-[#EFE8DE]
          "
        >

          <div
            className={`
              h-full
              rounded-full
              transition-all
              duration-700
              ${currentVariant.progressColor}
            `}
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>



      {/* Footer */}

      <div className="mt-5 flex items-center justify-between">

        <p
          className="
            max-w-[80%]
            text-sm
            leading-6
            text-[#7D746D]
          "
        >

          {description}

        </p>



        <ArrowUpRight
          size={18}
          className="
            text-[#B7AEA4]
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />

      </div>

    </div>

  );

}