export const persistenceMiddleware = store => next => action => {
  const result = next(action)
  if (action.type.startsWith('articles/')) {
    const state = store.getState()
    localStorage.setItem('articles_cache', JSON.stringify(state.Articles))
  }
  return result
}