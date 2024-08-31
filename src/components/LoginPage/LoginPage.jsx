import { useState } from 'preact/hooks';
import './LoginPage.css';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State for managing error messages

  const handleLogin = (event) => {
    event.preventDefault();
    // Basic authentication check
    if (username === 'admin' && password === 'admin') {
      setErrorMessage(''); // Clear error message on successful login
      onLogin();
      // Redirect to Beranda.html after login success
      window.location.href = "/src/components/Beranda/Beranda.html";
    } else {
      setErrorMessage('Invalid credentials, please check your username and password.'); // Set error message
    }
  };

  return (
    <div class="container">
      <div class="login-form">
        <div class="logo-container">
          <img src="./src/assets/LoginPage/directorlogo.png" alt="Chill Logo" />
          <h1>CHILL</h1>
        </div>
        <h2 class="title">Masuk</h2>
        <p>Selamat datang kembali!</p>
        <form onSubmit={handleLogin}>
          <div class="input-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onInput={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
              required
            />
          </div>
          <div class="input-group">
            <label for="password">Kata Sandi</label>
            <div style="position: relative;">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata sandi"
                required
              />
              <img
                src={`./src/assets/LoginPage/${
                  showPassword ? 'eye-slash-icon.png' : 'eye-icon.png'
                }`}
                class="toggle-password"
                alt="Toggle Password Visibility"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '20px',
                  height: '20px',
                }}
              />
            </div>
          </div>

          {/* Display the error message if there is one */}
          {errorMessage && <p class="error-message">{errorMessage}</p>}

          <button type="submit">Masuk</button>
        </form>
      </div>
    </div>
  );
}
