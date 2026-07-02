// Component عمومی Button
// Premium Design System

export default function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
}) {

  const variants = {

    primary:
      `
      bg-gradient-to-r
      from-[#8D7EF8]
      to-[#7262EE]
      text-white
      shadow-lg
      shadow-violet-200
      hover:-translate-y-1
      hover:shadow-xl
      `,

    secondary:
      `
      bg-[#F8F4EF]
      text-[#5F5750]
      border
      border-[#E7DED2]
      hover:bg-white
      `,

    danger:
      `
      bg-red-500
      text-white
      hover:bg-red-600
      `,

  };

  return (

    <button

      type={type}

      onClick={onClick}

      disabled={disabled}

      className={`
        h-14
        rounded-2xl
        px-6
        text-sm
        font-semibold
        transition-all
        duration-300
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant]}
      `}

    >

      {children}

    </button>

  );

}