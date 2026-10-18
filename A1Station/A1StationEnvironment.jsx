import { useEffect, useState } from 'react'
import './A1StationEnvironment.css'

import getLocation from './A1StationLocation.js'
import EnviornmentWeather from './EnvironmentWeather.jsx'
import EnviornmentAir from './EnviornmentAir.jsx'

// default location is Austin, TX
export default function A1Station () {
  console.logD('DEBUG: L3 : F1-App-Station ')
  const [lat, setLat] = useState(30.2827813)
  const [lon, setLong] = useState(-97.7384504)
  useEffect(() => {
    getLocation().then((location) => {
      setLat(location.coords.latitude)
      setLong(location.coords.longitude)
      console.logD('DEBUG: navigator.geolocation: location found ' + location.coords.latitude, '#888888')
    }).catch((error) => {
      console.logD('DEBUG: no access to location: using default: message: ' + error.message, '#888888')
    })
  }, [])

  return (
      <div class='station'>
        <p class='heading-1'>
          ENVIRONMENT
        </p>
        <EnviornmentWeather lat={lat} lon={lon} />
        <EnviornmentAir lat={lat} lon={lon} />
      </div>
  )
}
