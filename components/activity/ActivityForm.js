"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";

import Button from "../ui/Button";
import Input from "../ui/Input";

import useActivities from "../../hooks/useActivities";

export default function ActivityForm() {

  const { addActivity } = useActivities();

  const [activity, setActivity] = useState({
    title: "",
    duration: "",
  });

  const handleChange = (event) => {

    const { name, value } = event.target;

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

          <PlusCircle className="text-[#7C6CF2]" />

        </div>

        <div>

          <h2 className="text-xl font-semibold">

            Add Activity

          </h2>

          <p className="text-sm text-[#7D746D]">

            Track your progress.

          </p>

        </div>

      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >

        <Input
          label="Activity"
          name="title"
          value={activity.title}
          onChange={handleChange}
          placeholder="Reading, Workout..."
        />

        <Input
          label="Duration"
          type="number"
          name="duration"
          value={activity.duration}
          onChange={handleChange}
          placeholder="30"
        />

        <Button type="submit">

          Save Activity

        </Button>

      </form>

    </section>

  );

}