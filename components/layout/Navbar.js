// Component اصلی نوار بالایی اپلیکیشن
// مسئول نمایش برند و اطلاعات پایه کاربر است

export default function Navbar() {
    return (
      <header className="flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4">
  
        {/* بخش برند */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold">
            D
          </div>
  
          <h1 className="text-xl font-semibold text-gray-900">
            Dastyar
          </h1>
        </div>
  
  
        {/* بخش اطلاعات کاربر */}
        <div className="flex items-center gap-3">
  
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