import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "../features/post.slice";
import cartReducer, { getTotals } from "../Cart/CartSlice"

const store = configureStore({
	reducer: {

		[postSlice.name]: postSlice.reducer,
		cart: cartReducer,
	},
});

store.dispatch(getTotals());

export default store;