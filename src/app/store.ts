import { ThunkAction, Action } from "@reduxjs/toolkit";
import modalReducer from "../features/modal/modalSlice";
import citiesReducer from "../features/cities/citiesSlice";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const appReducer = combineReducers({
  modal: modalReducer,
  cities: citiesReducer,
});

const persistConfig = {
  // configuration object for redux-persist
  key: "app",
  storage, // define which storage to use
};

const persistedReducer = persistReducer(persistConfig, appReducer); // create a persisted reducer

const store = createStore(
  persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
  applyMiddleware() // add any middlewares here
);

const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export { store, persistor };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
