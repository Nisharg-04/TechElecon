import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context";
import PropTypes from "prop-types";

function Navbar({ onToggleDark, dark }) {
  const { searchPrams, setsearchPrams, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center py-6 px-4 sm:px-8 bg-white/90 dark:bg-zinc-900/90 shadow-md dark:shadow-zinc-900 sticky top-0 z-30 gap-4 lg:gap-0 border-b border-gray-100 dark:border-zinc-800 backdrop-blur">
      <h2 className="text-3xl font-bold text-red-500 tracking-tight flex items-center gap-2">
        <span className="inline-block rotate-6">🍲</span> FoodRecipe
      </h2>
      <form onSubmit={handleSubmit} className="relative w-full max-w-md">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
          <img
            src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/search.svg"
            alt="Search"
            className="w-5 h-5"
          />
        </span>
        <input
          type="text"
          name="search"
          value={searchPrams}
          onChange={(e) => setsearchPrams(e.target.value)}
          placeholder="Search recipes..."
          className="bg-white/80 dark:bg-zinc-800 p-3 pl-12 pr-8 rounded-full outline-none w-full shadow-lg focus:shadow-red-200 border border-gray-200 dark:border-zinc-700 focus:border-red-400 dark:focus:border-red-400 transition"
        />
      </form>
      <ul className="flex gap-4 text-lg font-medium items-center">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b-2 border-red-500 pb-1"
                : "text-gray-700 dark:text-gray-200 hover:text-red-400 transition"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/fav"}
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b-2 border-red-500 pb-1"
                : "text-gray-700 dark:text-gray-200 hover:text-red-400 transition"
            }
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b-2 border-red-500 pb-1"
                : "text-gray-700 dark:text-gray-200 hover:text-red-400 transition"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b-2 border-red-500 pb-1"
                : "text-gray-700 dark:text-gray-200 hover:text-red-400 transition"
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/signup"}
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b-2 border-red-500 pb-1"
                : "text-gray-700 dark:text-gray-200 hover:text-red-400 transition"
            }
          >
            Signup
          </NavLink>
        </li>
        <li>
          <button
            onClick={onToggleDark}
            className="ml-2 px-2 py-1 rounded-full bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 shadow hover:bg-gray-300 dark:hover:bg-zinc-700 transition text-base border border-gray-300 dark:border-zinc-700"
            title="Toggle dark mode"
          >
            <img
              src={
                dark
                  ? "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/moon-stars-fill.svg"
                  : "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/brightness-high-fill.svg"
              }
              alt={dark ? "Dark mode" : "Light mode"}
              className="w-5 h-5"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  onToggleDark: PropTypes.func,
  dark: PropTypes.bool,
};

export default Navbar;
