import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  RotateCcw, 
  Star,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Check
} from 'lucide-react';
import Button from '../components/common/Button';

// Mock product data
const mockProduct = {
  id: '1',
  name: 'Premium Heavy Duty Rotavator Blade Set',
  slug: 'premium-rotavator-blade',
  price: 4999,
  originalPrice: 6999,
  discount: 28,
  rating: 4.5,
  reviews: 124,
  inStock: true,
  stockCount: 15,
  category: 'Rotavator Blades',
  brand: 'Gear Grow Premium',
  sku: 'GG-RB-001',
  images: [
    'https://images.pexels.com/photos/2321837/pexels-photo-2321837.jpeg',
    'https://images.pexels.com/photos/162625/tractor-farm-machine-wheat-162625.jpeg',
    'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg',
  ],
  description: 'Our Premium Heavy Duty Rotavator Blade Set is engineered for maximum durability and performance. Made from high-grade steel with special heat treatment, these blades are designed to withstand the toughest farming conditions while maintaining their sharpness and effectiveness.',
  features: [
    'High-grade steel construction for maximum durability',
    'Special heat treatment for enhanced strength',
    'Precision-engineered cutting edge for optimal soil cultivation',
    'Compatible with most standard rotavator models',
    'Corrosion-resistant coating for longer life',
    'Set includes 36 blades for complete replacement'
  ],
  specifications: {
    'Material': 'High Carbon Steel',
    'Blade Type': 'C-Type',
    'Blade Width': '60mm',
    'Blade Length': '230mm',
    'Thickness': '8mm',
    'Weight': '450g per blade',
    'Compatibility': 'Universal fit for 5-7 feet rotavators',
    'Package Contents': '36 blades, mounting bolts, installation guide'
  }
};

const relatedProducts = [
  {
    id: '2',
    name: 'Standard Rotavator Blade',
    price: 2999,
    image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg',
    rating: 4.2
  },
  {
    id: '3',
    name: 'Rotavator Gearbox Assembly',
    price: 8999,
    image: 'https://images.pexels.com/photos/162625/tractor-farm-machine-wheat-162625.jpeg',
    rating: 4.7
  },
  {
    id: '4',
    name: 'Heavy Duty Chain Set',
    price: 3499,
    image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg',
    rating: 4.4
  },
  {
    id: '5',
    name: 'Rotavator Side Plate',
    price: 1999,
    image: 'https://images.pexels.com/photos/2321837/pexels-photo-2321837.jpeg',
    rating: 4.3
  }
];

const ProductDetail = () => {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase' && quantity < mockProduct.stockCount) {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Added to cart:', { product: mockProduct, quantity });
  };

  const handleImageNavigation = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? mockProduct.images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === mockProduct.images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-primary-600">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-primary-600">Shop</Link>
        <span>/</span>
        <Link to={`/shop?category=${mockProduct.category}`} className="hover:text-primary-600">
          {mockProduct.category}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{mockProduct.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div>
          <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img
              src={mockProduct.images[selectedImage]}
              alt={mockProduct.name}
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            
            {/* Image Navigation */}
            <button
              onClick={() => handleImageNavigation('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleImageNavigation('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <ChevronRight size={20} />
            </button>

            {/* Discount Badge */}
            {mockProduct.discount > 0 && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                -{mockProduct.discount}%
              </div>
            )}
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-2">
            {mockProduct.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-primary-600' : 'border-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`${mockProduct.name} ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{mockProduct.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(mockProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
                <span className="ml-2 text-gray-600">({mockProduct.reviews} reviews)</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">SKU: {mockProduct.sku}</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline space-x-3">
              <span className="text-3xl font-bold text-primary-600">₹{mockProduct.price}</span>
              {mockProduct.originalPrice > mockProduct.price && (
                <>
                  <span className="text-xl text-gray-400 line-through">₹{mockProduct.originalPrice}</span>
                  <span className="text-green-600 font-semibold">Save ₹{mockProduct.originalPrice - mockProduct.price}</span>
                </>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-1">Inclusive of all taxes</p>
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            {mockProduct.inStock ? (
              <div className="flex items-center text-green-600">
                <Check size={20} className="mr-2" />
                <span className="font-medium">In Stock</span>
                <span className="text-gray-600 ml-2">({mockProduct.stockCount} units available)</span>
              </div>
            ) : (
              <div className="text-red-600 font-medium">Out of Stock</div>
            )}
          </div>          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => handleQuantityChange('decrease')}
                className="p-3 hover:bg-gray-100 transition-colors"
                disabled={quantity <= 1}
              >
                <Minus size={20} />
              </button>
              <span className="px-6 py-3 font-medium">{quantity}</span>
              <button
                onClick={() => handleQuantityChange('increase')}
                className="p-3 hover:bg-gray-100 transition-colors"
                disabled={quantity >= mockProduct.stockCount}
              >
                <Plus size={20} />
              </button>
            </div>

            <Button
              onClick={handleAddToCart}
              size="lg"
              className="flex-1"
              leftIcon={<ShoppingCart size={20} />}
              disabled={!mockProduct.inStock}
            >
              Add to Cart
            </Button>

            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Heart size={20} />
            </button>

            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Share2 size={20} />
            </button>
          </div>

          {/* Features */}
          <div className="border-t border-gray-200 pt-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
            <ul className="space-y-2">
              {mockProduct.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery Info */}
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div className="flex items-center">
              <Truck className="text-primary-600 mr-3" size={24} />
              <div>
                <p className="font-medium text-gray-900">Free Delivery</p>
                <p className="text-sm text-gray-600">On orders above ₹2,000</p>
              </div>
            </div>
            <div className="flex items-center">
              <Shield className="text-primary-600 mr-3" size={24} />
              <div>
                <p className="font-medium text-gray-900">1 Year Warranty</p>
                <p className="text-sm text-gray-600">Manufacturing defects covered</p>
              </div>
            </div>
            <div className="flex items-center">
              <RotateCcw className="text-primary-600 mr-3" size={24} />
              <div>
                <p className="font-medium text-gray-900">Easy Returns</p>
                <p className="text-sm text-gray-600">7-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-12">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'description'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'specifications'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'reviews'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Reviews ({mockProduct.reviews})
            </button>
          </div>
        </div>

        <div className="py-8">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">{mockProduct.description}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {mockProduct.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {Object.entries(mockProduct.specifications).map(([key, value], index) => (
                    <tr key={key} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3 font-medium text-gray-900 w-1/3">{key}</td>
                      <td className="px-4 py-3 text-gray-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Reviews</h3>
                <div className="flex items-center mb-6">
                  <div className="text-center mr-8">
                    <div className="text-4xl font-bold text-gray-900">{mockProduct.rating}</div>
                    <div className="flex items-center justify-center my-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={i < Math.floor(mockProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{mockProduct.reviews} reviews</p>
                  </div>
                  <div className="flex-1">
                    <Button variant="primary">Write a Review</Button>
                  </div>
                </div>

                {/* Sample Reviews */}
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="ml-2 font-medium">Rajesh Kumar</span>
                      <span className="ml-auto text-sm text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-gray-700">
                      Excellent quality blades! I've been using them for a month now and they're still as sharp as day one. 
                      The build quality is outstanding and they fit perfectly on my rotavator.
                    </p>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star size={16} className="text-gray-300" />
                      </div>
                      <span className="ml-2 font-medium">Priya Patel</span>
                      <span className="ml-auto text-sm text-gray-500">1 week ago</span>
                    </div>
                    <p className="text-gray-700">
                      Good product overall. The blades are durable and work well. Delivery was quick and packaging was secure. 
                      Would have given 5 stars but the price is a bit high compared to local alternatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary-600">₹{product.price}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;