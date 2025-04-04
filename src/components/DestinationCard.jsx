import React from 'react'
import './DestinationCard.css'

function DestinationCard({ id, name, location, image, description, price }) {
  return (
    <div className="destination-card">
      <img src={image} alt={name} />
      <div className="destination-card-content">
        <p>{name}</p>
        <div className="location">Location: {location}</div>
        <div className="description">{description}</div>
        <div className="price">Price: {price}</div>
      </div>
    </div>
  )
}

export default DestinationCard
