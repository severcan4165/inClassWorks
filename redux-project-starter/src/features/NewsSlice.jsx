import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    newsList : [],
    loading : false,
    error : false,
}
export const getNews = createAsyncThunk(
    "getNews",
    async () => {
        const API_KEY = process.env.REACT_APP_apiKey;
        const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
        try {
           const {data} = await axios(url);
           console.log(data.articles)
           return data.articles 
        } catch (error) {
            console.log(error);
        }
    }
)

const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewList : (state) => {
        state.newsList = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state, action)=>{
        state.loading = true;
    }).addCase(getNews.fulfilled, (state, {payload})=>{
        state.newsList = payload;
        state.loading = false;

    }).addCase(getNews.rejected, (state)=>{
        state.loading = false;
        state.error = true;
    })
  }
});

export const {clearNewList} = NewsSlice.actions

export default NewsSlice.reducer