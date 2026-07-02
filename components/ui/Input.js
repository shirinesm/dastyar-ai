// Input عمومی پروژه
// Premium Design System

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

    <div className="flex flex-col gap-3">

      {label && (

        <label
          htmlFor={name}
          className="
            text-sm
            font-medium
            text-[#5F5750]
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
          h-14
          rounded-2xl
          border
          border-[#E6DDD2]
          bg-[#FFFEFC]
          px-5
          text-[15px]
          text-[#2C2825]
          outline-none
          transition-all
          duration-300

          placeholder:text-[#B2AAA2]

          hover:border-[#D8CDC1]

          focus:border-[#8D7EF8]
          focus:ring-4
          focus:ring-violet-100

          disabled:bg-[#F2EFEA]
          disabled:opacity-70
          focus:shadow-lg

          focus:shadow-violet-100

          transition-all

          duration-300
        "

      />

    </div>

  );

}