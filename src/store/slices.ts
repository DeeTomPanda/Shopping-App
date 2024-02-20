import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { productsType, createNewProduct, rootState } from "./interfaces";
import fetchData from "../services/getData";

// Define initial state
const initialState: rootState = { products: [], selectedProducts: [] };

export const fetchDataAsync = createAsyncThunk<productsType[]>(
  "data/fetchData",
  (): Promise<productsType[]> => {
    return fetchData()
      .then((response) => {
        return response;
      })
      .catch((er) => {
        throw er;
      });
  }
);

// Create a slice
const rootSlice = createSlice({
  name: "rootSlice",
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<productsType>) => {
      console.log(action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchDataAsync.fulfilled,
      (state, action: PayloadAction<Array<productsType>>) => {
        return { ...state, products: action.payload };
      }
    );
  },
});

// Export actions and reducer
export const { selectProduct } = rootSlice.actions;
export default rootSlice.reducer;
