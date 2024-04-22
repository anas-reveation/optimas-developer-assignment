import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import UserTable from './components/UserTable';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className='app-container'>
      {/* Your Figma design implementation (CSS styles) */}
      {isLoggedIn ? (
        <UserTable />
      ) : (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
