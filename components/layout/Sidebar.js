// Component منوی کناری اپلیکیشن
// مسئول Navigation بین بخش‌های اصلی Dastyar است

export default function Sidebar() {
    const menuItems = [
      "Dashboard",
      "Activities",
      "Analytics",
      "AI Assistant",
      "Settings",
    ];
  
    return (
      <aside className="hidden min-h-screen w-64 border-r border-gray-100 bg-white p-6 md:block">
  
        {/* عنوان منو */}
        <h2 className="mb-6 text-sm font-semibold text-gray-500">
          Menu
        </h2>
  
  
        {/* آیتم‌های Navigation */}
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
  
      </aside>
    );
  }