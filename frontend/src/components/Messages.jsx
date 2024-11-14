
import { MessageSquare, Send } from 'lucide-react';

const Messages = () => {
  const messages = [
    { sender: 'John Doe', content: "Hey, how's the project going?", time: '2m ago' },
    { sender: 'Jane Smith', content: 'Meeting at 3 PM today', time: '1h ago' },
    { sender: 'Mike Johnson', content: 'Updated the designs', time: '2h ago' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <MessageSquare className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="divide-y">
          {messages.map((message, index) => (
            <div key={index} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{message.sender}</h3>
                  <p className="text-gray-600">{message.content}</p>
                </div>
                <span className="text-sm text-gray-500">{message.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
