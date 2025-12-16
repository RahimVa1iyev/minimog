"use client"
import { useState } from 'react';
import { Heart, ChevronDown } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Strappy crop top',
    price: 6.00,
    image: 'https://fashion.minimog.co/cdn/shop/products/22.1b.jpg?v=1708672024&width=360',
    colors: ['#000000', '#F5DEB3'],
    isNew: false
  },
  {
    id: 2,
    name: 'Flat sandals with ankle strap',
    price: 19.90,
    image: 'https://fashion.minimog.co/cdn/shop/products/2.1b.jpg?v=1708671658&width=360',
    colors: ['#000000', '#F5DEB3'],
    isNew: false
  },
  {
    id: 3,
    name: 'Printed tank top',
    price: 9.90,
    oldPrice: 14.00,
    image: 'https://fashion.minimog.co/cdn/shop/products/7.1b.jpg?v=1708671676&width=360',
    colors: ['#000000'],
    isNew: true
  },
  {
    id: 4,
    name: 'Cotton cargo Bermuda shorts',
    price: 20.00,
    image: 'https://fashion.minimog.co/cdn/shop/products/14.1b_7dfad9d2-b8fd-49aa-9e87-8c2afc776a68.jpg?v=1709119519&width=360',
    colors: ['#000000', '#E5E5E5'],
    isNew: true
  },
  {
    id: 5,
    name: 'Rustic strappy crop top with',
    price: 15.90,
    image: 'https://fashion.minimog.co/cdn/shop/products/6.1b.jpg?v=1708671720&width=360',
    colors: ['#F5DEB3'],
    isNew: false
  },
  {
    id: 6,
    name: 'Mini dress with ruffled straps',
    price: 14.90,
    oldPrice: 19.90,
    image: 'https://fashion.minimog.co/cdn/shop/products/9.1b.jpg?v=1708671749&width=360',
    colors: ['#000000'],
    isNew: false
  },
  {
    id: 7,
    name: 'Contrast trainers with mesh',
    price: 29.90,
    image: 'https://fashion.minimog.co/cdn/shop/products/11.1b.jpg?v=1708671758&width=360',
    colors: ['#F5DEB3'],
    isNew: false
  },
  {
    id: 8,
    name: 'Linen blend waistcoat',
    price: 13.90,
    image: 'https://fashion.minimog.co/cdn/shop/products/4.1b.jpg?v=1708671778&width=360',
    colors: ['#8B7355'],
    isNew: false
  },
  {
    id: 9,
    name: 'Denim bag with fringing',
    price: 23.00,
    image: 'https://fashion.minimog.co/cdn/shop/products/13.1b.jpg?v=1708671787&width=360',
    colors: ['#6B9BD1'],
    isNew: false
  },
  {
    id: 10,
    name: 'Striped knit bandeau crop top',
    price: 9.99,
    oldPrice: 12.99,
    image: 'https://fashion.minimog.co/cdn/shop/products/18.1b-1.jpg?v=1708671807&width=360',
    colors: ['#000000', '#E5E5E5'],
    isNew: false
  }
];

const categories = [
  { value: 'best sellers', label: 'best sellers' },
  { value: 'new arrivals', label: 'new arrivals' },
  { value: 'trending', label: 'trending' },
  { value: 'sale', label: 'sale' }
];

export default function BestSellers() {
  const [selectedCategory, setSelectedCategory] = useState('best sellers');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Custom Dropdown */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-gray-500 text-base">You are in</span>
          
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 text-base font-normal border-b-2 border-gray-900 pb-1 pr-2 bg-transparent focus:outline-none cursor-pointer hover:border-gray-600 transition-colors"
            >
              {selectedCategory}
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => {
                      setSelectedCategory(category.value);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      selectedCategory === category.value ? 'bg-gray-50 font-medium' : ''
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] bg-gray-50 rounded-lg overflow-hidden mb-3">
                {product.isNew && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-teal-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      New
                    </span>
                  </div>
                )}
                
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100">
                  <Heart className="w-4 h-4 text-gray-700" />
                </button>

                {/* Quick View */}
                <div className="absolute bottom-0 left-0 right-0 bg-white py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full text-sm font-medium text-gray-900 hover:text-gray-600">
                    Quick view
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h3 className="text-sm text-gray-900 mb-2 line-clamp-2 hover:text-gray-600 cursor-pointer">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-2">
                  {product.oldPrice ? (
                    <>
                      <span className="text-sm font-medium text-red-600">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-sm font-medium text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Color Options */}
                <div className="flex items-center gap-1.5">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-5 h-5 rounded-full border-2 border-gray-200 hover:border-gray-400 transition-colors"
                      style={{ backgroundColor: color }}
                      aria-label={`Color option ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}