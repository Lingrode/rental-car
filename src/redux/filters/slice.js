import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "../cars/operations";

const initialState = {
  brand: "",
  rentalPrice: "",
  mileageFrom: "",
  mileageTo: "",
  isLoading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action) {
      Object.assign(state, action.payload);
    },
    clearFilters(state) {
      state.brand = "";
      state.rentalPrice = "";
      state.mileageFrom = "";
      state.mileageTo = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
