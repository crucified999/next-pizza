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

type TIngredientModal = {
  id: number;
  name: string;
  price: number;
}

type NextPizzaState = {
  products: TProductWithRelations[];
  categories: TCategoryWithRelations[];
  currentCategory: TCategory;
  ingredients: TIngredient[];
  modalProduct: TProductWithRelations | null;
  orderModalData: {
    pizzaSize?: number;
    pizzaType?: number;
    ingredients: TIngredientModal[];
    price: number;
  }
  totalPrice: number;
  totalCounter: number;
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
  orderModalData: {
    pizzaSize: 30,
    pizzaType: 1,
    ingredients: [],
    price: 0,
  },
  totalPrice: 0,
  totalCounter: 0,
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
      state.orderModalData.pizzaSize = action.payload;
    },

    setPizzaType: (state, action: PayloadAction<number>) => {
      state.orderModalData.pizzaType = action.payload;
    },

    // setOrderModalData: (state, action: PayloadAction<{
    //   ingredient: TIngredient;
    // }>) => {
    //   state.orderModalData.ingredients = [action.payload.ingredient];
      
    // },

    addIngredient: (state, action: PayloadAction<TIngredientModal>) => {
      state.orderModalData.ingredients.push(action.payload);
      state.orderModalData.price += action.payload.price;
      console.log(state.orderModalData.price);
    },

    removeIngredient: (state, action: PayloadAction<TIngredientModal>) => {
      state.orderModalData.price -= action.payload.price;
      state.orderModalData.ingredients = state.orderModalData.ingredients.filter(ingredient => ingredient.id !== action.payload.id);
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
    selectTotalPrice: (state) => state.totalPrice,
    selectTotalCounter: (state) => state.totalCounter,
    selectIsLoading: (state) => state.isLoading,
    selectModalProduct: (state) => state.modalProduct,
    selectOrderModalData: (state) => state.orderModalData,
  },
});

export const { setCurrentCategory, setPizzaSize, setPizzaType, addIngredient, removeIngredient } =
  nextPizzaSlice.actions;

export const {
  selectProducts,
  selectCategories,
  selectCurrentCategory,
  selectIngredients,
  selectTotalPrice,
  selectTotalCounter,
  selectIsLoading,
  selectModalProduct,
  selectOrderModalData,
} = nextPizzaSlice.selectors;

export default nextPizzaSlice.reducer;
