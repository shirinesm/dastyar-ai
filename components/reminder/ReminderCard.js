// نمایش یک Reminder
// در نسخه Demo داده‌ها ثابت هستند.
// در آینده به Notification Service متصل خواهد شد.


export default function ReminderCard({
    title,
    time,
  }) {
  
  
    return (
  
      <div
        className="
          rounded-3xl
          border
          border-[#E7DED2]
          bg-[#FFFCF7]
          p-5
        "
      >
  
  
        <div className="flex items-center justify-between">
  
  
          <h3 className="font-semibold text-[#292524]">
            {title}
          </h3>
  
  
          <span
            className="
              rounded-full
              bg-[#EDE9FE]
              px-3
              py-1
              text-xs
              font-medium
              text-[#6D5DFB]
            "
          >
  
            {time}
  
          </span>
  
  
        </div>
  
  
        <p className="mt-3 text-sm text-[#78716C]">
  
          Stay consistent with your daily routine.
  
        </p>
  
  
      </div>
  
    );
  
  }