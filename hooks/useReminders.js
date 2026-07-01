// Hook دسترسی به Reminder Context
// Component ها از این Hook برای خواندن و تغییر Reminder ها استفاده می‌کنند.


"use client";


import {
  useContext,
} from "react";


import {
  ReminderContext,
} from "../context/ReminderContext";



export default function useReminders() {


  const context = useContext(ReminderContext);



  if (!context) {

    throw new Error(
      "useReminders must be used inside ReminderProvider"
    );

  }



  return context;


}