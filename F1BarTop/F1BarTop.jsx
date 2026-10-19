import F1BTLeft from './F1BTLeft.jsx'
import F1BTCenter from './F1BTCenter.jsx'
import F1BTRight from './F1BTRight.jsx'
import './F1BarTop.css'

import C1Search from '../C1Search/C1Search.jsx'

export default function F1BarTop () {
  console.logD('DEBUG: L2 : F1-BarTop ', '#4285f4')
  return (
    <>
      <div className='apex_hold'>
        <div className='apex_outer'>
          <F1BTLeft />
          <F1BTCenter />
          <F1BTRight />
        </div>
      </div>
    </>
  )
}
