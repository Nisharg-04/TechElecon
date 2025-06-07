export default function About() {
  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 mt-12 border border-gray-100 dark:border-zinc-700">
      <h2 className="text-3xl font-bold mb-4 text-red-500 text-center">
        About FoodRecipe
      </h2>
      <p className="mb-4 text-lg text-gray-700 dark:text-gray-200 text-center">
        FoodRecipe is a modern web app to discover, search, and save your
        favorite recipes. Built with React and Tailwind CSS, it features a
        beautiful UI, dark mode, and persistent favorites.
      </p>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
        <li>🔍 Search for recipes from a huge database</li>
        <li>❤️ Save and manage your favorite recipes</li>
        <li>🌙 Switch between light and dark mode</li>
        <li>🔒 Demo login/signup (no real authentication)</li>
        <li>⚡ Fast, responsive, and mobile-friendly</li>
      </ul>
      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} FoodRecipe. Made with ❤️ for food
        lovers.
      </div>
    </div>
  );
}
