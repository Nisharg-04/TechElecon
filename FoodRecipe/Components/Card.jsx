import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../Context";

function Card({ data }) {
  const { fav, addFav, removeFav } = useContext(GlobalContext);
  const isFav = fav.some((item) => item.id === data.id);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-200 border border-gray-100 group relative overflow-hidden">
      <img
        src={data.image_url}
        alt={data.publisher}
        className="w-40 h-40 object-cover rounded-xl shadow group-hover:shadow-lg group-hover:ring-2 group-hover:ring-red-200 transition"
      />
      <h2 className="text-lg font-bold text-gray-800 text-center line-clamp-2 min-h-[3rem]">
        {data.title}
      </h2>
      <h3 className="text-gray-500 text-sm mb-2">By {data.publisher}</h3>
      <div className="flex gap-2 w-full justify-center">
        <Link
          to={`/recipe-id/${data.id}`}
          className="px-4 py-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-full shadow hover:from-red-500 hover:to-red-700 transition font-semibold text-sm"
        >
          More Details
        </Link>
        <button
          onClick={() => (isFav ? removeFav(data.id) : addFav(data))}
          className={`px-3 py-2 rounded-full shadow text-sm font-semibold transition flex items-center gap-1 ${
            isFav
              ? "bg-red-100 text-red-500 hover:bg-red-200"
              : "bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-500"
          }`}
          title={isFav ? "Remove from Favorites" : "Add to Favorites"}
        >
          {isFav ? (
            <>
              <img
                src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/heart-fill.svg"
                alt="Fav"
                className="w-4 h-4"
              />
              <span>Fav</span>
            </>
          ) : (
            <>
              <img
                src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/heart.svg"
                alt="Add"
                className="w-4 h-4"
              />
              <span>Add</span>
            </>
          )}
        </button>
      </div>
      <span className="absolute top-3 right-3 bg-red-100 text-red-500 px-2 py-1 rounded text-xs font-semibold shadow-sm">
        ID: {data.id}
      </span>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image_url: PropTypes.string,
    publisher: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Card;
