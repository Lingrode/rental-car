import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://car-rental-api.goit.global";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (params, { rejectWithValue }) => {
    try {
      const res = await api.get("/cars", { params });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.get(`/cars/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchBrands = createAsyncThunk(
  "cars/fetchBrands",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/brands");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
