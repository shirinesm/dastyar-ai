// نمایش لیست فعالیت‌های کاربر
// داده‌ها از Activity Context دریافت می‌شوند.

"use client";

import { Activity } from "lucide-react";

import ActivityCard from "../dashboard/ActivityCard";
import useActivities from "../../hooks/useActivities";

export default function ActivityList() {

  const {
    activities,
  } = useActivities();

  if (!activities || activities.length === 0) {

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

          <Activity
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

          No activities yet

        </h3>

        <p
          className="
            mt-2
            text-sm
            text-[#8C837B]
          "
        >

          Create your first activity to start tracking your productivity.

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
        md:grid-cols-2
      "
    >

      {activities.map((activity) => (

        <ActivityCard

          key={activity.id}

          title={activity.title}

          duration={`${activity.duration} minutes`}

          status={activity.status}

        />

      ))}

    </div>

  );

}