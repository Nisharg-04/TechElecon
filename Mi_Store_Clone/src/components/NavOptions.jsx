import React from "react";
import NavCard from "./NavCard.jsx";
import "../styles/NavOptios.css";
function NavOptions({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) {
  return (
    <div className="navOptions">
      {miPhones &&
        miPhones.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}

      {redmiPhones &&
        redmiPhones.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}

      {tv &&
        tv.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}

      {laptop &&
        laptop.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}

      {fitnessAndLifeStyle &&
        fitnessAndLifeStyle.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}

      {home &&
        home.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}

      {audio &&
        audio.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}

      {accessories &&
        accessories.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))}
    </div>
  );
}

export default NavOptions;
