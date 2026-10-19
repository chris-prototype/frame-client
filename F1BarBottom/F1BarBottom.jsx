import './F1BarBottom.css'
import { useSelector } from 'react-redux'
import config from '../F1All/config_all.js'

export default function F1BarBottom () {
  console.logD('DEBUG: L2 : F1-BarBottom ', '#4285f4')

  const page = useSelector((state) => state.MenuPage.current)
  const style = (page === 'User') ? 'footer_show ' : 'footer_hide'

  return (
    <div className={`footer_hold ${style}`}>
      <a className='footer_item' target='_blank' href={config.github} rel='noreferrer'>github</a>
    </div>
  )
};
