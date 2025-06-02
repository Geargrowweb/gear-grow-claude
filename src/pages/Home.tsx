import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, RotateCcw, HeadphonesIcon } from 'lucide-react';
import Button from '../components/common/Button';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            backgroundBlendMode: "overlay" 
          }}
        ></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Premium Rotavator Products for Modern Farming
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl animate-slide-in">
              High-quality agricultural machinery designed for efficiency, durability, and superior performance in all farming conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button size="lg" variant="primary" className="bg-accent-500 hover:bg-accent-600">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of rotavator products designed for various agricultural needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2321837/pexels-photo-2321837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Rotavator Blades" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rotavator Blades</h3>
                <p className="text-gray-600 mb-4">
                  Premium quality blades designed for efficient soil cultivation and longer lifespan.
                </p>
                <Link 
                  to="/shop?category=blades" 
                  className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
                >
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Category 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/162625/tractor-farm-machine-wheat-162625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Tractor Attachments" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tractor Attachments</h3>
                <p className="text-gray-600 mb-4">
                  Versatile attachments to enhance your tractor's functionality for various farming operations.
                </p>
                <Link 
                  to="/shop?category=attachments" 
                  className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
                >
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Category 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Spare Parts" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Spare Parts</h3>
                <p className="text-gray-600 mb-4">
                  Genuine spare parts to keep your agricultural machinery running at peak performance.
                </p>
                <Link 
                  to="/shop?category=parts" 
                  className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
                >
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                View All Categories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Gear Grow</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on delivering quality, reliability, and excellent service to our customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                All products undergo rigorous quality testing to ensure durability and performance.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                Efficient logistics and nationwide delivery network for quick order fulfillment.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600">
                Hassle-free return policy with clear guidelines and responsive processing.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Dedicated customer service team available to assist with any queries or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from farmers who have transformed their operations with Gear Grow products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl">
                  R
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-600">Punjab Farmer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The rotavator blades I purchased from Gear Grow have outperformed every other brand I've used in the past. They're incredibly durable and have significantly improved my soil preparation process."
              </p>
              <div className="flex text-accent-500">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-secondary-600 flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Anita Sharma</h4>
                  <p className="text-sm text-gray-600">Maharashtra Farmer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "I'm impressed with the customer service at Gear Grow. When I had an issue with my order, they responded immediately and resolved it within hours. The product quality is excellent too!"
              </p>
              <div className="flex text-accent-500">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-accent-500 flex items-center justify-center text-white font-bold text-xl">
                  V
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Vijay Patel</h4>
                  <p className="text-sm text-gray-600">Gujarat Farmer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "I've been using Gear Grow's tractor attachments for three seasons now, and they've significantly improved my productivity. The quality-to-price ratio is unmatched in the market."
              </p>
              <div className="flex text-accent-500">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Farming Equipment?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our extensive collection of high-quality rotavator products and agricultural machinery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/shop">
              <Button size="lg" variant="primary" className="bg-white text-primary-600 hover:bg-gray-100">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;