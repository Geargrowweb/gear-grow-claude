import { Link } from 'react-router-dom';
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';

const OrderSuccess = () => {
  // Mock order data
  const orderData = {
    orderNumber: 'ORD-2024-001234',
    email: 'customer@example.com',
    estimatedDelivery: '5-7 business days',
    items: [
      {
        id: '1',
        name: 'Premium Rotavator Blade Set',
        quantity: 2,
        price: 4999
      },
      {
        id: '2',
        name: 'Heavy Duty Chain Assembly',
        quantity: 1,
        price: 2999
      }
    ],
    total: 15495.64
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your order. We've received your order and will begin processing it soon.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-sm text-gray-600 mb-2">Order Number</p>
              <p className="text-2xl font-bold text-primary-600">{orderData.orderNumber}</p>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center text-gray-600">
                <Mail className="mr-2" size={20} />
                <span>Confirmation sent to {orderData.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Package className="mr-2" size={20} />
                <span>Estimated delivery: {orderData.estimatedDelivery}</span>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Details</h2>
            
            <div className="space-y-4 mb-6">
              {orderData.items.map((item) => (
                <div key={item.id} className="flex justify-between py-3 border-b border-gray-200">
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium text-gray-900">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between text-lg font-bold">
              <span>Total Paid</span>
              <span className="text-primary-600">₹{orderData.total.toFixed(2)}</span>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                        <h3 className="font-semibold text-blue-900 mb-3">What happens next?</h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>You'll receive an order confirmation email with tracking details</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>We'll notify you when your order is shipped</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Track your order status in your account dashboard</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/orders" className="flex-1">
              <Button size="lg" fullWidth>
                View Order Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/shop" className="flex-1">
              <Button variant="outline" size="lg" fullWidth>
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;