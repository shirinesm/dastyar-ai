// Context مدیریت Activity های پروژه
// مسئول نگهداری State مشترک Activity بین Component ها است.
// تمام بخش‌هایی که به Activity نیاز دارند از این Provider استفاده می‌کنند.

"use client";

import { createContext, useContext, useState } from "react";


// ایجاد Context
const ActivityContext = createContext(null);


// Provider اصلی Activity
export function ActivityProvider({ children }) {

  // لیست Activity ها
  const [activities, setActivities] = useState([]);


  // اضافه کردن Activity جدید
  const addActivity = (activity) => {

    const newActivity = {
      id: Date.now(),
      ...activity,
      createdAt: new Date(),
    };


    setActivities((previous) => [
      ...previous,
      newActivity,
    ]);

  };


  // حذف Activity
  const removeActivity = (id) => {

    setActivities((previous) =>
      previous.filter(
        (activity) => activity.id !== id
      )
    );

  };


  return (
    <ActivityContext.Provider
      value={{
        activities,
        addActivity,
        removeActivity,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );

}


// Hook دسترسی به Context
export function useActivityContext() {

  const context = useContext(ActivityContext);


  if (!context) {
    throw new Error(
      "useActivityContext must be used inside ActivityProvider"
    );
  }


  return context;

}