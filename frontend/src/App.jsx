import  { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Teams from './components/Teams';
import Analytics from './components/Analytics';
import Messages from './components/Messages';
import Integrations from './components/Integrations';
import ProductGrid from './components/ProductGrid';
import CartPage from './components/CartPage';
import { CartProvider } from './context/CartContext';
import LoginPage from './auth/LoginPage';
import SignupPage from './auth/SignupPage';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);



  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'projects':
        return <Projects />;
      case 'teams':
        return <Teams />;
      case 'analytics':
        return <Analytics />;
      case 'messages':
        return <Messages />;
      case 'integrations':
        return <Integrations />;
      case 'products':
        return <ProductGrid />;
      case 'cart':
        return <CartPage />;
      default:
        return <Dashboard />;
    }
  };

       // Render the login page if not logged in
   if (!isLoggedIn) {
    if (isSignup) {
      return <SignupPage onNavigateToLogin={() => setIsSignup(false)} />;
    }
    return <LoginPage onLogin={() => setIsLoggedIn(true)} onNavigateToSignup={() => setIsSignup(true)} />;
  }


  return (
    <CartProvider>
      <div className="flex h-screen bg-gray-50">
        <Sidebar onNavigate={setCurrentView} currentView={currentView} />
        <div className="flex-1 flex flex-col">
          <Navbar onNavigate={setCurrentView} />
          <main className="flex-1 overflow-y-auto">
            {renderView()}
          </main>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
