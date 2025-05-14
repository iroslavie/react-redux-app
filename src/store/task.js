import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    update(state, action) {
      const elemIndex = state.findIndex((el) => el.id === action.payload.id);
      state[elemIndex] = { ...state[elemIndex], ...action.payload };
    },
    remove(state, action) {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});

const { actions, reducer: taskReducer } = taskSlice;
const { update, remove } = actions;

export function taskCompleted(id) {
  return update({ id, completed: true });
}

export function titleChange(id) {
  return update({ id, title: `New title for Title ${id}` });
}

export function titleDeleted(id) {
  return remove({ id });
}

export default taskReducer;
