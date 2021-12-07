import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
const initialState = {
  task: [],
  userName: "",

  editData:{},
  // editData.id

  loginRoute: false,

  loggedIn: false,
};

export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTasks: (state, action) => {
      // state.task = action.payload;
      state.task.push(action.payload)
    },

    getRemoveFunction: (state, action) => {
      state.task = action.payload.splice(0, action.payload.length);
    },

    // for closing the card
    getRemoveCardId: (state, action) => {
      state.task = state.task.filter((ele) => {
        return ele.id !== action.payload;
      });
    },

    getSearchData: (state, action) => {
      // console.log("===>", action.payload);
      state.task = state.task.filter((ele) => {
        if (ele.taskName.toLowerCase().includes(action.payload)) {
          return ele.taskName;
        } 
      });
    },

    getLoginData: (state, action) => {
      state.userName = action.payload.Uname;
      state.loggedIn = true;
    },

    getLoginRoute: (state, action) => {
      state.loginRoute = action.payload;
    },

    getLogoutRoute: (state, action) => {
      state.loggedIn = false;
    },
    getEditData:(state,action)=>{
      state.editData = action.payload
    },

    getUpdateValue:(state,action)=>{
      state.task = state.task.map((ele)=>{
        if(state.editData.id === ele.id){
          return {
            ...ele,
            taskName:action.payload
          }
        }
        // debugger
        return ele
      })
    },

  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const {
  getTasks,
  getRemoveFunction,
  getSearchData,
  getLoginData,
  getLoginRoute,
  getLogoutRoute,
  getRemoveCardId,
  getEditData,
  getUpdateValue,
} = counterSlice.actions;

export default counterSlice.reducer;
