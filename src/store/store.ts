import { configureStore } from '@reduxjs/toolkit'
import dropDownMenuSliceReducer from './dropDownMenu/dropDownMenuSlice'
import { videoApi } from './videoApi/videoApi'

export const store = configureStore({
  reducer: {
    dropDownMenu: dropDownMenuSliceReducer,
    [videoApi.reducerPath]: videoApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videoApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
