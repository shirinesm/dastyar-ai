import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ActivityProvider } from "../context/ActivityContext";

// تنظیم فونت اصلی پروژه
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// تنظیم فونت مونو
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// اطلاعات متادیتای سایت
export const metadata = {
  title: "Dastyar",
  description: "AI powered personal productivity assistant",
};

// Layout اصلی برنامه
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <ActivityProvider>
         {children}
       </ActivityProvider>

      </body>
    </html>
  );
}