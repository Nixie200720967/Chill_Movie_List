import { useState } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import './app.css';
import Login from './components/LoginPage/LoginPage'; // Import your Login component

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // This function simulates a login. In a real app, it would handle authentication.
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        // If logged in, show the existing app content
        <div>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} class="logo" alt="Vite logo" />
            </a>
            <a href="https://preactjs.com" target="_blank">
              <img src={preactLogo} class="logo preact" alt="Preact logo" />
            </a>
          </div>
          <h1>Vite + Preact</h1>
          <div class="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/app.jsx</code> and save to test HMR
            </p>
          </div>
          <p>
            Check out{' '}
            <a
              href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
              target="_blank"
            >
              create-preact
            </a>
            , the official Preact + Vite starter
          </p>
          <p class="read-the-docs">
            Click on the Vite and Preact logos to learn more
          </p>
        </div>
      ) : (
        // If not logged in, show the Login component
        <Login onLogin={handleLogin} /> // Pass the handleLogin function to the Login component
      )}
    </>
  );
}
