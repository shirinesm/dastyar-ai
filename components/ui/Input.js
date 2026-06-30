// Component عمومی Input
// برای تمام فیلدهای ورودی پروژه استفاده می‌شود.
// هدف: یکپارچه‌سازی فرم‌ها و جلوگیری از تکرار کد UI

export default function Input({
    type = "text",
    placeholder = "",
    value,
    onChange,
    label,
    name,
    disabled = false,
  }) {
    return (
      <div className="flex flex-col gap-2">
  
        {/* عنوان فیلد */}
        {label && (
          <label
            htmlFor={name}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
  
  
        {/* ورودی اصلی */}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="
            rounded-xl
            border
            border-gray-200
            bg-white
            px-4
            py-3
            text-sm
            text-gray-900
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-2
            focus:ring-indigo-100
            disabled:cursor-not-allowed
            disabled:bg-gray-100
          "
        />
  
      </div>
    );
  }