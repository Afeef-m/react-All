import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [form, setForm] = useState({ username: "", gmail: "" });
  const navigate = useNavigate(); // initialize navigate

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!form.username || !form.gmail) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/users?username=${form.username}&gmail=${form.gmail}`
      );
      const data = await res.json();

      if (data.length > 0) {
        toast.success("Login successful ");

        // save user in localStorage
        localStorage.setItem("loggedUser", JSON.stringify(data[0]));

        // navigate to home after short delay
        setTimeout(() => {
          navigate("/");
        }, 1200);
      } else {
        toast.error("Invalid credentials ");
      }
    } catch (error) {
      toast.error("Error while logging in");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login Here</h2>

        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter Username"
          className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
        />

        <input
          type="email"
          name="gmail"
          value={form.gmail}
          onChange={handleChange}
          placeholder="Enter your Gmail"
          className="w-full mb-6 p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
