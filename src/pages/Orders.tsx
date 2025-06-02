import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, CheckCircle, Clock, X, ChevronRight } from 'lucide-react';
import Button from '../components/common/Button';

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
}

const Orders = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Mock orders data
  const orders: Order[] = [
    {
      id: '1',
      orderNumber: 'ORD-2024-001234',
      date: '2024-01-15',
      status: 'delivered',
      total: 12997,
      items: [
        {
          id: '1',
          name: 'Premium Rotavator Blade Set',
          quantity: 2,
          price: 4999,
          image: 'https://images.pexels.com/photos/2321837/pexels-photo-2321837.jpeg'
        },
        {
          id: '2',
          name: 'Heavy Duty Chain Assembly',
          quantity: 1,
          price: 2999,
          image: 'https://images.pexels.com/photos/162625/tractor-farm-machine-wheat-162625.jpeg'
        }
      ]
    },
    {
      id: '2',
      orderNumber: 'ORD-2024-001233',
      date: '2024-01-10',
      status: 'shipped',
      total: 5999,
      items: [
        {
          id: '3',
          name: 'Professional Gearbox Kit',
          quantity: 1,
          price: 5999,
          image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg'
        }
      ]
    },
    {
      id: '3',
      orderNumber: 'ORD-2024-001232',
      date: '2024-01-05',
      status: 'processing',
      total: 3499,
      items: [
        {
          id: '4',
          name: 'Rotavator Side Plate',
          quantity: 1,
          price: 1999,
          image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg'
        },
        {
          id: '5',
          name: 'Mounting Bolts Set',
          quantity: 2,
          price: 750,
          image: 'https://images.pexels.com/photos/162625/tractor-farm-machine-wheat-162625.jpeg'
        }
      ]
    }
  ];

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5" />;
      case 'processing':
        return <Package className="h-5 w-5" />;
      case 'shipped':
        return <Truck className="h-5 w-5" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5" />;
      case 'cancelled':
        return <X className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'processing':
        return 'text-blue-600 bg-blue-100';
      case 'shipped':
        return 'text-purple-600 bg-purple-100';
      case 'delivered':
        return 'text-green-600 bg-green-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
    }
  };

  const filteredOrders = activeFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === activeFilter);

  const filters = [
    { id: 'all', name: 'All Orders', count: orders.length },
    { id: 'pending', name: 'Pending', count: orders.filter(o => o.status === 'pending').length },
    { id: 'processing', name: 'Processing', count: orders.filter(o => o.status === 'processing').length },
    { id: 'shipped', name: 'Shipped', count: orders.filter(o => o.status === 'shipped').length },
    { id: 'delivered', name: 'Delivered', count: orders.filter(o => o.status === 'delivered').length },
    { id: 'cancelled', name: 'Cancelled', count: orders.filter(o => o.status === 'cancelled').length }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.name} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <Package className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h2>
          <p className="text-gray-600 mb-6">
            {activeFilter === 'all' 
              ? "You haven't placed any orders yet."
              : `You don't have any ${activeFilter} orders.`}
          </p>
          <Link to="/shop">
            <Button>Start Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Order Header */}
              <div className="bg-gray-50 px-6 py-4 border-b">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-2 sm:mb-0">
                    <p className="text-sm text-gray-600">
                      Order Number: <span className="font-semibold text-gray-900">{order.orderNumber}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Placed on: {new Date(order.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span className="ml-2 capitalize">{order.status}</span>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-6">
                {order.items.map((item, index) => (
                  <div key={item.id} className={`flex items-center space-x-4 ${
                    index !== order.items.length - 1 ? 'mb-4 pb-4 border-b' : ''
                  }`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      <p className="text-sm font-medium text-gray-900">₹{item.price} each</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Total: ₹{order.total.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    {order.status === 'delivered' && (
                      <Button variant="outline" size="sm">
                        Write Review
                      </Button>
                    )}
                    <Link to={`/order/${order.orderNumber}`}>
                      <Button size="sm">
                        View Details
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;