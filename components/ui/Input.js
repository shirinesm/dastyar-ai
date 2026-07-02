// Input عمومی پروژه
// طراحی شده بر اساس Design System Dastyar

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

      {label && (

        <label

          htmlFor={name}

          className="
            text-sm
            font-medium
            text-[#4E463F]
          "

        >

          {label}

        </label>

      )}

      <input

        id={name}

        name={name}

        type={type}

        placeholder={placeholder}

        value={value}

        onChange={onChange}

        disabled={disabled}

        className="
          h-12
          rounded-2xl
          border
          border-[#E7DED2]
          bg-[#FFFDF9]
          px-4
          text-[15px]
          text-[#2C2825]
          placeholder:text-[#A59C94]
          outline-none
          transition-all
          duration-200
          focus:border-[#7C6CF2]
          focus:ring-4
          focus:ring-[#EEEAFE]
          disabled:cursor-not-allowed
          disabled:opacity-50
        "

      />

    </div>

  );

}