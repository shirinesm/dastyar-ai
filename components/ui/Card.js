// Component عمومی Card
// تمام کارت‌های پروژه از این Component استفاده می‌کنند.
// این فایل پایه Design System پروژه است.

export default function Card({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/40
        bg-white/70
        backdrop-blur-xl
        p-6
        shadow-[0_10px_40px_rgba(15,23,42,0.08)]
        transition-all
        duration-300
        ${
          hover
            ? "hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(124,92,242,0.18)]"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}