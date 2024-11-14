import { Bell, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import PropTypes from 'prop-types';

const Navbar = ({ onNavigate }) => {
  const { cartCount } = useCart();

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1">
          {/* Search bar removed */}
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={() => onNavigate('cart')}
            className="p-2 hover:bg-gray-100 rounded-full relative"
          >
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    onNavigate: PropTypes.func.isRequired,  // Define the onNavigate prop as required and of type function
  };

export default Navbar;
