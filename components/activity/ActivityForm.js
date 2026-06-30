// فرم ثبت فعالیت روزانه
// مسئول دریافت اطلاعات فعالیت از کاربر است.
// در نسخه Demo داده‌ها داخل State نگهداری می‌شوند.
// در مراحل بعد به API و Database متصل خواهد شد.

"use client";

import { useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";

export default function ActivityForm() {

  // State مربوط به اطلاعات فرم
  const [activity, setActivity] = useState({
    title: "",
    duration: "",
  });


  // مدیریت تغییر مقدار Input ها
  const handleChange = (event) => {

    const { name, value } = event.target;

    setActivity((previous) => ({
      ...previous,
      [name]: value,
    }));

  };


  // ثبت فرم
  const handleSubmit = (event) => {

    event.preventDefault();

    console.log("New Activity:", activity);

    alert("Activity saved successfully");

  };


  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-6"
    >

      {/* عنوان فرم */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Add New Activity
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Track your daily progress
        </p>
      </div>


      {/* نام فعالیت */}
      <Input
        label="Activity Name"
        name="title"
        placeholder="Example: Reading"
        value={activity.title}
        onChange={handleChange}
      />


      {/* مدت زمان */}
      <Input
        label="Duration (minutes)"
        name="duration"
        type="number"
        placeholder="Example: 30"
        value={activity.duration}
        onChange={handleChange}
      />


      {/* ثبت اطلاعات */}
      <Button type="submit">
        Save Activity
      </Button>


    </form>
  );
}