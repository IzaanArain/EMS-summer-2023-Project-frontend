import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allEvents: [],
  isLoading: false,
  isError: false,
};

const url='http://localhost:5000';
const new_url="https://ems-backend-izaan.vercel.app";

export const getAllEventsAsync = createAsyncThunk(
  "allEvents/getAllEventsAsync",
  async () => {
    const data=localStorage.getItem("user");
    const user=JSON.parse(data)
    try {
      const response = await axios.get(`${new_url}/api/events/eventlist/`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const allEvents=response.data
      console.log(allEvents)
      return {allEvents}
    } catch (error) {
      console.log(error);
    }
  });
  
const AllEventSlice = createSlice({
  name: "allEvents",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(getAllEventsAsync.fulfilled,(state,action)=>{
        state.allEvents=action.payload.allEvents;
    })
  },
});

export default AllEventSlice.reducer;
