import './M1FormButton.css'
import { useSelector, useDispatch } from 'react-redux'
import { testArticleForm } from '../_redux/a-article-form'

// Consider React.memo() to stop re-render
export default function M1FormButton ({ config }) {
  const dispatch = useDispatch()
  const admin = useSelector((state) => state.User.isAdmin)
  const handleTestClick = () => {
    dispatch(testArticleForm())
  }
  return (
    <>
      {config ? <button className='form_button'>Update</button> : <button className='form_button'>Add</button>}
      {admin && <button type='button' className='form_button' onClick={handleTestClick}>Test</button>}
    </>
  )
};
