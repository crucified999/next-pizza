import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getCategories,
  getProducts,
  getIngredients,
  getCategoryById,
} from "@/shared/services/api/api-client";
import { TCategory, TIngredient } from "@/shared/services/api/types";
import { TCategoryWithRelations, TProductWithRelations } from "@/types/prisma";

type NextPizzaState = {
  products: TProductWithRelations[];
  categories: TCategoryWithRelations[];
  currentCategory: TCategory;
  ingredients: TIngredient[];
  totalPrice: number;
  totalCounter: number;
  sortedBy: string;
  isLoading: boolean;
  error: string | undefined;
};

const initialState: NextPizzaState = {
  products: [],
  categories: [],
  currentCategory: {
    id: 1,
    name: "Пиццы",
  },
  ingredients: [],
  totalPrice: 0,
  totalCounter: 0,
  sortedBy: "популярности",
  isLoading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "nextPizza/fetchProducts",
  getProducts
);
export const fetchCategories = createAsyncThunk(
  "nextPizza/fetchCategories",
  getCategories
);
export const fetchIngredients = createAsyncThunk(
  "nextPizza/fetchIngredients",
  getIngredients
);
export const fetchCategoryById = createAsyncThunk(
  "nextPizza/fetchCategoryById",
  getCategoryById
);

export const nextPizzaSlice = createSlice({
  name: "nextPizza",
  initialState,
  reducers: {
    setCurrentCategory: (state, action: PayloadAction<TCategory>) => {
      state.currentCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
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
      .addCase(fetchCategories.pending, (state) => {
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
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message || "Ошибка при загрузке ингредиентов";
      });
  },
  selectors: {
    selectProducts: (state) => state.products,
    selectCategories: (state) => state.categories,
    selectCurrentCategory: (state) => state.currentCategory,
    selectIngredients: (state) => state.ingredients,
    selectSortedBy: (state) => state.sortedBy,
    selectTotalPrice: (state) => state.totalPrice,
    selectTotalCounter: (state) => state.totalCounter,
  },
});

export const { setCurrentCategory } = nextPizzaSlice.actions;

export const {
  selectProducts,
  selectCategories,
  selectCurrentCategory,
  selectSortedBy,
  selectIngredients,
  selectTotalPrice,
  selectTotalCounter,
} = nextPizzaSlice.selectors;

export default nextPizzaSlice.reducer;
