import { createSlice } from '@reduxjs/toolkit'
import { store } from '../store'

type DropDownMenuState = {
  value: boolean
}

const initialState: DropDownMenuState = {
  value: false
}

const dropDownMenuSlice = createSlice({
  name: 'dropDownMenu',
  initialState,
  reducers: {
    changeStatus(state) {
      state.value = state.value ? false : true
    }
  }
})

export type RootState = ReturnType<typeof store.getState>
export const { changeStatus } = dropDownMenuSlice.actions
export default dropDownMenuSlice.reducer
