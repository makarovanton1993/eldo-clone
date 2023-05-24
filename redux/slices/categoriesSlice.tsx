import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import axios from "axios";

// export const fetchAllCategories = createAsyncThunk(
//     'users/fetchAllCategories',
//     async () => {
//         const response = await axios("https://63eb65cefb6b6b7cf7dd974b.mockapi.io/product");

//         return response.data[0].categories
//     }
// )

// Type for our state
export interface categoriesState {
    MainCategoriesProduct: object[],
    SupMainCategoriesProduct: object[],
    SupMainCategoriesProductCat: object[],
    allCatProduct: object[]
}

// Initial state
const initialState: categoriesState = {
    MainCategoriesProduct: [],
    SupMainCategoriesProduct: [],
    SupMainCategoriesProductCat: [],
    allCatProduct: []
};

// Actual Slice
export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        addMainCatProduct(state, action) {
            state.MainCategoriesProduct = action.payload
        },
        addSupMainCatProduct(state, action) {
            state.SupMainCategoriesProduct = action.payload
        },
        addAllCatProduct(state, action) {
            state.allCatProduct = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            const nextState = { ...state, ...action.payload };

            return nextState;
        },
    },
});

export const { addMainCatProduct, addSupMainCatProduct, addAllCatProduct } = categoriesSlice.actions;

export const MainCategoriesProduct = (state: AppState) => state.categories.MainCategoriesProduct;
export const SupMainCategoriesProduct = (state: AppState) => state.categories.SupMainCategoriesProduct;
export const SupMainCategoriesProductPlace = (state: AppState) => state.categories.SupMainCategoriesProductCat;
export const allCategoriesProduct = (state: AppState) => state.categories.allCatProduct;
export default categoriesSlice.reducer;