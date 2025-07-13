import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NextPizzaState = {
  sortedBy: string;
}

const initialState: NextPizzaState = {
  sortedBy: "популярности"
}

export const nextPizzaSlice = createSlice({
  name: "nextPizza",
  initialState,
  reducers: {
    setSortingCategory: (state, action: PayloadAction<string>) => {
      state.sortedBy = action.payload;
    }
  },
  selectors: {
    selectSortedBy: (state) => state.sortedBy,
  }
});


export const { setSortingCategory } = nextPizzaSlice.actions;

export const { selectSortedBy } = nextPizzaSlice.selectors;

export default nextPizzaSlice.reducer;