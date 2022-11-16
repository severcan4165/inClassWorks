import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    newsList : [],
    loading : false,
    error : false,
}

const NewsSlice = createSlice({
  name: second,
  initialState,
  reducers: {
    clearNewList : (state) => {
        state.newsList = [];
    }
  }
});

export const {clearNewList} = NewsSlice.actions

export default NewsSlice.reducer