// Component اصلی Dashboard
// این فایل تمام بخش‌های صفحه اصلی را کنار هم قرار می‌دهد

import ScoreCard from "./ScoreCard";
import ActivityCard from "./ActivityCard";
import DailySummary from "./DailySummary";
import ActivityForm from "../activity/ActivityForm";

export default function Dashboard() {
  return (
    <main className="flex flex-col gap-6 p-6">

      {/* بخش امتیازهای روزانه */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <ScoreCard
          title="Daily Score"
          value="85%"
          description="Great productivity today"
        />

        <ScoreCard
          title="Focus Level"
          value="75%"
          description="Your focus is improving"
        />

        <ScoreCard
          title="Value Progress"
          value="90%"
          description="High value activities completed"
        />
      </section>


      {/* فعالیت‌های روزانه */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">

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

      </section>


      {/* خلاصه روز */}
      <section>
        <DailySummary
          completedActivities={2}
          message="Your day was productive. Keep maintaining this routine."
        />
      </section>

      {/* فرم ثبت فعالیت روزانه */}
      <div className="mt-8">
         <ActivityForm />
      </div>

    </main>
  );
}