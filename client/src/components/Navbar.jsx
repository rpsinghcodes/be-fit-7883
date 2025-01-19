import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        window.location.href = "/login"; // Redirect to login page
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=50&h=50&fit=crop"
                alt="Logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Menu Items
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="btn-primary" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Menu Items
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2">
              <button className="btn-primary w-full" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;