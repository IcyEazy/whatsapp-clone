import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UnReadState {
  chats: number | null;
  calls: number | null;
  groups: number | null;
}

const initialState: UnReadState = {
  chats: null,
  calls: null,
  groups: null,
};

const unReadSlice = createSlice({
  name: "unRead",
  initialState,
  reducers: {
    setUnRead(state, action: PayloadAction<UnReadState>) {
      state.chats = action.payload.chats;
      state.calls = action.payload.calls;
      state.groups = action.payload.groups;
    },
  },
});

export const { setUnRead } = unReadSlice.actions;
export const selectUnRead = (state: any) => state.unRead;
export default unReadSlice.reducer;
