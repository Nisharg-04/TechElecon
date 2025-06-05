import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import Card from "./Card";

function Home() {
  const { recipe } = useContext(GlobalContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      {recipe.map((data, i) => {
        return <Card key={data.id} data={data} />;
      })}
    </div>
  );
}

export default Home;
