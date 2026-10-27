import { useEffect, useState } from 'react'
import Helper from '../F1All/F1Helper.js'

export default function A1Station ({ lat, lon }) {

  const [airData, setAirData] = useState(null)
  const baseURL = Helper.getBaseURL()

  useEffect(() => {
    const url = `${baseURL}/openweather/air?lat=${lat}&lon=${lon}`
    Helper.fetchJSON(url, null, (json) => {
      console.log('air', json);
      setAirData(json)
    })
  }, [lat, lon])

  return airData?.list && (
    <p class='text-1'>Air Quality: {airData.list[0].main.aqi}</p>
  )
};
