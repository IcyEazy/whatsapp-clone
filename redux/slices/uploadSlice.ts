import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UploadState {
  full_name: string;
  image_url: string;
  phone_number: string;
}

const initialState: UploadState = {
  full_name: "",
  image_url: "",
  phone_number: "",
};

export const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    setUpload: (state, action: PayloadAction<UploadState>) => {
      state.full_name = action.payload.full_name;
      state.image_url = action.payload.image_url;
      state.phone_number = action.payload.phone_number;
    },
  },
});

export const { setUpload } = uploadSlice.actions;
export const selectUpload = (state: any) => state.upload;
export default uploadSlice.reducer;
