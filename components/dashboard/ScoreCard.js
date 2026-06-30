// Component نمایش امتیازهای روزانه کاربر

import Card from "../ui/Card";

export default function ScoreCard({
  title,
  value,
  description,
}) {
  return (
    <Card>
      <div className="flex flex-col gap-3">
        {/* عنوان شاخص */}
        <h3 className="text-sm text-gray-500">
          {title}
        </h3>

        {/* مقدار اصلی */}
        <p className="text-4xl font-bold text-gray-900">
          {value}
        </p>

        {/* توضیح کوتاه */}
        <p className="text-sm text-gray-600">
          {description}
        </p>
      </div>
    </Card>
  );
}