import { Outlet, Link, useNavigate } from "react-router-dom";
import { Home, QrCode, User, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const UserLayout = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    // Add logout logic here
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=50&h=50&fit=crop"
                alt="Logo"
                className="h-8 w-8 rounded-lg"
              />
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  <Link
                    to="/user/home"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                  >
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                  <Link
                    to="/user/scanner"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                  >
                    <QrCode className="h-4 w-4" />
                    QR Scanner
                  </Link>
                  <Link
                    to="/user/profile"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600">
                <Menu className="h-4 w-4" />
              </button>
            </div>
            <Button
              variant="ghost"
              className="hidden md:flex items-center gap-2"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/user/home"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                to="/user/scanner"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <QrCode className="h-4 w-4" />
                QR Scanner
              </Link>
              <Link
                to="/user/profile"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                Profile
              </Link>
              <Button
                variant="ghost"
                className="flex items-center gap-2 w-full"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;