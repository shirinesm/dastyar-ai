// مدیریت وضعیت Reminder ها
// این Context مسئول نگهداری و تغییر Reminder ها است.
// در آینده این بخش به API متصل خواهد شد.


"use client";


import {
  createContext,
  useState,
} from "react";



export const ReminderContext = createContext(null);



export function ReminderProvider({
  children,
}) {


  const [reminders, setReminders] = useState([]);



  const addReminder = (newReminder) => {


    
  
  
    setReminders((previous) => [
  
      ...previous,
  
      newReminder,
  
    ]);
  
  
  };




  return (

    <ReminderContext.Provider

      value={{
        reminders,
        addReminder,
      }}

    >

      {children}

    </ReminderContext.Provider>

  );

}