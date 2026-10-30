import { useNavigation } from './useNavigation.js'
import { SVGClock } from '../C0Vectors/SVGClock.jsx'

export default function Clock () {
  const { handleClick, classes } = useNavigation('Health')
  return (
    <div onClick={handleClick} className={classes}>
      <SVGClock className='theme-height' />
    </div>
  )
}
