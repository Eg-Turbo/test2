import { createSlice } from "@reduxjs/toolkit";
export const watchLaterSlice = createSlice({
  initialState: [
    {
      branchName: "Action",
      content: [],
    },
    {
      branchName: "Comedy",
      content: [],
    },
    {
      branchName: "Family",
      content: [],
    },
  ],
  name: "watchLaterSlice",
  reducers: {
    addBranch: (state, action) => {
      state.push(action.payload);
    },
    addMovieToBranch: (state, action) => {
      state.forEach((ele) => {
        if (ele.branchName === action.payload.branchName)
          ele.content.push(action.payload.movie);
      });
    },
  },
});
export const { addBranch, addMovieToBranch } = watchLaterSlice.actions;
export default watchLaterSlice.reducer;
