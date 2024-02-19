import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { productsType, createNewProduct } from "./interfaces";
import fetchData from "../services/getData";

// Define initial state
const initialState: productsType[] = [createNewProduct()];

export const fetchDataAsync = createAsyncThunk("data/fetchData", () => {
  return fetchData()
    .then((response) => {
      return response;
    })
    .catch((er) => {
      throw er;
    });
});

// Create a slice
const counterSlice = createSlice({
  name: "rootSlice",
  initialState,
  reducers: {
    likes: (state, action: PayloadAction<number>) => {},
    dislikes: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      return [...state, ...action.payload];
    });
  },
});

// Export actions and reducer
export const { likes, dislikes } = counterSlice.actions;
export default counterSlice.reducer;
