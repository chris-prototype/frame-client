import { useEffect, useState } from 'react'
import Helper from '../F1All/F1Helper.js'

export default function StationWeather ({ lat, lon }) {
  const [weatherData, setWeatherData] = useState(null)
  const baseURL = Helper.getBaseURL()

  useEffect(() => {
    Helper.fetchJSON(`${baseURL}/api_openweather/weather?lat=${lat}&lon=${lon}`, null, (json) => {
      setWeatherData(json)
    })
  }, [lat, lon])

  if (!weatherData) return null

  return (
    <>
      <p class='text-1'>Temperature: {Math.round(weatherData.main.temp)}°</p>
      <img
        id='image_weather'
        src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
        alt='Weather Icon'
      />
    </>
  )
}
