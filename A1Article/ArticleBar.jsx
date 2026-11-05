import { useSelector } from 'react-redux'

import C2Favicon from '../C2Favicon/C2Favicon.jsx'
import C2Copy from '../C2Copy/C2Copy.jsx'
import C2Edit from '../C2Edit/C2Edit.jsx'
import C2Delete from '../C2Delete/C2Delete.jsx'

// css
import './ArticleBar.css'

export default function ArticleBar ({ article }) {
  const email = useSelector((state) => state.User.current.email)
  const admin = (email === 'chris.temp.level.0@gmail.com')

  return (
    <div className='article_bar'>

      {/* far right */}
      {/* <C2Flip article={article}   admin={admin}/> */}

      <div className='article_bar_main'>
        <C2Favicon className='c1_favicon' domain={article.domain} />
      </div>

      <div className='article_bar_admin'>
        <C2Copy title={article.title} />
        <C2Delete article={article} admin={admin} />
        <C2Edit article={article} admin={admin} />
      </div>

    </div>
  )
};

// import C2Flip from '../C2Flip/C2Flip.jsx'
