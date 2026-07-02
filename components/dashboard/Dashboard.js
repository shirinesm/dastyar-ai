// Component اصلی Dashboard
// مسئول نمایش Layout کلی Dashboard است.

import ScoreCard from "./ScoreCard";
import HeroSection from "./HeroSection";
import DailySummary from "./DailySummary";
import AIAssistantCard from "./AIAssistantCard";

import ActivityList from "../activity/ActivityList";
import ActivityForm from "../activity/ActivityForm";

import ReminderForm from "../reminder/ReminderForm";
import ReminderList from "../reminder/ReminderList";

export default function Dashboard() {

  return (

    <main
    className="
      relative
      min-h-screen
      overflow-hidden
      px-6
      py-10
      lg:px-10
    "
  >
    <div
  className="
    absolute
    left-[-180px]
    top-[-120px]
    h-[520px]
    w-[520px]
    rounded-full
    bg-violet-300/10
    blur-[120px]
  "
/>

<div
  className="
    absolute
    right-[-220px]
    top-[220px]
    h-[480px]
    w-[480px]
    rounded-full
    bg-fuchsia-200/10
    blur-[140px]
  "
/>

<div
  className="
    absolute
    bottom-[-180px]
    left-1/2
    h-[500px]
    w-[500px]
    -translate-x-1/2
    rounded-full
    bg-indigo-200/10
    blur-[150px]
  "
/>

<div
  className="
    relative
    z-10
    mx-auto
    max-w-[1450px]
  "
>

      {/* Hero */}

      <HeroSection />



      {/* Score Cards */}

      <section
        className="
          mt-10
          grid
          gap-5
          lg:grid-cols-3
        "
      >

        <ScoreCard
          title="Daily Progress"
          value="85%"
          description="Great productivity today."
          progress={85}
          variant="progress"
        />

        <ScoreCard
          title="Focus Level"
          value="75%"
          description="Your focus is improving."
          progress={75}
          variant="focus"
        />

        <ScoreCard
          title="AI Value Score"
          value="90%"
          description="High value activities completed."
          progress={90}
          variant="ai"
        />

      </section>





      {/* Main Dashboard */}

      <section
        className="
          mt-10
          grid
          gap-6
          xl:grid-cols-12
        "
      >

        {/* ستون چپ */}

        <div
          className="
            xl:col-span-8
            space-y-6
          "
        >

          {/* Activities */}

          <section>

            <div className="mb-5">

              <h2 className="text-xl font-semibold text-[#2C2825]">

                Today's Activities

              </h2>

              <p className="mt-1 text-sm text-[#7D746D]">

                Track everything you've completed today.

              </p>

            </div>

            <ActivityList />

          </section>





          {/* پایین ستون چپ */}

          <div
            className="
              grid
              gap-6
              lg:grid-cols-2
            "
          >

            <ActivityForm />

            <ReminderForm />

          </div>

        </div>







        {/* ستون راست */}

        <div
          className="
            xl:col-span-4
            space-y-6
          "
        >

          <AIAssistantCard />

          <section>

            <div className="mb-5">

              <h2 className="text-xl font-semibold text-[#2C2825]">

                Reminders

              </h2>

              <p className="mt-1 text-sm text-[#7D746D]">

                Stay ahead of your schedule.

              </p>

            </div>

            <ReminderList />

          </section>

          <DailySummary

            completedActivities={2}

            message="Your day was productive. Keep maintaining this routine."

          />

        </div>

      </section>
      </div>
    </main>

  );

}