import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Check } from 'lucide-react'; // Added Check import
import Button from '../components/common/Button';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Premium Rotavator Blade Set',
      price: 4999,
      quantity: 2,
      image: 'https://images.pexels.com/photos/2321837/pexels-photo-2321837.jpeg',
      category: 'Rotavator Blades'
    },
    {
      id: '2',
      name: 'Heavy Duty Chain Assembly',
      price: 2999,
      quantity: 1,
      image: 'https://images.pexels.com/photos/162625/tractor-farm-machine-wheat-162625.jpeg',
      category: 'Parts'
    }
  ]);

  const updateQuantity = (id: string, action: 'increase' | 'decrease') => {
    setCartItems(items =>
      items.map(item => {
        if (item.id === id) {
          const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: Math.max(1, newQuantity) };
        }
        return item;
      })
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 2000 ? 0 : 200;
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/shop">
            <Button size="lg">
              Continue Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className={`p-6 ${index !== cartItems.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.category}</p>
                    <p className="text-lg font-bold text-primary-600 mt-1">₹{item.price}</p>
                                    </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, 'decrease')}
                      className="p-1 rounded-md border border-gray-300 hover:bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 'increase')}
                      className="p-1 rounded-md border border-gray-300 hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700 mt-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between">
            <Link to="/shop">
              <Button variant="outline">Continue Shopping</Button>
            </Link>
            <Button variant="ghost" className="text-red-600 hover:text-red-700">
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? 'FREE' : `₹${shipping}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (GST 18%)</span>
                <span className="font-medium">₹{tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold text-primary-600">
                    ₹{total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {shipping > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-6">
                <p className="text-sm text-yellow-800">
                  Add ₹{(2000 - subtotal).toLocaleString()} more to get free shipping!
                </p>
              </div>
            )}

            <Link to="/checkout">
              <Button size="lg" fullWidth>
                Proceed to Checkout
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Secure checkout
              </p>
              <p className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Free returns within 7 days
              </p>
              <p className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                1 year warranty on all products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;