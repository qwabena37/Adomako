import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentHour = new Date().getHours();

  const greeting =
    currentHour < 12
      ? "Good Morning"
      : currentHour < 17
      ? "Good Afternoon"
      : "Good Evening";

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://adomako-3.onrender.com/api/token/",
        {
          username,
          password,
        }
      );

      localStorage.setItem(
        "access",
        response.data.access
      );

      localStorage.setItem(
        "refresh",
        response.data.refresh
      );

      navigate("/admin/dashboard");

    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* Logo & Header */}
        <div className="text-center mb-8">

          <div className="flex justify-center">
            <img
              src="/logo.jpeg"
              alt="Adomako Agyenkwa Enterprise"
              className="w-24 h-24 rounded-full border-4 border-yellow-500 shadow-2xl object-cover"
            />
          </div>

          <h1 className="text-white text-3xl font-bold mt-5">
            Admin Portal
          </h1>

          <p className="text-gray-400 mt-2">
            Adomako Agyenkwa Enterprise
          </p>

        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">

          {/* Top Accent */}
          <div className="h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" />

          <div className="p-8">

            <h2 className="text-3xl font-bold text-white text-center mb-2">
              {greeting}, Admin
            </h2>

            <p className="text-center text-gray-400 mb-8">
              Welcome to the Adomako Agyenkwa Enterprise Management Portal.
            </p>

            <form
              onSubmit={login}
              className="space-y-5"
            >

              {/* Username */}
              <div>

                <label className="block text-gray-300 text-sm mb-2">
                  Username
                </label>

                <input
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                  required
                />

              </div>

              {/* Password */}
              <div>

                <label className="block text-gray-300 text-sm mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                  required
                />

              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-yellow-500/40 hover:-translate-y-1"
              >
                Login to Dashboard
              </button>

            </form>

          </div>

        </div>

        {/* Footer Text */}
        <div className="mt-6 text-center">

          <p className="text-gray-500 text-sm">
            Secure Administrator Access
          </p>

          <p className="text-gray-600 text-xs mt-2">
            © {new Date().getFullYear()} Adomako Agyenkwa Enterprise
          </p>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;