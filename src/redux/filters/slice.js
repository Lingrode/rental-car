import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  price: "",
  mileageFrom: "",
  mileageTo: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
});

export default filtersSlice.reducer;
