// Component عمومی Button
// تمام دکمه‌های پروژه از این Component استفاده می‌کنند.
// هدف: یکپارچه‌سازی ظاهر و رفتار دکمه‌ها

export default function Button({
    children,
    type = "button",
    variant = "primary",
    onClick,
    disabled = false,
  }) {
  
    const variants = {
      primary:
        "bg-indigo-600 text-white hover:bg-indigo-700",
  
      secondary:
        "bg-gray-100 text-gray-700 hover:bg-gray-200",
  
      danger:
        "bg-red-500 text-white hover:bg-red-600",
    };
  
  
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
          rounded-xl
          px-5
          py-3
          text-sm
          font-medium
          transition
          duration-200
          disabled:cursor-not-allowed
          disabled:opacity-50
          ${variants[variant]}
        `}
      >
        {children}
      </button>
    );
  }