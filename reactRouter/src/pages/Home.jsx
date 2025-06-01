import { Button } from "../components/Button";
      import { toast } from "react-toastify";
      export const Home = () => {
        const handleCreateEnvironment = (type) => {
          // Simulate environment creation
          console.log(`Creating ${type} environment...`);
          toast.success(`Creating ${type} environment...`);
      
          //  Your logic to create the environment using the CLI
        };
        return (
          <div className="flex flex-col items-center justify-center text-center space-y-6 py-20">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Welcome to Devsprint CLI
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Automate your development environment setup with ease. Choose your
              environment and get started instantly.
            </p>
            <div className="flex space-x-4">
              <Button onClick={() => handleCreateEnvironment("backend")}>
                Create Backend
              </Button>
              <Button onClick={() => handleCreateEnvironment("frontend")}>
                Create Frontend
              </Button>
              <Button onClick={() => handleCreateEnvironment("fullstack")}>
                Create Fullstack
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-800 rounded-lg text-center shadow-lg">
                <h3 className="text-xl font-semibold text-blue-400">
                  🚀 Quick Setup
                </h3>
                <p className="text-gray-300">
                  Initialize projects with a single command.
                </p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg text-center shadow-lg">
                <h3 className="text-xl font-semibold text-purple-400">
                  🔧 Custom Templates
                </h3>
                <p className="text-gray-300">
                  Pre-configured setups for backend, frontend, and full-stack.
                </p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg text-center shadow-lg">
                <h3 className="text-xl font-semibold text-green-400">
                  🌍 Open Source
                </h3>
                <p className="text-gray-300">
                  Contribute or modify as per your needs.
                </p>
              </div>
            </div>
      
            <div className="flex space-x-4 mt-8">
              <a
                href="https://github.com/your-repo"
                target="_blank"
                className="bg-gray-800 px-6 py-2 rounded-lg text-white flex items-center space-x-2 hover:bg-gray-700"
              >
                <i className="fab fa-github text-xl"></i>
                <span>GitHub Repo</span>
              </a>
              <a
                href="/docs"
                className="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600"
              >
                Documentation
              </a>
            </div>
            <div className="mt-12 bg-gray-900 p-6 rounded-lg">
              <pre className="text-green-400 font-mono text-sm">
                {`$ npx devsprint init--backend`}
              </pre>
              <p className="text-gray-400 text-sm mt-2">
                Set up a backend project instantly!
              </p>
            </div>
          </div>
        );
      };
      