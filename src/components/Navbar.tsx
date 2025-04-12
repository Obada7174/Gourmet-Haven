import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 text-xl font-bold text-gray-900">
                Gourmet Haven
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/menu"
                  className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  Menu
                </Link>
                <Link
                  to="/reservations"
                  className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  Reservations
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="hidden sm:flex sm:items-center sm:space-x-4">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>

            {/* Menu Icon for Mobile */}
            <div className="sm:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40" onClick={() => setIsMenuOpen(false)}>
          <div
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Gourmet Haven</span>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-2">
              <Link to="" onClick={() => setIsMenuOpen(false)} className="text-gray-900 text-sm">
                Home
              </Link>
              <Link to="menu" onClick={() => setIsMenuOpen(false)} className="text-gray-900 text-sm">
                Menu
              </Link>
              <Link to="reservations" onClick={() => setIsMenuOpen(false)} className="text-gray-900 text-sm">
                Reservations
              </Link>
              <Link to="contact" onClick={() => setIsMenuOpen(false)} className="text-gray-900 text-sm">
                Contact
              </Link>
            </nav>
            <div className="flex space-x-2 mt-6">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
