import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './store-reducers'
import { persistenceMiddleware } from './persistenceMiddleware'
import { logger, errorMiddleware } from './store-middleware'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistenceMiddleware, logger, errorMiddleware)
})

export default store
