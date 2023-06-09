import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import "../css/header.css";


const Login= ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Realizar verificación de autenticación con el servidor aquí
    // ...

    // Ejemplo simple: verificar si el nombre de usuario y la contraseña son "admin"
    if (username === 'admin' && password === 'admin') {
      onLogin(); // Llamada a la función proporcionada por el componente padre para actualizar el estado de inicio de sesión
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    
    <div>
        <Header /> 
          
      <h1 className='inicio'>Iniciar sesión</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Iniciar sesión</button>
      </form>
      <Footer/> 
    </div>
  );
};

export default Login;
