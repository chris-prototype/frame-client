import { useDispatch, useSelector } from 'react-redux'
import { SVGMenu } from '../C0Vectors/SVGMenu.jsx'
import MenuBox from './MenuBox.jsx'
import './F1MenuRight.css'
import { toggleMenuPage } from '../_redux/f-menu'

export default function C1MenuRight () {
  const dispatch = useDispatch()

  // useCallback to prevent redefinitions during re-render is overkill here
  const menuClicked = () => dispatch(toggleMenuPage())
  return (

    <div class="menu_right_hold">
      <SVGMenu onClick={menuClicked} id='menu_top' />
      <MenuBox />
    </div>

  )
}
