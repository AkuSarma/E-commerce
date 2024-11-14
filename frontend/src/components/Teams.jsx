
import { UserPlus } from 'lucide-react';

const Teams = () => {
  const teams = [
    { name: 'Design Team', members: 8, projects: 12 },
    { name: 'Development Team', members: 12, projects: 15 },
    { name: 'Marketing Team', members: 6, projects: 8 },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Teams</h1>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          <UserPlus className="h-5 w-5" />
          Add Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-4">{team.name}</h3>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{team.members} Members</span>
              <span>{team.projects} Projects</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
