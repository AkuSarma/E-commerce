import { Cable, GithubIcon, Slack, Trello } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    { name: 'GitHub', icon: GithubIcon, status: 'Connected', lastSync: '5m ago' },
    { name: 'Slack', icon: Slack, status: 'Connected', lastSync: '1h ago' },
    { name: 'Trello', icon: Trello, status: 'Not Connected', lastSync: '-' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Integrations</h1>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          <Cable className="h-5 w-5" />
          Add Integration
        </button>
      </div>

      <div className="grid gap-6">
        {integrations.map((integration, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  {/* Render the icon for the integration */}
                  <integration.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{integration.name}</h3>
                  <span className="text-sm text-gray-500">Last sync: {integration.lastSync}</span>
                </div>
              </div>
              <div>
                {/* Display status with conditional styling */}
                <span className={`px-3 py-1 rounded-full text-sm ${
                  integration.status === 'Connected' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {integration.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
