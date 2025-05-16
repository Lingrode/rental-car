import { createSlice } from "@reduxjs/toolkit";
import { fetchCarById, fetchCars } from "./operations";

const initialState = {
  items: {
    cars: [],
    totalCars: 0,
    totalPages: 0,
    currentPage: 1,
  },
  selectedCar: null,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = {
          cars: action.payload.cars,
          totalCars: action.payload.totalCars,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.page,
        };
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.selectedCar = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
