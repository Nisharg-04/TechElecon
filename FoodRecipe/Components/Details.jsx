import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context";

function Details() {
  const { details, setDetails, addFav, removeFav, fav } =
    useContext(GlobalContext);
  const { id } = useParams();
  useEffect(() => {
    async function fetchdetails() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();
      setDetails(data.data);
    }
    fetchdetails();
    // eslint-disable-next-line
  }, [id]);

  if (!details?.recipe) {
    return (
      <div className="flex flex-col items-center justify-center h-60 text-gray-400 text-xl">
        <span className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-500 mb-4"></span>
        Loading recipe details...
      </div>
    );
  }

  const isFav = fav.some((item) => item.id === details.recipe.id);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 mt-8 border border-gray-100">
      <h3 className="text-3xl font-extrabold mb-4 text-red-500 text-center">
        {details.recipe.title}
      </h3>
      <img
        src={details.recipe.image_url}
        alt={details.recipe.title}
        className="w-full max-h-96 object-cover rounded-xl mb-6 shadow-lg"
      />
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-6 gap-4">
        <span className="text-gray-500 text-lg font-medium">
          By {details.recipe.publisher}
        </span>
        <button
          onClick={() =>
            isFav ? removeFav(details.recipe.id) : addFav(details.recipe)
          }
          className={`px-6 py-2 rounded-full font-semibold shadow transition flex items-center gap-2 ${
            isFav
              ? "bg-red-100 text-red-500 hover:bg-red-200"
              : "bg-gradient-to-r from-red-400 to-red-600 text-white hover:from-red-500 hover:to-red-700"
          }`}
        >
          {isFav ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-5 h-5"
              >
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              Remove from Favorites
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.657 0-3.156.832-4 2.09A4.978 4.978 0 007 3.75c-2.761 0-5 2.015-5 4.5 0 2.485 2.239 4.5 5 4.5.795 0 1.551-.154 2.236-.434l1.264 1.264a.75.75 0 001.06 0l1.264-1.264A4.978 4.978 0 0017 12.75c2.761 0 5-2.015 5-4.5z"
                />
              </svg>
              Add to Favorites
            </>
          )}
        </button>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-2 text-gray-700">
          Ingredients:
        </h4>
        <ul className="space-y-2">
          {details.recipe.ingredients?.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 bg-gray-100 rounded p-3 shadow-sm"
            >
              <span className="font-medium text-gray-800">
                {item.description}
              </span>
              <span className="text-gray-500">
                {item.quantity ?? ""} {item.unit ?? ""}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Details;
