// global css
import '../F1AllCSS/global-resets.css'
import '../F1AllCSS/global-layouts.css'
import '../F1AllCSS/global-themes.css'

// non-react files
import '../F1All/F1Custom.js'
import '../F1All/F1ServerPing.js'
import '../F1All/F1ServerData.js'
import '../F1All/F1Socket.js'
import '../F1All/F1KeyPress.js'

// react components
import F1BarTop from '../F1BarTop/F1BarTop.jsx'
import F1BarTopMorph from '../F1BarTopMorph/F1BarTopMorph.jsx'
import F1BarBottom from '../F1BarBottom/F1BarBottom.jsx'
import F1App from '../F1App/F1App.jsx'
import F1Modal from '../F1Modal/F1Modal.jsx'

// future
// import F1BarLeft from '../F1BarLeft/F1BarLeft.jsx'
export default function F1 () {
  console.logD('DEBUG: L1 : F1', '#4285f4')
  return (
    <div id='app_hold'>
      {/* Lowest visual priority by DOM order */}      
      <F1App />
      <F1BarTopMorph />
      <F1BarTop />
      <F1BarBottom />      
      <F1Modal />
      {/* Highest visual priority by DOM order */}
    </div>
  )
};


