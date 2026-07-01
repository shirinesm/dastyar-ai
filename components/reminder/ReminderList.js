// نمایش لیست Reminder ها
// در نسخه Demo داده‌ها از State والد دریافت می‌شوند.
// در آینده به Reminder Context متصل خواهد شد.


"use client";

import ReminderCard from "./ReminderCard";
import useReminders from "../../hooks/useReminders";


export default function ReminderList() {


  const {
    reminders,
  } = useReminders();




  if (!reminders.length) {

    return (

      <div
        className="
          rounded-3xl
          bg-[#FFFCF7]
          p-5
          text-sm
          text-[#78716C]
        "
      >

        No reminders yet.

      </div>

    );

  }




  return (

    <div
      className="
        mt-5
        grid
        grid-cols-1
        gap-4
        md:grid-cols-2
      "
    >

      {
        reminders.map((reminder) => (

          <ReminderCard

            key={reminder.id}

            title={reminder.title}

            time={reminder.time}

          />

        ))
      }


    </div>

  );

}