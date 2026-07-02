// Button عمومی پروژه
// استفاده در کل Dashboard

export default function Button({

  children,

  type = "button",

  variant = "primary",

  onClick,

  disabled = false,

}) {

  const variants = {

    primary: `
      bg-[#7C6CF2]
      text-white
      hover:bg-[#6C5CF0]
    `,

    secondary: `
      bg-[#F3EBDD]
      text-[#2C2825]
      hover:bg-[#E9E0D3]
    `,

    danger: `
      bg-[#EF4444]
      text-white
      hover:bg-[#DC2626]
    `,

  };

  return (

    <button

      type={type}

      onClick={onClick}

      disabled={disabled}

      className={`
        h-12
        w-full
        rounded-2xl
        font-medium
        text-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-md
        active:translate-y-0
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant]}
      `}

    >

      {children}

    </button>

  );

}