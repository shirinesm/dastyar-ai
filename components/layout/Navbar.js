// Component اصلی نوار بالایی اپلیکیشن
// مسئول نمایش برند، اطلاعات کاربر و منوی موبایل است

import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4">

      {/* بخش برند */}
      <div className="flex items-center gap-2">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
          D
        </div>

        <h1 className="text-xl font-semibold text-gray-900">
          Dastyar
        </h1>

      </div>


      {/* بخش سمت راست Navbar */}
      <div className="flex items-center gap-4">

        {/* منوی موبایل - فقط در اندازه موبایل نمایش داده می‌شود */}
        <MobileMenu />


        {/* اطلاعات کاربر */}
        <div className="hidden text-right sm:block">

          <p className="text-sm font-medium text-gray-900">
            Welcome back
          </p>

          <p className="text-xs text-gray-500">
            Stay productive today
          </p>

        </div>


        {/* پروفایل کاربر - نسخه Demo */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-700">
          S
        </div>

      </div>

    </header>
  );
}