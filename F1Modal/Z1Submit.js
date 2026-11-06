import Helper from '../F1All/F1Helper.js'
import { addArticle, updateArticle } from '../_redux/a-articles'
const exp = {}
const BASE = Helper.getBaseURL()

exp.post = function (article, dispatch) {
  const options = {
    method: 'POST',
    body: JSON.stringify(article)
  }
  Helper.fetchJSON(`${BASE}/articles/add`, options, (response) => {
    console.log('article added' )
    console.log(response)
    dispatch(addArticle(response))
  })
}

exp.put = function (article, dispatch) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(article)
  }
  Helper.fetchJSON(`${BASE}/articles/put/${encodeURIComponent(article._id)}`, options, () => {
    dispatch(updateArticle({ articleNew: article, index: article.index }))
  })
}

export default exp
