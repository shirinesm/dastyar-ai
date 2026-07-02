// کارت نمایش Reminder
// طراحی هماهنگ با Design System پروژه

import {
  Bell,
  Clock3,
  ArrowUpRight,
} from "lucide-react";
import Card from "../ui/Card";

export default function ReminderCard({

  title,

  time,

}) {

  return (

    <Card
  className="group"
>

      {/* Header */}

      <div className="flex items-start justify-between">

        <div className="flex items-start gap-4">

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              bg-[#EEEAFE]
              text-[#7C6CF2]
            "
          >

            <Bell size={20} />

          </div>



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
                mt-3
                flex
                items-center
                gap-2
                text-sm
                text-[#7D746D]
              "
            >

              <Clock3 size={16} />

              {time}

            </div>

          </div>

        </div>

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

          Stay consistent with your routine.

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

      </Card>

  );

}