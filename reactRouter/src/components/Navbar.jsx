import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold text-white">
          Devsprint CLI
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white text-lg">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white text-lg">
            About
          </Link>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
