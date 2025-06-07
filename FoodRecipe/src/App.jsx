import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Fav from "../Components/Fav";
import Details from "../Components/Details";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import About from "../Components/About";
import { GlobalContext } from "../Context";

function App() {
  const { dark, toggleDark } = useContext(GlobalContext);

  return (
    <div className="min-h-screen p-0 bg-gray-50 dark:bg-zinc-900 text-gray-700 dark:text-gray-100 transition-colors duration-300">
      <Navbar onToggleDark={toggleDark} dark={dark} />
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Fav />} />
          <Route path="/recipe-id/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
