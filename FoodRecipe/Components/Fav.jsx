import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import Card from "./Card";

function Fav() {
  const { fav } = useContext(GlobalContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      {fav.length === 0 ? (
        <div className="col-span-full text-center text-gray-400 text-xl">
          No favorites yet!
        </div>
      ) : (
        fav.map((data) => <Card key={data.id} data={data} />)
      )}
    </div>
  );
}

export default Fav;
