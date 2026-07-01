// Component اصلی Dashboard
// مسئول نمایش نمای کلی وضعیت کاربر، فعالیت‌ها و خلاصه روزانه است.
// این بخش فقط Layout و Composition را مدیریت می‌کند.
// منطق داده‌ها در Hook و Context نگهداری خواهد شد.


import ScoreCard from "./ScoreCard";
import ActivityCard from "./ActivityCard";
import DailySummary from "./DailySummary";
import ActivityForm from "../activity/ActivityForm";


export default function Dashboard() {

  return (

    <main className="min-h-full bg-[#FAF7F2] p-6 md:p-8">


      {/* بخش خوش آمدگویی و معرفی وضعیت روز */}
      <section className="mb-8">

        <p className="text-sm text-[#78716C]">
          Good evening 👋
        </p>


        <h1 className="mt-2 text-3xl font-semibold text-[#292524]">
          Let's make today productive
        </h1>


        <p className="mt-3 max-w-xl text-sm text-[#78716C]">
          Track your activities, improve your focus and build better routines.
        </p>

      </section>



      {/* وضعیت کلی عملکرد */}
      <section className="grid grid-cols-1 gap-5 md:grid-cols-3">


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



        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">


          <ActivityCard
            title="Learn React"
            duration="2 hours"
            status="Completed"
          />


          <ActivityCard
            title="Workout"
            duration="1 hour"
            status="Completed"
          />


        </div>


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