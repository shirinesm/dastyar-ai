// Design Tokens اصلی پروژه Dastyar
// تمام مقادیر طراحی مرکزی پروژه در این فایل نگهداری می‌شوند.
// هدف: جلوگیری از پراکندگی رنگ‌ها و استانداردسازی UI

const theme = {
    colors: {
      // رنگ اصلی برند Dastyar
      primary: "#4F46E5",
  
      // پس‌زمینه اصلی صفحات
      background: "#F8FAFC",
  
      // رنگ سطح کارت‌ها و پنل‌ها
      surface: "#FFFFFF",
  
      // متن اصلی
      textPrimary: "#111827",
  
      // متن توضیحات
      textSecondary: "#6B7280",
  
      // وضعیت موفقیت
      success: "#10B981",
  
      // وضعیت هشدار
      warning: "#F59E0B",
  
      // رنگ خط‌ها و Borderها
      border: "#E5E7EB",
    },
  
  
    // استانداردهای گردی گوشه‌ها
    radius: {
      small: "8px",
      medium: "12px",
      large: "16px",
    },
  
  
    // استاندارد فاصله‌ها
    spacing: {
      small: "8px",
      medium: "16px",
      large: "24px",
      xlarge: "32px",
    },
  
  
    // تنظیمات تایپوگرافی
    typography: {
      heading: "font-semibold",
      body: "font-normal",
    },
  };
  
  
  export default theme;