"use client";

import { useState } from "react";
import { BellRing } from "lucide-react";

import Button from "../ui/Button";
import Input from "../ui/Input";

import useReminders from "../../hooks/useReminders";
import { toast } from "sonner";

export default function ReminderForm() {

  const { addReminder } = useReminders();

  const [reminder, setReminder] = useState({
    title: "",
    time: "",
  });

  const handleChange = (event) => {

    const { name, value } = event.target;

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
    toast.success("Reminder created.");
    setReminder({
      title: "",
      time: "",
    });

  };

  return (

    <section
      className="
        rounded-[30px]
        border
        border-[#E7DED2]
        bg-white/70
        p-7
        backdrop-blur-xl
      "
    >

      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-violet-100
          "
        >

          <BellRing className="text-[#7C6CF2]" />

        </div>

        <div>

          <h2 className="text-xl font-semibold">

            Create Reminder

          </h2>

          <p className="text-sm text-[#7D746D]">

            Never miss important tasks.

          </p>

        </div>

      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >

        <Input
          label="Reminder"
          name="title"
          value={reminder.title}
          onChange={handleChange}
          placeholder="Read book"
        />

        <Input
          label="Time"
          name="time"
          value={reminder.time}
          onChange={handleChange}
          placeholder="20:00"
        />

        <Button type="submit">

          Save Reminder

        </Button>

      </form>

    </section>

  );

}