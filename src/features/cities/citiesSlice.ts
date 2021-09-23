import { createSlice } from "@reduxjs/toolkit";

// define interface for typescript validation
export interface ModalState {
  selectedCities: [];
  weatherInfoOfCity: [];
}

// intital state of cities
const initialState: ModalState = {
  selectedCities: [],
  weatherInfoOfCity: [],
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addToList: (state: any, action) => {
      state.selectedCities = [...state.selectedCities, action.payload];
    },
    removeFromBookmarks: (state: any, action) => {
      const objIndex = state.selectedCities.findIndex(
        (obj: any) => obj.id === action.payload
      );
      state.selectedCities[objIndex].bookmarked = false;
      if (state.weatherInfoOfCity.id === action.payload) {
        state.weatherInfoOfCity.bookmarked = false;
      }
    },
    addToBookmarks: (state: any, action) => {
      const objIndex = state.selectedCities.findIndex(
        (obj: any) => obj.id === action.payload
      );
      state.selectedCities[objIndex].bookmarked = true;
      if (state.weatherInfoOfCity.id === action.payload) {
        state.weatherInfoOfCity.bookmarked = true;
      }
    },
    updateSelectedCity: (state: any, action) => {
      const objIndex = state.selectedCities.findIndex(
        (obj: any) => obj.id === action.payload
      );
      state.selectedCities = state.selectedCities.map((data: any) => ({
        ...data,
        selected: false,
      }));
      state.selectedCities[objIndex].selected = true;
    },
    addWeatherInfoOfCity: (state: any, action) => {
      state.weatherInfoOfCity = action.payload;
    },
  },
});

export const {
  addToList,
  addToBookmarks,
  removeFromBookmarks,
  addWeatherInfoOfCity,
  updateSelectedCity,
} = citiesSlice.actions;

export const allSelectedCities = (state: any) => state.cities.selectedCities;

export const weatherInfoOfCity = (state: any) => state.cities.weatherInfoOfCity;

export default citiesSlice.reducer;
