import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Demo: Accept any non-empty email/password
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    alert("Logged in! (Demo only)");
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 mt-12 border border-gray-100 dark:border-zinc-700">
      <h2 className="text-2xl font-bold mb-6 text-center text-red-500">
        Login
      </h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded bg-gray-100 dark:bg-zinc-700 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded bg-gray-100 dark:bg-zinc-700 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button
          type="submit"
          className="bg-gradient-to-r from-red-400 to-red-600 text-white rounded-full py-2 font-semibold hover:from-red-500 hover:to-red-700 transition"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="text-red-500 hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}
