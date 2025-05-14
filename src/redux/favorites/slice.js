import { createSlice } from "@reduxjs/toolkit";

const favotitesSlice = createSlice({
  name: "favorites",
  initialState: JSON.parse(localStorage.getItem("favorites")) || [],
});

export default favotitesSlice.reducer;
