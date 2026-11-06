import './M1Form.css'
import { useSelector, useDispatch } from 'react-redux'
import M1FormInputs from './M1FormInputs.jsx'
import M1FormButton from './M1FormButton.jsx'
import Submit from './Z1Submit.js'
import makeObject from './M1FormHelper.js'
import { clearArticleForm } from '../_redux/a-article-form'
import { toggleModalOff } from '../_redux/f-modal'

export default function M1Form () {
  const dispatch = useDispatch()
  const articleForm = useSelector((state) => state.ArticleForm) || {}
  const config = useSelector((state) => state.Modal.config)
  const admin = useSelector((state) => state.User.isAdmin)

  function onSubmit (event) {
    event.preventDefault()
    if (!admin) return alert('You must be logged in as an administrator for this operation')
    if (!articleForm.valid) return alert('Form has errors. Please correct.')
    dispatch(clearArticleForm())
    dispatch(toggleModalOff())
    const payload = makeObject(articleForm)
    
    // edit article
    if (config) {
      Submit.put(payload, dispatch)

    // create article
    } else {
      Submit.post(payload, dispatch)
    }
    alert('Action completed.  Thank you.')
  }

  return (
    <form autoComplete='off' className='modal-form' onSubmit={onSubmit}>
      <M1FormInputs />
      <M1FormButton config={config} />
    </form>
  )
};
