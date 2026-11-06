import Helper from '../F1All/F1Helper.js'
import store from '../_redux/store'
import { initializeUser } from '../_redux/f-user'
import { initializeArticles } from '../_redux/a-articles'
import { getCache, saveCache } from '../F1LS/F1LSArticles.js';

(() => {
  const urls = Helper.getURLs(true)
  const cache = getCache()
  console.log(cache?.articles?.length);
  if (cache?.articles?.length > 0) {
      console.logD('DEBUG: L2 : F1-Data: localStorage utilized: ' + cache.articles.length + ' articles loaded', '#34A853')
    store.dispatch(initializeArticles(cache.articles))
  } else {
    console.logD('DEBUG: L2 : F1-Data: fetch utilized:', '#34A853')
    Helper.fetchJSON(urls.articles, undefined, (arts) => {
      saveCache(arts)
      store.dispatch(initializeArticles(arts))
    })
  }
  Helper.fetchJSON(urls.users, undefined, (user) => { store.dispatch(initializeUser(user)) })

})()
