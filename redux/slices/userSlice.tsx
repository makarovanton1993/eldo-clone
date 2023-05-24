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


export interface userState {
    currentUser: object,
    isAuth: boolean,
    isProcessingPersonalData: boolean;
}

const initialState: userState = {
    currentUser: {},
    isAuth: false,
    isProcessingPersonalData: false,
};

// Actual Slice
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getcurrentUser(state, action) {
            state.currentUser = action.payload;
        },
        authStatus(state, action) {
            state.isAuth = action.payload;
        },
        editProcessingPersonalData(state, action) {
            state.isProcessingPersonalData = action.payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            const nextState = { ...state, ...action.payload };

            return nextState;
        },
    },
});

export const { getcurrentUser, authStatus, editProcessingPersonalData } = userSlice.actions;

export const user = (state: AppState) => state.user.currentUser;
export const auth = (state: AppState) => state.user.isAuth;
export const isPersonalDataStatus = (state: AppState) => state.user.isProcessingPersonalData;

export default userSlice.reducer;