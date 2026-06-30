// Component منوی موبایل
// مسئول نمایش Navigation در دستگاه‌های کوچک است

"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Dashboard",
    "Activities",
    "Reminders",
    "AI Assistant",
    "Analytics",
    "Settings",
  ];

  return (
    <div className="md:hidden">

      {/* دکمه باز کردن منو */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-xl bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700"
      >
        Menu
      </button>


      {/* منوی باز شده */}
      {isOpen && (
        <div className="absolute left-0 top-16 z-50 w-full border-b border-gray-100 bg-white p-6">

          <nav className="flex flex-col gap-2">

            {menuItems.map((item) => (
              <button
                key={item}
                className="rounded-xl px-4 py-3 text-left text-sm text-gray-700 transition hover:bg-gray-100"
              >
                {item}
              </button>
            ))}

          </nav>

        </div>
      )}

    </div>
  );
}