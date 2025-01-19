import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const UserFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Dish App</h3>
            <p className="text-gray-400 mb-4">Discover, share, and enjoy delicious meals with Dish App.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/home" className="hover:text-gray-300 transition-colors">Home</Link></li>
              <li><Link to="/profile" className="hover:text-gray-300 transition-colors">Profile</Link></li>
              <li><Link to="/qrscanner" className="hover:text-gray-300 transition-colors">QR Scanner</Link></li>
              <li><Link to="/about" className="hover:text-gray-300 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">123 Foodie Street, Tasty City</p>
            <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@dishapp.com</p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest recipes and features.</p>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-gray-700 text-white border-gray-600" />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 transition-colors">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex justify-between items-center flex-col md:flex-row">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Dish App. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.dishapp.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Visit our website">
                <Globe size={20} />
              </a>
              <a href="mailto:info@dishapp.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email us">
                <Mail size={20} />
              </a>
              <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors" aria-label="Call us">
                <Phone size={20} />
              </a>
              <a href="https://maps.google.com/?q=123+Foodie+Street,+Tasty+City" className="text-gray-400 hover:text-white transition-colors" aria-label="Find us on map">
                <MapPin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;