import { useContext } from "react";
import { GlobalContext } from "../Context";
import Card from "./Card";

function Fav() {
  const { fav, removeFav, clearFav } = useContext(GlobalContext);
  return (
    <div className="min-h-[60vh] w-full">
      {fav.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-40 text-gray-400 text-xl">
          <span className="text-5xl mb-2">❤️</span>
          No favorites yet!
        </div>
      ) : (
        <>
          <div className="flex justify-end mb-4">
            <button
              onClick={clearFav}
              className="px-4 py-2 bg-red-100 text-red-600 rounded-full font-semibold hover:bg-red-200 transition text-sm shadow"
            >
              Clear All Favorites
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-2">
            {fav.map((data) => (
              <div key={data.id} className="relative group">
                <Card data={data} />
                <button
                  onClick={() => removeFav(data.id)}
                  className="absolute top-3 right-3 bg-white/90 border border-red-200 text-red-500 rounded-full p-2 shadow hover:bg-red-100 transition opacity-80 group-hover:opacity-100"
                  title="Remove from Favorites"
                >
                  <img
                    src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/x-lg.svg"
                    alt="Remove"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Fav;
