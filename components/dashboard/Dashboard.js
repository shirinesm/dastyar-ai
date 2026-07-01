// Component اصلی Dashboard
// مسئول نمایش نمای کلی وضعیت کاربر، فعالیت‌ها و خلاصه روزانه است.
// این بخش فقط Layout و Composition را مدیریت می‌کند.
// منطق داده‌ها در Hook و Context نگهداری خواهد شد.


import ScoreCard from "./ScoreCard";
import DailySummary from "./DailySummary";

import ActivityForm from "../activity/ActivityForm";
import ActivityList from "../activity/ActivityList";

import HeroSection from "./HeroSection";
import AIAssistantCard from "./AIAssistantCard";

import ReminderForm from "../reminder/ReminderForm";
import ReminderList from "../reminder/ReminderList";




export default function Dashboard() {


  return (


    <main
      className="
        min-h-full
        bg-[#FAF7F2]
        p-6
        md:p-8
      "
    >



      {/* بخش معرفی روز */}
      <HeroSection />






      {/* وضعیت کلی عملکرد */}
      <section className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">


        <ScoreCard
          title="Daily Progress"
          value="85%"
          description="Great productivity today"
        />


        <ScoreCard
          title="Focus Level"
          value="75%"
          description="Your focus is improving"
        />


        <ScoreCard
          title="AI Value Score"
          value="90%"
          description="High value activities completed"
        />


      </section>







      {/* فعالیت‌های امروز */}
      <section className="mt-8">


        <div className="mb-4">


          <h2 className="text-xl font-semibold text-[#292524]">
            Today's Activities
          </h2>


          <p className="mt-1 text-sm text-[#78716C]">
            Your completed tasks and progress
          </p>


        </div>



        <ActivityList />


      </section>








      {/* ثبت فعالیت جدید */}
      <section className="mt-8">


        <div className="mb-4">


          <h2 className="text-xl font-semibold text-[#292524]">
            Quick Add
          </h2>


          <p className="mt-1 text-sm text-[#78716C]">
            Add your activity and keep your progress updated.
          </p>


        </div>



        <ActivityForm />


      </section>








      {/* دستیار هوشمند */}
      <section className="mt-8">


        <AIAssistantCard />


      </section>








      {/* Reminder */}

<section className="mt-8">


<div className="mb-4">


  <h2 className="text-xl font-semibold text-[#292524]">
    Reminders
  </h2>


  <p className="mt-1 text-sm text-[#78716C]">
    Keep track of your important tasks.
  </p>


</div>



<ReminderForm />


<ReminderList />


</section>







      {/* خلاصه روز */}
      <section className="mt-8">


        <DailySummary

          completedActivities={2}

          message="Your day was productive. Keep maintaining this routine."

        />


      </section>




    </main>


  );


}