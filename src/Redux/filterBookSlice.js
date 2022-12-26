import { createSlice } from '@reduxjs/toolkit'

export const filterBookSlice = createSlice({
  name: 'filter',
  initialState: 
     ""
  ,
  reducers: {
    filtration: (state, action) => {
  
    state.filter = action.payload;
    },

  },
})
export const { filtration } = filterBookSlice.actions;
export const filterReducer = filterBookSlice.reducer;