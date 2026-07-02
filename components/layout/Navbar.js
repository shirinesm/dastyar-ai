// Component اصلی نوار بالایی اپلیکیشن
// مسئول نمایش برند، وضعیت کاربر و منوی موبایل است.

import {
  Sparkles,
} from "lucide-react";

import MobileMenu from "./MobileMenu";

export default function Navbar() {

  return (

    <header
      className="
        sticky
        top-0
        z-50
        flex
        items-center
        justify-between
        border-b
        border-[#E7DED2]
        bg-[#FFFCF7]/90
        px-6
        py-4
        backdrop-blur-md
      "
    >

      {/* برند */}
      <div className="flex items-center gap-3">


        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-[#7C6CF2]
            text-white
            shadow-sm
          "
        >

          <Sparkles size={20} />

        </div>



        <div>

          <h1
            className="
              text-lg
              font-semibold
              tracking-tight
              text-[#2C2825]
            "
          >
            Dastyar
          </h1>


          <p
            className="
              text-xs
              text-[#7D746D]
            "
          >
            AI Productivity Assistant
          </p>

        </div>

      </div>





      {/* سمت راست Navbar */}
      <div className="flex items-center gap-4">


        {/* فقط موبایل */}
        <MobileMenu />


        {/* متن خوش‌آمد */}
        <div className="hidden text-right lg:block">

          <p
            className="
              text-sm
              font-medium
              text-[#2C2825]
            "
          >
            Welcome back
          </p>


          <p
            className="
              text-xs
              text-[#7D746D]
            "
          >
            Build consistency today.
          </p>

        </div>





        {/* Avatar */}
        <button
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-[#E7DED2]
            bg-[#F6F2EB]
            font-semibold
            text-[#2C2825]
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:border-[#7C6CF2]
            hover:bg-white
          "
        >

          S

        </button>

      </div>

    </header>

  );

}