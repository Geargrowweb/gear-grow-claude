import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search, ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Button from '../common/Button';

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const categories = [
    { name: 'Rotavator Blades', href: '/shop?category=blades' },
    { name: 'Tractor Attachments', href: '/shop?category=attachments' },
    { name: 'Spare Parts', href: '/shop?category=parts' },
    { name: 'Gearbox', href: '/shop?category=gearbox' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <a href="tel:+919876543210" className="flex items-center hover:text-primary-400">
                <Phone size={14} className="mr-1" />
                +91 98765 43210
              </a>
              <a href="mailto:info@geargrow.com" className="flex items-center hover:text-primary-400">
                <Mail size={14} className="mr-1" />
                info@geargrow.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden md:flex items-center">
                <MapPin size={14} className="mr-1" />
                Punjab, India
              </span>
              <div className="flex space-x-3">
                <a href="#" className="hover:text-primary-400"><Facebook size={16} /></a>
                <a href="#" className="hover:text-primary-400"><Twitter size={16} /></a>
                <a href="#" className="hover:text-primary-400"><Instagram size={16} /></a>
                <a href="#" className="hover:text-primary-400"><Youtube size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-primary-600">Gear Grow</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-primary-600 font-medium transition-colors ${
                    location.pathname === item.href ? 'text-primary-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Categories Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-primary-600 font-medium transition-colors">
                  Categories
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-700 hover:text-primary-600"
              >
                <Search size={20} />
              </button>

              {/* User Account */}
              <Link to="/login" className="p-2 text-gray-700 hover:text-primary-600">
                <User size={20} />
              </Link>

              {/* Cart */}
              <Link to="/cart" className="relative p-2 text-gray-700 hover:text-primary-600">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-200 py-4">
            <div className="container mx-auto px-4">
              <form className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary-600"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>
          </div>
        )}
      </header>      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 text-gray-700 hover:text-primary-600 font-medium ${
                    location.pathname === item.href ? 'text-primary-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="mt-4 pt-4 border-t">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Categories</h3>
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-gray-700 hover:text-primary-600"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" fullWidth>
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" fullWidth className="mt-3">
                    Register
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Gear Grow</h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner for premium agricultural machinery and rotavator products. Quality and innovation for modern farming.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Youtube size={20} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><Link to="/shop?category=blades" className="text-gray-400 hover:text-white">Rotavator Blades</Link></li>
                <li><Link to="/shop?category=attachments" className="text-gray-400 hover:text-white">Tractor Attachments</Link></li>
                <li><Link to="/shop?category=parts" className="text-gray-400 hover:text-white">Spare Parts</Link></li>
                <li><Link to="/shop?category=gearbox" className="text-gray-400 hover:text-white">Gearbox</Link></li>
                <li><Link to="/shop?category=new" className="text-gray-400 hover:text-white">New Arrivals</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-gray-400" />
                  <span className="text-gray-400">
                    123 Industrial Area, Phase 2<br />
                    Ludhiana, Punjab 141003<br />
                    India
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-3 flex-shrink-0 text-gray-400" />
                  <a href="tel:+919876543210" className="text-gray-400 hover:text-white">+91 98765 43210</a>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-3 flex-shrink-0 text-gray-400" />
                  <a href="mailto:info@geargrow.com" className="text-gray-400 hover:text-white">info@geargrow.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Gear Grow. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
                <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
                <Link to="/refund" className="text-gray-400 hover:text-white">Refund Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;