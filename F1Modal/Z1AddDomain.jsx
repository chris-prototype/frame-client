import arc from 'frame-arc'
import { updateArticleForm } from '../_redux/a-article-form'

export default function Z1AddDomain (name, value, dispatch) {
  if (name === 'link') {
    const url = new arc.URL(value)
    if (url.valid) {
      dispatch(updateArticleForm(['domain', url.domain, true]))
    } else {
      dispatch(updateArticleForm(['domain', '', false]))
    }
  }
}