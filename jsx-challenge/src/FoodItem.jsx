import React from 'react'

const imageStyle = {
    height: "400px",
    width: "400px"
}

const FoodItem = ({name, src, time, place}) => {
  return (
    <article>
        <h4>{name}</h4>
        <img style={imageStyle} src={src} alt={name}/>
        <p>Best time to eat: <span>{time}</span></p>
        <p>Best place: <span>{place}</span></p>
    </article>
  )
}

export default FoodItem