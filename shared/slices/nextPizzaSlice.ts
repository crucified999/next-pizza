import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts, getCategories } from "@/shared/services/api/api-client";
import { Category, Product } from "@prisma/client";

type NextPizzaState = {
  products: Product[];
  categories: Category[];
  sortedBy: string;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: NextPizzaState = {
  products: [],
  categories: [],
  sortedBy: "популярности",
  isLoading: false,
  error: '',
}

export const fetchProducts = createAsyncThunk("nextPizza/fetchProducts", getProducts);
export const fetchCategories = createAsyncThunk("nextPizza/fetchCategories", getCategories);

export const nextPizzaSlice = createSlice({
  name: "nextPizza",
  initialState,
  reducers: {
    setSortingCategory: (state, action: PayloadAction<string>) => {
      state.sortedBy = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Ошибка при загрузке продуктов";
    })
    .addCase(fetchCategories.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    })
    .addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Ошибка при загрузке категорий";
    })
  },
  selectors: {
    selectProducts: (state) => state.products,
    selectCategories: (state) => state.categories,
    selectSortedBy: (state) => state.sortedBy,
  }
});


export const { setSortingCategory } = nextPizzaSlice.actions;

export const { selectProducts, selectCategories, selectSortedBy } = nextPizzaSlice.selectors;

export default nextPizzaSlice.reducer;