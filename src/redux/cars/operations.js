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
      const response = await api.get("/cars", { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/cars/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchBrands = createAsyncThunk(
  "cars/fetchBrands",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/brands");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
