
import { LineChart, ShoppingBag, Users, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Sales', value: '$48,234', change: '+12%', icon: DollarSign },
    { title: 'Active Users', value: '2,341', change: '+5.2%', icon: Users },
    { title: 'Total Products', value: '432', change: '+8.1%', icon: ShoppingBag },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <span className="text-green-500 text-sm">{stat.change} from last month</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
        <div className="h-64 flex items-center justify-center text-gray-500">
          <LineChart className="h-8 w-8" />
          <span className="ml-2">Sales chart visualization would go here</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
