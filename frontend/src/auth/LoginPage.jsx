import React, { useState } from 'react';

function LoginPage({ onLogin, onNavigateToSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'demo' && password === 'demo123') {
      onLogin();
    } else {
      alert('Invalid credentials!');
    }
  };

  const handleGoogleLogin = () => {
    alert('Google Login functionality here');
    onLogin();
  };

  const handleGithubLogin = () => {
    alert('GitHub Login functionality here');
    onLogin();
  };

  

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4 flex justify-between items-center text-sm">
          <button
            onClick={handleGoogleLogin}
            className="w-1/2 bg-red-500 text-white py-2 rounded-md mr-2 hover:bg-red-600"
          >
            Login with Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="w-1/2 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900"
          >
            Login with GitHub
          </button>
        </div>
        
        <button
          onClick={onNavigateToSignup}
          className="mt-4 w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300"
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
