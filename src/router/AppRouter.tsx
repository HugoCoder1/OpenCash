import { Route, Routes } from "react-router";
import HomePage from "../pages/home";
import DashboardPage from "@/pages/dashboard";
import ProfilePage from "@/pages/profile";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}
