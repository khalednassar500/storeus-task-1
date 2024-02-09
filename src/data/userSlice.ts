import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData: any = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const addFavorite = data.map((x: any) => {
    return { ...x, favorite: false };
  });
  return addFavorite;
});

export const postData: any = createAsyncThunk(
  "data/postData",
  async (postData) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    data.id = Math.random().toString(36).substr(2, 5);
    return data;
  }
);

const userSlice: any = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
    error: null,
    formError: null,
    formLoading: false,
  },
  reducers: {
    handleFavorite: (state: any, action: any) => {
      state.data = state.data.map((x: any) => {
        if (x.id === action.payload) {
          return { ...x, favorite: !x.favorite };
        }
        return { ...x };
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state: any, action: any) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postData.pending, (state: any) => {
        state.formLoading = true;
      })
      .addCase(postData.fulfilled, (state: any, action: any) => {
        state.formLoading = false;
        state.data = [...state.data, action.payload];
        state.formError = null;
      })
      .addCase(postData.rejected, (state: any, action: any) => {
        state.formLoading = false;
        state.formError = action.error.message;
      });
  },
});

export default userSlice;
