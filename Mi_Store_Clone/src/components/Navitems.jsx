import React from 'react'
import NavCard from "./NavCard.jsx"
import "../styles/NavOptios.css"
function Navitems({miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) {
  return (
    <div className="navOptions">  
        
        {miPhones && miPhones.map((item)=>(

        < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
     ))}
     
     
     
     
     </div>
  )
}

export default Navitems