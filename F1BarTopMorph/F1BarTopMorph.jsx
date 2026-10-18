import './F1BarTopMorph.css'
import C1Search from '../C1Search/C1Search.jsx'
import { useSelector } from 'react-redux'

export default function F1BarTopMorph () {
  console.logD('DEBUG: L2 : F1-BarTopMorph ', '#4285f4')
  const page = useSelector((state) => state.MenuPage.current)
  const isVisible = page === 'Articles'
  
  return (
    <>
      <div className={`bar_top_dynamic_hold ${isVisible ? 'is-visible' : ''}`}>
        <C1Search />
      </div>
    </>
  )
}