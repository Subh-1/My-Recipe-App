import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer"; // Adjust path as needed

const store = configureStore({
  reducer: rootReducer,
});

export default store;
