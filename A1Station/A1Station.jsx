import './A1Station.css'
import A1StationEnvironment from './A1StationEnvironment.jsx'
import A1StationHP from './A1StationHP.jsx'


export default function A1Station () {
  console.logD('DEBUG: L3 : F1-App-Station ')
  return (
    <div className='page_generic'>
      <A1StationEnvironment />
      <A1StationHP />
    </div>
  )
}
