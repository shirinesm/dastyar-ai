// Component عمومی کارت برای استفاده در بخش‌های مختلف اپلیکیشن

export default function Card({ children, className = "" }) {
    return (
      <div
        className={`
          rounded-2xl
          bg-white
          p-6
          shadow-sm
          border
          border-gray-100
          ${className}
        `}
      >
        {children}
      </div>
    );
  }