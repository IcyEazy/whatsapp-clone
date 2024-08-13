import { configureStore } from "@reduxjs/toolkit";
import uploadReducer from "./slices/uploadSlice";
import unReadReducer from "./slices/unReadSlice";

export const store = configureStore({
  reducer: {
    upload: uploadReducer,
    unRead: unReadReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {upload: UploadState}
export type AppDispatch = typeof store.dispatch;
