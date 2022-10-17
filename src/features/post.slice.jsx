import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFragrancesList, getHomedecorationList, getLaptopList, getMenList, getMenshoesList, getPostList, getSkinList, getSmartphoneList, getSunglassesList, getTopsellList, getWomenList, getWomenshoesList } from "../services/post.api";


export const fetchPostList = createAsyncThunk(
	"post/fetchPostList",
	async () => {
		return await getPostList();
	}
);

export const fetchSkinList = createAsyncThunk(
	"post/fetchSkinList",
	async () => {
		return await getSkinList();
	}
);

export const fetchSmartphoneList = createAsyncThunk(
	"post/fetchSmartphoneList",
	async () => {
		return await getSmartphoneList();
	}
);

export const fetchFragrancesList = createAsyncThunk(
	"post/fetchFragrancesList",
	async () => {
		return await getFragrancesList();
	}
);

export const fetchWomenList = createAsyncThunk(
	"post/fetchWomenList",
	async () => {
		return await getWomenList();
	}
);
export const fetchMenList = createAsyncThunk(
	"post/fetchMenList",
	async () => {
		return await getMenList();
	}
);
export const fetchLaptopList = createAsyncThunk(
	"post/fetchLaptopList",
	async () => {
		return await getLaptopList();
	}
);
export const fetchWomenshoesList = createAsyncThunk(
	"post/fetchWomenshoesList",
	async () => {
		return await getWomenshoesList();
	}
);
export const fetchMenshoesList = createAsyncThunk(
	"post/fetchMenshoesList",
	async () => {
		return await getMenshoesList();
	}
);
export const fetchHomedecorationList = createAsyncThunk(
	"post/fetchHomedecorationList",
	async () => {
		return await getHomedecorationList();
	}
);
export const fetchSunglassesList = createAsyncThunk(
	"post/fetchSunglassesList",
	async () => {
		return await getSunglassesList();
	}
);

export const fetchTopsellList = createAsyncThunk(
	"post/fetchTopsellList",
	async () => {
		return await getTopsellList();
	}
);

export const postSlice = createSlice({
	name: "post",
	initialState: {
		posts: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPostList.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
		builder.addCase(fetchSkinList.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
		builder.addCase(fetchSmartphoneList.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
		builder.addCase(fetchFragrancesList.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
		builder.addCase(fetchWomenList.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
		builder.addCase(fetchMenList.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
		builder.addCase(fetchWomenshoesList.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
		builder.addCase(fetchMenshoesList.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
		builder.addCase(fetchLaptopList.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
		builder.addCase(fetchHomedecorationList.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
		builder.addCase(fetchSunglassesList.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
		builder.addCase(fetchTopsellList.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
	},
});
// eslint-disable-next-line
export const { } = postSlice.actions; 
