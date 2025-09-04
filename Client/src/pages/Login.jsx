import React, { useState } from "react";

const LoginPage = () => {
  // 🔹 States for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    // Dummy login logic
    console.log("Logging in with:", { email, password });
    setError(""); // clear error
  };

  return (
    <div className="flex flex-1 items-center justify-center min-h-screen ">
      <div className="w-full max-w-md  bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
        {/* Premium Gradient Border Effect */}
        <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 -z-10"></div>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Login to access your premium dashboard
        </p>

        {error && (
          <p className="mb-4 text-red-500 text-center font-medium">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full text-black px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full text-black px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:scale-[1.02] transition-transform"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <div className="mt-6 flex justify-between text-sm text-gray-500">
          <a href="#" className="hover:text-purple-600">
            Forgot password?
          </a>
          <a href="#" className="hover:text-purple-600">
            Create account
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
