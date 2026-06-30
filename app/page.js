// صفحه اصلی Dastyar
// ترکیب Layout اصلی و Dashboard

import MainLayout from "../components/layout/MainLayout";
import Dashboard from "../components/dashboard/Dashboard";

export default function Home() {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
}