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
        const { cars, totalCars, totalPages, page } = action.payload;

        state.isLoading = false;

        if (page > 1) {
          state.items.cars.push(...cars);
        } else {
          state.items.cars = cars;
        }

        state.items.totalCars = totalCars;
        state.items.totalPages = totalPages;
        state.items.currentPage = page;
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
