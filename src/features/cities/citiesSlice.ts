import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// define interface for typescript validation
export interface ModalState {
  selectedCities: [];
}

// intital state of cities
const initialState: ModalState = {
  selectedCities: [],
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addToList: (state: any, action: PayloadAction<Object>) => {
      state.selectedCities = [...state.selectedCities, action.payload];
    },
    removeFromBookmarks: (state: any, action: PayloadAction<Object>) => {
      state.selectedCities = [...state.selectedCities, action.payload];
    },
    addToBookmarks: (state: any, action: PayloadAction<Object>) => {
      state.selectedCities = [...state.selectedCities, action.payload];
    },
  },
});

export const { addToList, addToBookmarks, removeFromBookmarks } =
  citiesSlice.actions;

export const allSelectedCities = (state: any) => state.cities.selectedCities;

export default citiesSlice.reducer;
