import './F1App.css'
import { useSelector } from 'react-redux'

import A1User from '../A1User/A1User.jsx'
import A1Article from '../A1Article/A1Article.jsx'
import A1Station from '../A1Station/A1Station.jsx'
import A1Finance from '../A1Finance/A1Finance.jsx'
import { A1Domains } from '../A1Domains/A1Domains.jsx'

export default function F1App () {
  const page = useSelector((state) => state.MenuPage.current)
  console.logD('DEBUG: L2 : F1-App', '#4285f4')
  return (
    <div className='page_hold'>
      <div className='page_container'>
        {(page === 'User') && <A1User />}
        {(page === 'Articles') && <A1Article />}
        {(page === 'Health') && <A1Station />}
        {(page === 'Finance') && <A1Finance />}
        {(page === 'Domains') && <A1Domains />}
      </div>
    </div>
  )
};

// import A1People from '../A1People/A1People.jsx'
// {(page === 'People') && <A1People />} */}
