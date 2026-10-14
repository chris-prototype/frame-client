import './MenuBox.css'

import MenuBoxItem from './MenuBoxItem.jsx'
import MenuBoxItemAdd from './MenuBoxItemAdd.jsx'

/* SVGs */
import { SVGAdd } from '../C0Vectors/SVGAdd.jsx'
import { SVGUser } from '../C0Vectors/SVGUser.jsx'
import { SVGArticle } from '../C0Vectors/SVGArticle.jsx'
// import { SVGBookmark } from '../C0Vectors/SVGBookmark.jsx'
import { SVGClock } from '../C0Vectors/SVGClock.jsx'
// import { SVGFinance } from '../C0Vectors/SVGFinance.jsx'

/* React and Redux */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenuPageOff } from '../_redux/f-menu'

export default function MenuBox () {
  const dispatch = useDispatch()
  const MenuOn = useSelector((state) => state.MenuPage.on)

  useEffect(() => {
    // if put outside of useEffect; we have a memory leak
    function bodyClicked (event) {
      const isMenuClick = event.target.closest('#menu_top')
      if (!isMenuClick) {
        dispatch(toggleMenuPageOff())
      }
    }
    document.body.addEventListener('click', bodyClicked)
    return () => {
      document.body.removeEventListener('click', bodyClicked)
    }
  }, [])

  return (

    <span className={`menu_box ${MenuOn ? 'is_visible_box' : ''}`}>
      <MenuBoxItemAdd name='Add'>
        <SVGAdd />
      </MenuBoxItemAdd>
      <MenuBoxItem name='User'>
        <SVGUser />
      </MenuBoxItem>
      <MenuBoxItem name='Articles'>
        <SVGArticle />
      </MenuBoxItem>
      <MenuBoxItem name='Station'>
        <SVGClock />
      </MenuBoxItem>
    </span>

  )
};

// <MenuBoxItem name='Finance'>
//   <SVGFinance />
// </MenuBoxItem>

// <MenuBoxItem name='Domains'>
//   <SVGBookmark />
// </MenuBoxItem>
