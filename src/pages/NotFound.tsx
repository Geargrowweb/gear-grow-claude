import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mt-4">Page Not Found</h2>
          <p className="text-gray-600 mt-2">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link to="/">
            <Button size="lg" fullWidth leftIcon={<Home size={20} />}>
              Go to Homepage
            </Button>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-medium transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Go Back
          </button>
        </div>

        <div className="mt-12">
          <p className="text-gray-600 mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/shop" className="text-primary-600 hover:text-primary-700">Shop</Link>
            <span className="text-gray-400">•</span>
            <Link to="/about" className="text-primary-600 hover:text-primary-700">About Us</Link>
            <span className="text-gray-400">•</span>
            <Link to="/contact" className="text-primary-600 hover:text-primary-700">Contact</Link>
            <span className="text-gray-400">•</span>
            <Link to="/login" className="text-primary-600 hover:text-primary-700">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;