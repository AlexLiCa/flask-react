import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Examples from "./components/examples/Examples";
import Login from "./components/Login/login.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    console.log("Login success");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <>
      <Header />
      <main>
        {isAuthenticated ? (
          <Login onLoginSuccess={handleLoginSuccess} />
        ) : (
          <Examples onLogout={handleLogout} />
        )}
      </main>
    </>
  );
}

export default App;
