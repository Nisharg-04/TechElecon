import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context";

function Details() {
  const { details, setDetails, addFav } = useContext(GlobalContext);
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
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8">
      <h3 className="text-3xl font-bold mb-4 text-red-500">
        {details?.recipe.title}
      </h3>
      <img
        src={details?.recipe.image_url}
        alt={details?.recipe.title}
        className="w-full max-h-96 object-cover rounded-lg mb-6"
      />
      <button
        onClick={() => addFav(details?.recipe)}
        className="mb-6 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
      >
        Add to Fav
      </button>
      <div>
        <h4 className="text-xl font-semibold mb-2">Ingredients:</h4>
        <ul className="space-y-2">
          {details?.recipe?.ingredients?.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 bg-gray-100 rounded p-3"
            >
              <span className="font-medium">{item.description}</span>
              <span className="text-gray-500">{item.quantity ?? ""}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Details;
