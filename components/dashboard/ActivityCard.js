// Component نمایش یک فعالیت روزانه کاربر

import Card from "../ui/Card";

export default function ActivityCard({
  title,
  duration,
  status,
}) {
  return (
    <Card>
      <div className="flex flex-col gap-3">

        {/* عنوان فعالیت */}
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        {/* مدت زمان فعالیت */}
        <p className="text-sm text-gray-600">
          Duration: {duration}
        </p>

        {/* وضعیت فعالیت */}
        <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
          {status}
        </span>

      </div>
    </Card>
  );
}