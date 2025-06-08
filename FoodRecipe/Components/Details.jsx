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
              <img
                src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/heart-fill.svg"
                alt="Remove from Favorites"
                className="w-5 h-5"
              />
              Remove from Favorites
            </>
          ) : (
            <>
              <img
                src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/heart.svg"
                alt="Add to Favorites"
                className="w-5 h-5"
              />
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
