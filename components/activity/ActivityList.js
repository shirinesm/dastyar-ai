// نمایش لیست فعالیت‌های کاربر
// داده‌ها از Activity Context دریافت می‌شوند.
// این Component فقط مسئول نمایش است و منطق داده ندارد.


"use client";


import ActivityCard from "../dashboard/ActivityCard";
import useActivities from "../../hooks/useActivities";



export default function ActivityList() {


  const {
    activities
  } = useActivities();




  if (!activities || activities.length === 0) {


    return (

      <div
        className="
          rounded-3xl
          bg-[#FFFCF7]
          p-6
          text-sm
          text-[#78716C]
        "
      >

        No activities yet.

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


      {
        activities.map((activity) => (

          <ActivityCard

            key={activity.id}

            title={activity.title}

            duration={`${activity.duration} minutes`}

            status={activity.status}

          />

        ))
      }


    </div>

  );

}