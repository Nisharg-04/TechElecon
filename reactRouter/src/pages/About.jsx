export const About = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-20 text-center">
        <h1 className="text-5xl font-bold text-white">About Devsprint</h1>
        <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto">
          Devsprint is an open-source CLI tool designed to simplify and automate
          the creation of development environments.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-200">Meet the Team</h2>
        <div className="flex justify-center space-x-8 mt-6">
          <div className="text-center">
            <img
              src="https://imgs.search.brave.com/mYuKqM8YeN3Xo0rk0ioz3wRsMz8tw2c9O8pUk5uohlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw"
              alt="Nisharg Soni"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="text-xl text-gray-300 mt-2">Nisharg Soni</h3>
            <p className="text-gray-400">Creator & Developer</p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-200">Join Us!</h2>
        <p className="text-gray-400 mt-2">
          Devsprint is open-source. Help us improve by contributing!
        </p>
        <a
          href="https://github.com/your-repo"
          target="_blank"
          className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Contribute on GitHub
        </a>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-200">Version History</h2>
        <ul className="mt-4 text-gray-400 text-left max-w-lg mx-auto">
          <li className="border-l-4 border-purple-500 pl-4 py-2">
            <span className="text-white font-semibold">v1.1.0</span> - Improved
            backend configurations.
          </li>
          <li className="border-l-4 border-green-500 pl-4 py-2">
            <span className="text-white font-semibold">v1.0.0</span> - Initial
            release.
          </li>
        </ul>
      </div>
    </div>
  );
};
