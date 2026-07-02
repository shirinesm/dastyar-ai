// کارت نمایش فعالیت روزانه
// نسخه جدید با طراحی هماهنگ با Design System پروژه

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
    statusConfig[status] || statusConfig.Pending;

  const StatusIcon = currentStatus.icon;

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

          <h3
            className="
              text-lg
              font-semibold
              text-[#2C2825]
            "
          >

            {title}

          </h3>

          <div
            className="
              mt-4
              flex
              items-center
              gap-2
              text-sm
              text-[#7D746D]
            "
          >

            <Clock3 size={16} />

            <span>

              {duration}

            </span>

          </div>

        </div>



        <span
          className={`
            inline-flex
            items-center
            gap-2
            rounded-full
            px-3
            py-1.5
            text-xs
            font-medium
            ${currentStatus.badgeClass}
          `}
        >

          <StatusIcon
            size={14}
            className={currentStatus.iconClass}
          />

          {status}

        </span>

      </div>



      <div
        className="
          mt-6
          flex
          items-center
          justify-between
          border-t
          border-[#EFE8DE]
          pt-5
        "
      >

        <p
          className="
            text-sm
            text-[#7D746D]
          "
        >

          Keep building consistency.

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