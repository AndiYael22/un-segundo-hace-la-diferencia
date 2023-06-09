import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import Main from './paginas/inicio';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={loggedIn ? <Main /> : <Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
