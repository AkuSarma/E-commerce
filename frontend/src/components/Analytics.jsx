
import { BarChart2, TrendingUp, Users, ShoppingBag } from 'lucide-react';

const Analytics = () => {
  const metrics = [
    { title: 'Revenue Growth', value: '+24%', icon: TrendingUp },
    { title: 'User Growth', value: '+12%', icon: Users },
    { title: 'Product Sales', value: '+18%', icon: ShoppingBag },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                {/* Render the icon component */}
                <metric.icon className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-gray-500">{metric.title}</p>
                <h3 className="text-2xl font-bold">{metric.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
        <div className="h-64 flex items-center justify-center text-gray-500">
          <BarChart2 className="h-8 w-8" />
          <span className="ml-2">Analytics visualization would go here</span>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
