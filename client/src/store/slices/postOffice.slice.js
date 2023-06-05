import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPostOfficesME,
  fetchPostOfficesNP,
} from "../actionCreator/postOffice.actionCreator";

const postOfficeSlice = createSlice({
  name: "postOffice",
  initialState: {
    postOffice: null,
    postOffices: [],
    chosenPostOfficeBranch: null,
  },
  reducers: {
    setPostOffice(state, action) {
      state.postOffice = action.payload;
    },
    setChosenPostOffice(state, action) {
      state.chosenPostOfficeBranch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostOfficesNP.fulfilled, (state, action) => {
      state.postOffices = action.payload;
    });
    builder.addCase(fetchPostOfficesME.fulfilled, (state, action) => {
      state.postOffices = action.payload;
    });
  },
});

export const { setPostOffice, setChosenPostOffice } = postOfficeSlice.actions;
export default postOfficeSlice.reducer;
