"use client";

// نمایش لیست Reminder ها
// داده‌ها از Reminder Context دریافت می‌شوند.

import { Bell } from "lucide-react";

import ReminderCard from "./ReminderCard";
import useReminders from "../../hooks/useReminders";

export default function ReminderList() {

  const {
    reminders,
  } = useReminders();

  if (!reminders || reminders.length === 0) {

    return (

      <div
        className="
          rounded-[28px]
          border
          border-dashed
          border-[#DDD5CB]
          bg-white/70
          p-10
          text-center
          backdrop-blur-xl
        "
      >

        <div
          className="
            mx-auto
            mb-5
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-violet-100
          "
        >

          <Bell
            size={28}
            className="text-violet-600"
          />

        </div>

        <h3
          className="
            text-lg
            font-semibold
            text-[#2C2825]
          "
        >

          No reminders yet

        </h3>

        <p
          className="
            mt-2
            text-sm
            text-[#8C837B]
          "
        >

          Create your first reminder and never miss an important task.

        </p>

      </div>

    );

  }

  return (

    <div
      className="
        grid
        grid-cols-1
        gap-5
      "
    >

      {reminders.map((reminder) => (

        <ReminderCard

          key={reminder.id}

          title={reminder.title}

          time={reminder.time}

        />

      ))}

    </div>

  );

}