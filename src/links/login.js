
import React, { useState } from 'react';

function Alog() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Перевіряємо, чи логін і пароль правильні
    if (login === '1' && password === '1') {
      setLoggedIn(true);
      setError('');
    } else {
      setLoggedIn(false);
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <div>
          <div class="contact-box"></div>
          <input
            type="text"
            placeholder="Username"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p>{error}</p>}
        </div>
      ) : (
        <div>
          <div class="contact-box"></div><h1>Welcome!</h1>
          {/* Додайте інші елементи HTML за бажанням */}
        </div>
      )}
    </div>
  );
}

export default Alog;
