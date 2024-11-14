
import { Plus } from 'lucide-react';

const Projects = () => {
  const projects = [
    { name: 'E-commerce Redesign', status: 'In Progress', completion: 75 },
    { name: 'Mobile App Launch', status: 'Planning', completion: 30 },
    { name: 'Marketing Campaign', status: 'Completed', completion: 100 },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          <Plus className="h-5 w-5" />
          New Project
        </button>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <span className="text-sm text-gray-500">{project.status}</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: `${project.completion}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-500 mt-2 block">
              {project.completion}% Complete
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
