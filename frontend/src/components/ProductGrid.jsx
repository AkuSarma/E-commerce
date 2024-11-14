import  { useState } from 'react';
import { Heart, ShoppingCart, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const baseProducts = [
  {
    id: 1,
    title: 'Desert Cactus',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a',
    price: '$230',
    itemsSold: '500+ items sold',
    itemsLeft: '30 items left',
    rating: 4.5,
    reviews: 360,
  },
  {
    id: 2,
    title: 'Blue Ceramic Plate',
    image: 'https://images.unsplash.com/photo-1526434426615-1abe81efcb0b',
    price: '$240',
    itemsSold: '500+ items sold',
    itemsLeft: '30 items left',
    rating: 4.8,
    reviews: 420,
  },
];

const products = [
  ...baseProducts,
  ...Array(4).fill(null).map((_, index) => ({
    ...baseProducts[0],
    id: baseProducts.length + index + 1,
  }))
];

const ProductGrid = () => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
              <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                <span>{product.itemsSold}</span>
                <span>{product.itemsLeft}</span>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">{product.price}</span>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {Array(5).fill(null).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.reviews} reviews
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
