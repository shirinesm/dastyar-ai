// Component نمایش خلاصه عملکرد روزانه کاربر

import Card from "../ui/Card";

export default function DailySummary({
  completedActivities,
  message,
}) {
  return (
    <Card>
      <div className="flex flex-col gap-4">

        {/* عنوان بخش */}
        <h2 className="text-xl font-semibold text-gray-900">
          Today's Summary
        </h2>

        {/* تعداد فعالیت‌های انجام شده */}
        <p className="text-gray-600">
          Completed Activities: {completedActivities}
        </p>

        {/* پیام خلاصه */}
        <p className="rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
          {message}
        </p>

      </div>
    </Card>
  );
}