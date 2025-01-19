import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserHome from "./pages/user/Home";
import Profile from "./pages/user/Profile";
import QRScanner from "./pages/user/QRScanner";
import UserLayout from "./layouts/UserLayouts";
import ProtectedRoute from "./components/ProtectedRoute"; // Ensure this import exists

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Route */}
            <Route path="/login" element={<Login />} />

            {/* Protected Dashboard Route */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* User Routes with Layout */}
            <Route path="/user" element={<UserLayout />}>
              <Route path="home" element={<UserHome />} />
              <Route path="profile" element={<Profile />} />
              <Route path="scanner" element={<QRScanner />} />
            </Route>

            {/* Redirect Root to Login */}
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;