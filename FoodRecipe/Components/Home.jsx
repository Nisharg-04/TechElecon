import { useContext } from "react";
import { GlobalContext } from "../Context";
import Card from "./Card";

function Home() {
  const { recipe, loading } = useContext(GlobalContext);
  return (
    <div className="min-h-[60vh] w-full">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-500"></span>
          <span className="ml-4 text-lg text-gray-400">Loading recipes...</span>
        </div>
      ) : recipe.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-40 text-gray-400 text-xl">
          <span className="text-5xl mb-2">🍽️</span>
          Search for your favorite recipes!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {recipe.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
