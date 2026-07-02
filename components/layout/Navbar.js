// Component اصلی نوار بالایی اپلیکیشن
// نسخه Premium Design System

import {
  Bell,
  Search,
} from "lucide-react";

import MobileMenu from "./MobileMenu";

export default function Navbar() {

  return (

    <header
      className="
        sticky
        top-5
        z-50
        mx-auto
        mb-8
        flex
        max-w-[1500px]
        items-center
        justify-between
        rounded-[28px]
        border
        border-white/50
        bg-white/60
        px-7
        py-4
        backdrop-blur-2xl
        shadow-[0_12px_40px_rgba(0,0,0,.06)]
      "
    >

      {/* Logo */}

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-[#8878F6]
            to-[#7262EE]
            text-lg
            font-bold
            text-white
            shadow-lg
            shadow-violet-200
          "
        >

          D

        </div>

        <div>

          <h1
            className="
              text-lg
              font-semibold
              text-[#2C2825]
            "
          >

            Dastyar

          </h1>

          <p
            className="
              text-xs
              text-[#8C837B]
            "
          >

            AI Productivity

          </p>

        </div>

      </div>





      {/* Center */}

      <div
        className="
          hidden
          lg:flex
          items-center
          gap-3
          rounded-2xl
          bg-[#F8F4EF]
          px-4
          py-3
          min-w-[320px]
        "
      >

        <Search
          size={18}
          className="text-[#A39B92]"
        />

        <input

          placeholder="Search..."

          className="
            w-full
            bg-transparent
            outline-none
            text-sm
            placeholder:text-[#A39B92]
          "

        />

      </div>







      {/* Right */}

      <div
        className="
          flex
          items-center
          gap-4
        "
      >

        <button
          className="
            hidden
            md:flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-[#F8F4EF]
            transition
            hover:bg-[#EEE8DF]
          "
        >

          <Bell
            size={18}
            className="text-[#6E655E]"
          />

        </button>





        <MobileMenu />





        <div
          className="
            hidden
            sm:flex
            items-center
            gap-3
          "
        >

          <div
            className="
              text-right
            "
          >

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
                text-[#8C837B]
              "
            >

              Stay productive

            </p>

          </div>





          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-[#8D7EF8]
              to-[#7262EE]
              font-semibold
              text-white
            "
          >

            S

          </div>

        </div>

      </div>

    </header>

  );

}