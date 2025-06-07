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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-4 h-4"
              >
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              <span>Fav</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.657 0-3.156.832-4 2.09A4.978 4.978 0 007 3.75c-2.761 0-5 2.015-5 4.5 0 2.485 2.239 4.5 5 4.5.795 0 1.551-.154 2.236-.434l1.264 1.264a.75.75 0 001.06 0l1.264-1.264A4.978 4.978 0 0017 12.75c2.761 0 5-2.015 5-4.5z"
                />
              </svg>
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
