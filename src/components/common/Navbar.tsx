import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search, Tractor } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { authState, logout } = useAuth();
  const { cart } = useCart();
  
  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle search form submission
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled || location.pathname !== '/' 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Tractor className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-primary-600">Gear Grow</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                location.pathname === '/' ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                location.pathname === '/shop' ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                location.pathname === '/about' ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                location.pathname === '/contact' ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Search, Cart, Account */}
          <div className="flex items-center space-x-4">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
              <input
                type="text"
                name="search"
                placeholder="Search products..."
                className="pl-3 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent text-sm"
              />
              <button 
                type="submit"
                className="absolute right-3 text-gray-500 hover:text-primary-600"
              >
                <Search size={18} />
              </button>
            </form>
            
            {/* Cart */}
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-primary-600">
              <ShoppingCart size={22} />
              {cart.items.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-accent-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cart.items.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>
            
            {/* Account / Login */}
            {authState.isAuthenticated ? (
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="p-2 text-gray-700 hover:text-primary-600"
                >
                  <User size={22} />
                </button>
                
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-medium">{authState.user?.name}</p>
                      <p className="text-xs text-gray-500">{authState.user?.email}</p>
                    </div>
                    <Link 
                      to="/account" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      My Account
                    </Link>
                    <Link 
                      to="/orders" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      My Orders
                    </Link>
                    {authState.user?.role === 'admin' && (
                      <Link 
                        to="/admin" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    <button 
                      onClick={() => {
                        logout();
                        setIsProfileOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/login" 
                className="text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                Login
              </Link>
            )}
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="px-4 py-3">
            <form onSubmit={handleSearch} className="flex items-center relative mb-4">
              <input
                type="text"
                name="search"
                placeholder="Search products..."
                className="w-full pl-3 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent text-sm"
              />
              <button 
                type="submit"
                className="absolute right-3 text-gray-500 hover:text-primary-600"
              >
                <Search size={18} />
              </button>
            </form>
            
            <nav className="space-y-4 pb-4">
              <Link 
                to="/" 
                className={`block text-sm font-medium ${
                  location.pathname === '/' ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className={`block text-sm font-medium ${
                  location.pathname === '/shop' ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className={`block text-sm font-medium ${
                  location.pathname === '/about' ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`block text-sm font-medium ${
                  location.pathname === '/contact' ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;