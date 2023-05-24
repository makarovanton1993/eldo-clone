import { configureStore, ThunkAction, Action, combineReducers, AnyAction } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { categoriesSlice } from "./slices/categoriesSlice";
import { userSlice } from "./slices/userSlice";

const combinedReducer = combineReducers({
  cart: cartSlice.reducer,
  categories: categoriesSlice.reducer,
  user: userSlice.reducer,
});
const reducer: any = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
export const makeStore = () =>
  configureStore({
    reducer
    , devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore['dispatch'];
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);


// export const store = () =>
//   configureStore({
//     reducer: {
//       cart: cartSlice.reducer,
//       categories: categoriesSlice.reducer,
//     },
//     devTools: true,
//   });

// export type AppStore = ReturnType<typeof store>;

// export type AppDispatch = AppStore['dispatch'];
// export type AppState = ReturnType<AppStore["getState"]>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   Action
// >;

// export const wrapper = createWrapper<AppStore>(store);