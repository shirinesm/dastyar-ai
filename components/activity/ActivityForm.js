"use client";

import { useState } from "react";

import {
  NotebookPen,
  Clock3,
} from "lucide-react";

import Button from "../ui/Button";
import Input from "../ui/Input";

import useActivities from "../../hooks/useActivities";

export default function ActivityForm() {

  const {
    addActivity,
  } = useActivities();

  const [activity, setActivity] = useState({

    title: "",

    duration: "",

  });

  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;

    setActivity((previous) => ({

      ...previous,

      [name]: value,

    }));

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!activity.title || !activity.duration) {

      return;

    }

    addActivity({

      id: Date.now(),

      title: activity.title,

      duration: activity.duration,

      status: "Completed",

    });

    setActivity({

      title: "",

      duration: "",

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

          <NotebookPen size={22} />

        </div>

        <div>

          <h2 className="text-xl font-semibold text-[#2C2825]">
            Add Activity
          </h2>

          <p className="mt-1 text-sm text-[#7D746D]">
            Track today's progress.
          </p>

        </div>

      </div>

      <Input
        label="Activity"
        name="title"
        placeholder="Reading, Workout, Coding..."
        value={activity.title}
        onChange={handleChange}
      />

      <Input
        label="Duration (minutes)"
        name="duration"
        type="number"
        placeholder="30"
        value={activity.duration}
        onChange={handleChange}
      />

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2 text-sm text-[#7D746D]">

          <Clock3 size={16} />

          Productivity starts with consistency.

        </div>

      </div>

      <Button type="submit">

        Save Activity

      </Button>

    </form>

  );

}