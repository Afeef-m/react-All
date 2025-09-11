import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [form, setForm] = useState({ username: "", gmail: "", password: "" });
  const navigate = useNavigate();

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // form validation
  const validate = () => {
    if (!form.username.trim()) {
      toast.error("Username is required");
      return false;
    }
    if (!form.gmail.includes("@")) {
      toast.error("Enter a valid email");
      return false;
    }
    if (form.password.length < 4) {
      toast.error("Password must be at least 4 characters");
      return false;
    }
    return true;
  };

  // register function
  const handleRegister = async () => {
    if (!validate()) return;

    const newUser = { ...form };

    try {
      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      toast.success("Registered successfully ✅");

      // clear form
      setForm({ username: "", gmail: "", password: "" });

      // navigate after short delay so toast is visible
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      toast.error("Error while registering");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register Here</h2>

        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter Username"
          className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name="gmail"
          value={form.gmail}
          onChange={handleChange}
          placeholder="Enter Gmail"
          className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter Password"
          className="w-full mb-6 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
