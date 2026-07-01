// Custom Hook دسترسی به Activity Context
// این Hook فقط برای ساده‌تر شدن Import ها ساخته شده است.

"use client";

import { useActivityContext } from "../context/ActivityContext";


export default function useActivities() {

  return useActivityContext();

}