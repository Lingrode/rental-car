import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  status: "idle",
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
});

export default carsSlice.reducer;
