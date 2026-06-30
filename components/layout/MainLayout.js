// Layout اصلی اپلیکیشن
// مسئول مدیریت ساختار کلی صفحات داخلی Dastyar است

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* نوار بالایی برنامه */}
      <Navbar />


      {/* ساختار اصلی برنامه */}
      <div className="flex">

        {/* منوی کناری */}
        <Sidebar />


        {/* محتوای صفحات */}
        <main className="flex-1 p-6">
          {children}
        </main>

      </div>

    </div>
  );
}