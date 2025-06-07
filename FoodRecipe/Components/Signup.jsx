import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password || !confirm) {
      setError("Please fill all fields.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    alert("Account created! (Demo only)");
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 mt-12 border border-gray-100 dark:border-zinc-700">
      <h2 className="text-2xl font-bold mb-6 text-center text-red-500">
        Sign Up
      </h2>
      <form onSubmit={handleSignup} className="flex flex-col gap-4">
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-3 rounded bg-gray-100 dark:bg-zinc-700 outline-none"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button
          type="submit"
          className="bg-gradient-to-r from-red-400 to-red-600 text-white rounded-full py-2 font-semibold hover:from-red-500 hover:to-red-700 transition"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-red-500 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}
