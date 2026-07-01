// Design Token های اصلی پروژه Dastyar
// تمام رنگ‌ها، Radius و Shadow ها از این فایل مدیریت می‌شوند.
// هدف: جلوگیری از پراکندگی استایل‌ها در Component ها.

const theme = {

  colors: {

    // رنگ اصلی برند - AI Assistant
    primary: "#6D5DFB",

    // Accent نرم‌تر برای بخش‌های تعاملی
    accent: "#8B7CF6",


    // پس زمینه اصلی اپلیکیشن
    background: "#FAF7F2",


    // سطح کارت‌ها
    surface: "#FFFCF7",


    // سطح ثانویه
    beige: "#F3EBDD",


    // متن اصلی
    textPrimary: "#292524",


    // متن توضیحی
    textSecondary: "#78716C",


    // وضعیت موفقیت
    success: "#65A30D",


    // وضعیت هشدار / Reminder
    warning: "#D97706",

  },


  // Radius استاندارد Component ها
  radius: {

    card: "1rem",

    button: "0.75rem",

    full: "9999px",

  },


  // Shadow های بسیار محدود برای حس Premium
  shadows: {

    card: "0 8px 30px rgba(41, 37, 36, 0.06)",

  },


};


export default theme;