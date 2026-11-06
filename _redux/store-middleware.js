import { saveCache } from '../F1LS/F1LSArticles.js';

export const persistenceMiddleware = store => next => action => {
  const result = next(action)
  if (action.type.startsWith('articles/')) {
    const state = store.getState()
    saveCache(state.Articles)   
    // console.logD('localStorage udpated')
    // console.log(state.Articles);
  }
  return result
}

export const logger = store => next => action => {
  return next(action)
}

export const errorMiddleware = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('REDUX: MIDDLEWARE: ERROR', err)
    throw err
  }
}