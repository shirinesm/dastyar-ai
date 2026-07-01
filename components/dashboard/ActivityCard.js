// کارت نمایش فعالیت روزانه
// مسئول نمایش عنوان، مدت زمان و وضعیت Activity است.


export default function ActivityCard({
  title,
  duration,
  status,
}) {

  return (

    <div className="rounded-3xl bg-[#FFFCF7] p-6 shadow-sm">


      <div className="flex items-start justify-between">


        <h3 className="text-lg font-semibold text-[#292524]">
          {title}
        </h3>


        <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-medium text-[#65A30D]">
          {status}
        </span>


      </div>


      <p className="mt-4 text-sm text-[#78716C]">
        Duration: {duration}
      </p>


    </div>

  );

}