import { configureStore } from "@reduxjs/toolkit";

import commentsReducer from "./commentsSlice";
import loadingReducer from "./loadingSlice";
import notesReducer from "./notesSlice";

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    comments: commentsReducer,
    notes: notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
