import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    value: [
      {
        id: 0,
        title: "Tokyo",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis dignissim risus.",
        imgUrl:
          "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: true,
      },
      {
        id: 1,
        title: "New York",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis dignissim risus.",
        imgUrl:
          "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: true,
      },
      {
        id: 2,
        title: "Rome",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis dignissim risus.",
        imgUrl:
          "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: false,
      },
      {
        id: 3,
        title: "Paris",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis dignissim risus.",
        imgUrl:
          "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: false,
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    toggleVisited: (state, action) => {
      const { title } = action.payload;
      const city = state.value.find((city) => city.title === title);
      if (city) {
        city.isVisited = !city.isVisited; // Cambia lo stato di isVisited
      }
    },
  },
});

export const { add, toggleVisited } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;
