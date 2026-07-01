// خلاصه عملکرد روزانه کاربر
// نمایش تعداد فعالیت‌ها و پیام انگیزشی.


export default function DailySummary({
  completedActivities,
  message,
}) {

  return (

    <div className="rounded-3xl border border-[#E7DED2] bg-[#F3EBDD] p-6">


      <h2 className="text-xl font-semibold text-[#292524]">
        Today's Summary
      </h2>


      <p className="mt-3 text-sm text-[#78716C]">
        Completed Activities: {completedActivities}
      </p>


      <div className="mt-5 rounded-2xl bg-[#FFFCF7] p-4">

        <p className="text-sm text-[#292524]">
          {message}
        </p>

      </div>


    </div>

  );

}