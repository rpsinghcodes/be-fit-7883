import { Link } from "react-router-dom";
import { useState } from "react"; // Added

const UserNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Added

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Dish App
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/qr-scanner" 
              className="text-gray-700 hover:text-gray-900"
            >
              Scanner
            </Link>
            <Link 
              to="/profile" 
              className="text-gray-700 hover:text-gray-900"
            >
              Profile
            </Link>
            <Link 
              to="/dashboard" 
              className="text-gray-700 hover:text-gray-900"
            >
              Dashboard
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/qr-scanner" 
                  className="block text-gray-700 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)} // Optional: Close menu on link click
                >
                  Scanner
                </Link>
              </li>
              <li>
                <Link 
                  to="/profile" 
                  className="block text-gray-700 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)} // Optional: Close menu on link click
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard" 
                  className="block text-gray-700 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)} // Optional: Close menu on link click
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default UserNavBar;