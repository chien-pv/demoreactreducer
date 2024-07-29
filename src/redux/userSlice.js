import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
  userData: [
    {
      id: 2,
      name: "Nguyen Van A",
    },
    {
      id: 3,
      name: "Nguyen Van B",
    },
  ],
};
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteTodo(state, action) {
      state.userData = state.userData.filter(
        (item) => item.id != action.payload
      );
    },
  },
});

export const { deleteTodo, addTodo, editTodo } = userSlice.actions;
