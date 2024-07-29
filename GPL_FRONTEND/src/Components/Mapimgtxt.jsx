import React from 'react'
import map from '../assets/mapImg.png'

function Mapimgtxt() {
  return (
    <div className="flex justify-center items-center m-6">
      <div className="text-center text-white">
        <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4">Create your class in few clicks</h3>
        <p className="text-lg md:text-xl lg:text-xl mb-8">
          Location Coordinates of Admin 
          <br />
          monitored automataically in backend
        </p>
        <img
          className="max-w-full h-72 mx-auto md:max-w-md lg:max-w-lg"
          src={map}
          alt="map"
        />
      </div>
    </div>
  )
}

export default Mapimgtxt
