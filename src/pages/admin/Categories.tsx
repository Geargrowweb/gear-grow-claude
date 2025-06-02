import { useState } from 'react';
import { Plus, Edit, Trash2, Search, Image } from 'lucide-react';
import Button from '../../components/common/Button';

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  status: 'active' | 'inactive';
  createdAt: string;
}

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // Mock categories data
  const categories: Category[] = [
    {
      id: '1',
      name: 'Rotavator Blades',
      slug: 'rotavator-blades',
      description: 'High-quality blades for efficient soil cultivation',
      image: 'https://images.pexels.com/photos/2321837/pexels-photo-2321837.jpeg',
      productCount: 24,
      status: 'active',
      createdAt: '2024-01-01'
    },
    {
      id: '2',
      name: 'Tractor Attachments',
      slug: 'tractor-attachments',
      description: 'Versatile attachments for various farming operations',
      image: 'https://images.pexels.com/photos/162625/tractor-farm-machine-wheat-162625.jpeg',
      productCount: 18,
      status: 'active',
      createdAt: '2024-01-02'
    },
    {
      id: '3',
      name: 'Spare Parts',
      slug: 'spare-parts',
      description: 'Genuine spare parts for agricultural machinery',
      image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg',
      productCount: 45,
      status: 'active',
      createdAt: '2024-01-03'
    },
    {
      id: '4',
      name: 'Gearbox',
      slug: 'gearbox',
      description: 'Heavy-duty gearbox systems for rotavators',
      image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg',
      productCount: 12,
      status: 'active',
      createdAt: '2024-01-04'
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-600">Manage product categories</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Button leftIcon={<Plus size={20} />} onClick={() => setShowAddModal(true)}>
            Add Category
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  category.status === 'active' 
                    ? 'text-green-600 bg-green-100' 
                    : 'text-red-600 bg-red-100'
                }`}>
                  {category.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{category.productCount} products</span>
                <span>/{category.slug}</span>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" fullWidth leftIcon={<Edit size={16} />}>
                  Edit
                </Button>
                <Button variant="outline" size="sm" fullWidth className="text-red-600 hover:bg-red-50">
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Category Card */}
        <div 
          onClick={() => setShowAddModal(true)}
          className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-dashed border-gray-300 hover:border-primary-400 cursor-pointer transition-colors"
        >
          <div className="h-full flex flex-col items-center justify-center p-6 text-gray-400 hover:text-primary-600">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Plus size={32} />
            </div>
            <p className="text-lg font-medium">Add New Category</p>
            <p className="text-sm mt-1">Click to create a new category</p>
          </div>
        </div>
      </div>

      {/* Add/Edit Category Modal (Placeholder) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Category</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter category name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Slug
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="category-slug"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter category description"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category Image
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Image className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                </div>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <Button variant="outline" fullWidth onClick={() => setShowAddModal(false)}>
                  Cancel
                </Button>
                <Button fullWidth>
                  Add Category
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;