import React from 'react'

function Offer({link, src,index}) {
  return (
    <a href={link}> <img src={src} alt={`${index} offer`} /></a>
  )
}

export default Offer