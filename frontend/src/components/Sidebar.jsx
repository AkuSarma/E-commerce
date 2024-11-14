import PropTypes from 'prop-types';
import { LayoutDashboard, FolderKanban, Users, BarChart2, MessageSquare, Cable, ShoppingBag } from 'lucide-react';

const Sidebar = ({ onNavigate, currentView }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: ShoppingBag, label: 'Products', id: 'products' },
    { icon: FolderKanban, label: 'Projects', id: 'projects' },
    { icon: Users, label: 'Teams', id: 'teams' },
    { icon: BarChart2, label: 'Analytics', id: 'analytics' },
    { icon: MessageSquare, label: 'Messages', id: 'messages' },
    { icon: Cable, label: 'Integrations', id: 'integrations' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">L</span>
          </div>
          <span className="text-xl font-bold">Logo</span>
        </div>
      </div>

      <nav className="flex-1 px-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors ${
              currentView === item.id ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  currentView: PropTypes.string.isRequired
};

export default Sidebar;
