import { useState, useEffect } from 'react';
import { CreditCard, ShoppingCart, Users, TrendingUp, ChevronUp, ChevronDown, DollarSign } from 'lucide-react';

// Sample data for dashboard
const getSampleData = () => {
  return {
    salesOverview: {
      totalSales: 12750,
      orders: 42,
      customers: 18,
      averageOrder: 303.57
    },
    recentOrders: [
      { id: 'ORD-001', customer: 'Rahul Sharma', date: '2023-04-12', total: 4250, status: 'delivered' },
      { id: 'ORD-002', customer: 'Priya Patel', date: '2023-04-11', total: 1890, status: 'processing' },
      { id: 'ORD-003', customer: 'Vikram Singh', date: '2023-04-10', total: 3500, status: 'shipped' },
      { id: 'ORD-004', customer: 'Anita Desai', date: '2023-04-09', total: 2150, status: 'pending' },
      { id: 'ORD-005', customer: 'Rajesh Kumar', date: '2023-04-08', total: 960, status: 'delivered' }
    ],
    popularProducts: [
      { id: 'PRD-001', name: 'Rotavator Blade Type C', sales: 28, stock: 52 },
      { id: 'PRD-002', name: 'Tractor Attachment XL-200', sales: 24, stock: 8 },
      { id: 'PRD-003', name: 'Premium Rotavator Gearbox', sales: 20, stock: 15 },
      { id: 'PRD-004', name: 'Rotavator Chain Assembly', sales: 18, stock: 22 }
    ]
  };
};

const Dashboard = () => {
  const [data, setData] = useState(getSampleData());
  const [timeRange, setTimeRange] = useState('week');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const changeTimeRange = (range: string) => {
    setIsLoading(true);
    setTimeRange(range);
    
    // Simulate data change based on time range
    setTimeout(() => {
      const multiplier = range === 'day' ? 0.2 : range === 'week' ? 1 : range === 'month' ? 4 : 12;
      const newData = getSampleData();
      
      newData.salesOverview.totalSales = Math.round(newData.salesOverview.totalSales * multiplier);
      newData.salesOverview.orders = Math.round(newData.salesOverview.orders * multiplier);
      newData.salesOverview.customers = Math.round(newData.salesOverview.customers * multiplier);
      newData.salesOverview.averageOrder = Math.round((newData.salesOverview.totalSales / newData.salesOverview.orders) * 100) / 100;
      
      setData(newData);
      setIsLoading(false);
    }, 500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-100';
      case 'processing':
        return 'text-blue-600 bg-blue-100';
      case 'shipped':
        return 'text-purple-600 bg-purple-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Welcome to your admin dashboard</p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <div className="inline-flex items-center rounded-md border border-gray-300 bg-white">
            <button
              onClick={() => changeTimeRange('day')}
              className={`px-3 py-2 text-sm ${
                timeRange === 'day' ? 'bg-primary-600 text-white' : 'text-gray-700'
              }`}
            >
              Day
            </button>
            <button
              onClick={() => changeTimeRange('week')}
              className={`px-3 py-2 text-sm ${
                timeRange === 'week' ? 'bg-primary-600 text-white' : 'text-gray-700'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => changeTimeRange('month')}
              className={`px-3 py-2 text-sm ${
                timeRange === 'month' ? 'bg-primary-600 text-white' : 'text-gray-700'
              }`}
            >
              Month
            </button>
            <button
              onClick={() => changeTimeRange('year')}
              className={`px-3 py-2 text-sm ${
                timeRange === 'year' ? 'bg-primary-600 text-white' : 'text-gray-700'
              }`}
            >
              Year
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Sales */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-primary-100 text-primary-600">
              <CreditCard className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Total Sales</h3>
              <div className="flex items-center">
                {isLoading ? (
                  <div className="h-7 w-24 bg-gray-200 animate-pulse rounded"></div>
                ) : (
                  <p className="text-xl font-semibold text-gray-900">₹{data.salesOverview.totalSales.toLocaleString()}</p>
                )}
                <span className="ml-2 flex items-center text-sm font-medium text-green-600">
                  <ChevronUp className="h-4 w-4" />
                  8.2%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Orders</h3>
              <div className="flex items-center">
                {isLoading ? (
                  <div className="h-7 w-16 bg-gray-200 animate-pulse rounded"></div>
                ) : (
                  <p className="text-xl font-semibold text-gray-900">{data.salesOverview.orders}</p>
                )}
                <span className="ml-2 flex items-center text-sm font-medium text-green-600">
                  <ChevronUp className="h-4 w-4" />
                  5.3%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Customers */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <Users className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">New Customers</h3>
              <div className="flex items-center">
                {isLoading ? (
                  <div className="h-7 w-16 bg-gray-200 animate-pulse rounded"></div>
                ) : (
                  <p className="text-xl font-semibold text-gray-900">{data.salesOverview.customers}</p>
                )}
                <span className="ml-2 flex items-center text-sm font-medium text-red-600">
                  <ChevronDown className="h-4 w-4" />
                  1.8%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Average Order */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <DollarSign className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Avg. Order Value</h3>
              <div className="flex items-center">
                {isLoading ? (
                  <div className="h-7 w-24 bg-gray-200 animate-pulse rounded"></div>
                ) : (
                  <p className="text-xl font-semibold text-gray-900">₹{data.salesOverview.averageOrder}</p>
                )}
                <span className="ml-2 flex items-center text-sm font-medium text-green-600">
                  <ChevronUp className="h-4 w-4" />
                  2.5%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and tables section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart (Placeholder) */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Overview</h3>
          
          {/* Simple chart placeholder */}
          <div className="h-64 bg-gray-50 rounded-md border border-gray-200 flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-primary-600 mx-auto mb-2" />
              <p className="text-gray-500">Sales chart would be rendered here</p>
              <p className="text-sm text-gray-400">Using a chart library like Chart.js or Recharts</p>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {isLoading ? (
                  // Loading skeleton
                  Array(5).fill(0).map((_, index) => (
                    <tr key={index}>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
                      </td>
                    </tr>
                  ))
                ) : (
                  data.recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-primary-600">
                        {order.id}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                        {order.customer}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(order.date).toLocaleDateString()}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                        ₹{order.total.toLocaleString()}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full capitalize ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Popular Products */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Products</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            // Loading skeleton
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded mb-3"></div>
                <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded mb-3"></div>
                <div className="h-4 w-1/3 bg-gray-200 animate-pulse rounded"></div>
              </div>
            ))
          ) : (
            data.popularProducts.map((product) => (
              <div key={product.id} className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">{product.name}</h4>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Sales: <span className="font-medium text-gray-900">{product.sales}</span></span>
                  <span className="text-gray-500">Stock: <span className={`font-medium ${product.stock < 10 ? 'text-red-600' : 'text-green-600'}`}>{product.stock}</span></span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;