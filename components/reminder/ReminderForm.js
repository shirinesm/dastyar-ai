// فرم ایجاد Reminder
// در نسخه Demo فقط State فرم را مدیریت می‌کند.
// ذخیره اطلاعات از طریق Reminder Context انجام می‌شود.
// در آینده به Reminder API متصل خواهد شد.


"use client";


import { useState } from "react";


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







  // مدیریت تغییر Input ها
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







  // ثبت Reminder
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
        rounded-3xl
        border
        border-[#E7DED2]
        bg-[#FFFCF7]
        p-6
        flex
        flex-col
        gap-5
      "

    >



      <div>


        <h2 className="text-lg font-semibold text-[#292524]">

          Create Reminder

        </h2>



        <p className="mt-1 text-sm text-[#78716C]">

          Never miss an important activity.

        </p>


      </div>






      <Input

        label="Reminder Title"

        name="title"

        placeholder="Example: Read book"

        value={reminder.title}

        onChange={handleChange}

      />






      <Input

        label="Reminder Time"

        name="time"

        placeholder="Example: 18:00"

        value={reminder.time}

        onChange={handleChange}

      />






      <Button type="submit">

        Save Reminder

      </Button>




    </form>

  );

}