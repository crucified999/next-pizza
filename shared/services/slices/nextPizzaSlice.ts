import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getCategories,
  getProducts,
  getIngredients,
  getCategoryById,
  getProductById,
} from "@/shared/services/api/api-client";
import { TCategory, TIngredient } from "@/shared/services/api/types";
import { TCategoryWithRelations, TProductWithRelations } from "@/types/prisma";

type NextPizzaState = {
  products: TProductWithRelations[];
  categories: TCategoryWithRelations[];
  currentCategory: TCategory;
  ingredients: TIngredient[];
  modalProduct: TProductWithRelations | null;
  orderPizzaSize: number;
  orderPizzaType: number;
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
  modalProduct: null,
  orderPizzaSize: 30,
  orderPizzaType: 1,
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

export const fetchProductById = createAsyncThunk(
  "nextPizza/fetchProductById",
  getProductById
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

    setPizzaSize: (state, action: PayloadAction<number>) => {
      state.orderPizzaSize = action.payload;
    },

    setPizzaType: (state, action: PayloadAction<number>) => {
      state.orderPizzaType = action.payload;
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
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.modalProduct = action.payload;

        console.log(state.modalProduct);
        console.log("Action Payload: ", action.payload);
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Ошибка при загрузке продукта";
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
    selectIsLoading: (state) => state.isLoading,
    selectModalProduct: (state) => state.modalProduct,
    selectPizzaSize: (state) => state.orderPizzaSize,
    selectPizzaType: (state) => state.orderPizzaType,
  },
});

export const { setCurrentCategory, setPizzaSize, setPizzaType } =
  nextPizzaSlice.actions;

export const {
  selectProducts,
  selectCategories,
  selectCurrentCategory,
  selectSortedBy,
  selectIngredients,
  selectTotalPrice,
  selectTotalCounter,
  selectIsLoading,
  selectModalProduct,
  selectPizzaSize,
  selectPizzaType,
} = nextPizzaSlice.selectors;

export default nextPizzaSlice.reducer;
