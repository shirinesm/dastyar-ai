// نمایش شاخص‌های عملکرد کاربر
// این Component فقط مسئول نمایش یک Metric است.
// داده از بیرون دریافت می‌شود.


export default function ScoreCard({
  title,
  value,
  description,
}) {

  return (

    <div className="rounded-3xl bg-[#FFFCF7] p-6 shadow-sm">


      <p className="text-sm text-[#78716C]">
        {title}
      </p>


      <h3 className="mt-4 text-4xl font-semibold text-[#292524]">
        {value}
      </h3>


      <p className="mt-3 text-sm text-[#78716C]">
        {description}
      </p>


    </div>

  );

}