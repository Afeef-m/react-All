import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Make sure the key matches the one used in login
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser) setUser(loggedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedUser"); // same key
    setUser(null);
    navigate("/login"); 
  };

  return (
    <nav className="flex justify-between items-center bg-neutral-400 px-6 py-3 text-white shadow-md">
      <Link to="/" className="font-bold text-lg">My App</Link>

      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
