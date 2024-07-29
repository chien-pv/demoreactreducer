import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
  mesageErrors: "",
  todosData: [],
};
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo(state, action) {
      state.todosData = state.todosData.filter(
        (item) => item.id != action.payload
      );
    },
    editTodo(state, action) {
      state.todosData[action.payload.index].taskName = action.payload.taskName;
    },

    // action.payload {
    //   id: 1,
    //   taskName: "jhocj html"
    // }
    addTodo(state, action) {
      state.todosData.push(action.payload);
    },
    loadData(state, action) {
      state.todosData = action.payload;
    },
    loadDataErr(state, action) {
      state.mesageErrors = action.payload;
    },
    loading(state, action) {
      state.isloading = action.payload;
    },
  },
});

export const { deleteTodo, addTodo, editTodo, loadData, loadDataErr, loading } =
  todoSlice.actions;
