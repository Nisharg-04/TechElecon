import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <div lassName="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-200">
      <img
        src={data.image_url}
        alt={data.publisher}
        className="w-40 h-40 object-cover rounded-lg shadow"
      />
      <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
      <h3 className="text-gray-500">{data.publisher}</h3>
      <Link
        to={`/recipe-id/${data.id}`}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
      >
        More Details
      </Link>
    </div>
  );
}

export default Card;
