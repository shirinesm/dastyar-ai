"use client";

import { useState } from "react";

import {
  Bell,
  Clock3,
} from "lucide-react";

import Button from "../ui/Button";
import Input from "../ui/Input";

import useReminders from "../../hooks/useReminders";

export default function ReminderForm() {

  const {
    addReminder,
  } = useReminders();

  const [reminder, setReminder] = useState({

    title: "",

    time: "",

  });

  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;

    setReminder((previous) => ({

      ...previous,

      [name]: value,

    }));

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!reminder.title || !reminder.time) {

      return;

    }

    addReminder({

      id: Date.now(),

      title: reminder.title,

      time: reminder.time,

    });

    setReminder({

      title: "",

      time: "",

    });

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="
        rounded-[28px]
        border
        border-[#E7DED2]
        bg-[#FFFDF9]
        p-7
        flex
        flex-col
        gap-6
      "
    >

      <div className="flex items-center gap-4">

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

          <Bell size={22} />

        </div>

        <div>

          <h2 className="text-xl font-semibold text-[#2C2825]">
            Create Reminder
          </h2>

          <p className="mt-1 text-sm text-[#7D746D]">
            Never miss an important task.
          </p>

        </div>

      </div>

      <Input
        label="Reminder"
        name="title"
        placeholder="Workout"
        value={reminder.title}
        onChange={handleChange}
      />

      <Input
        label="Time"
        name="time"
        placeholder="20:00"
        value={reminder.time}
        onChange={handleChange}
      />

      <div className="flex items-center gap-2 text-sm text-[#7D746D]">

        <Clock3 size={16} />

        Your reminders will appear below.

      </div>

      <Button type="submit">

        Save Reminder

      </Button>

    </form>

  );

}