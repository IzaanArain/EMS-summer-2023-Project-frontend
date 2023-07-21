import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const url="http://localhost:5000";
const new_url="https://ems-backend-izaan.vercel.app";

export const getEventsAsync = createAsyncThunk(
  "events/getEventsAsync",
  async () => {
    // const {user}=useSelector((state)=>state.auth.user)
    const data=localStorage.getItem("user");
    const user=JSON.parse(data)
    // console.log( "events/getEventsAsync",user)
    try {
      //fetch api
    //   const response = await fetch("http://localhost:5000/api/events/");
    //   console.log(response)
    //   if (response.ok) {
    //     const events = await response.json();
    //     return { events };
    //   }

      //axios
      const response = await axios.get(
        `${new_url}/api/events/`,
        {
        headers:{
          "Authorization":`Bearer ${user.token}`
        }
      });
    //   console.log(response.statusText)
      const events = response.data;
      return { events };
    } catch (error) {
      console.log(error);
    }
  }
);

export const addEventAsync = createAsyncThunk(
  "events/addEventAsync",
  async (payload) => {
    // console.log(payload)
    // const {user}=useSelector((state)=>state.auth.user)
    const data=localStorage.getItem("user");
    const user=JSON.parse(data)
    try {
      const response = await axios.post(
        `${new_url}/api/events/`,
        {
          title: payload.title,
          description: payload.description,
          date: payload.date,
          time: payload.time,
          location: payload.location,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${user.token}`
          },
        }
      );
    //   console.log(response)
      const event = response.data;
      console.log(event)
      return { event };
    } catch (error) {
        console.log(error)
    }
  }
);

export const deleteEventAsync=createAsyncThunk(
  "events/deleteEventAsync",
  async(payload)=>{
    const data=localStorage.getItem("user");
    const user=JSON.parse(data)
    try{
      const response=axios.delete(`${new_url}/api/events/${payload.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${user.token}`
        },
      }
      );
      const event=response
      return {id:event.id}
    }catch(error){
      console.log(error)
    }
  }
)

export const updateEventAsync=createAsyncThunk(
  "events/updateEventAsync",
  async(payload)=>{
    // console.log("updateEventAsync",payload)
    const data=localStorage.getItem("user");
    const user=JSON.parse(data)
    try {
      const response = await axios.put(
        `${new_url}/api/events/${payload.id}`,
        {
          title: payload.title,
          description: payload.description,
          date: payload.date,
          time: payload.time,
          location: payload.location,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${user.token}`
          },
        }
      );
      // console.log(response)
      const event = response.data;
      return {id:event._id,event:event };
    } catch (error) {
        console.log(error)
    }
  }
)

const eventSlice = createSlice({
  name: "event",
  initialState: [],
  reducers: {
    logoutEvents:(state,action)=>{
      return action.payload
    },
    deleteEvent:(state,action)=>{
      return state.filter((event)=>event._id !==action.payload.id)
    },
    updateEvent: (state, action) => {
      const index = state.findIndex((event) => event._id === action.payload.id);
      const updatedEvent = {
        title:action.payload.title,
        description: action.payload.description,
        time:action.payload.time,
        date: action.payload.date,
        location:action.payload.location
      };
      state[index] = updatedEvent;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEventsAsync.fulfilled, (state, action) => {
      // console.log(action)
      console.log(`fetched data successfully`);
      return action.payload.events;
    })
    builder.addCase(addEventAsync.fulfilled,(state,action)=>{
        state.push(action.payload.event)
    })
    builder.addCase(deleteEventAsync.fulfilled,(state,action)=>{
      return state.filter((event)=>event._id !==action.payload.id)
    })
    builder.addCase(updateEventAsync.fulfilled,(state,action)=>{
      const index = state.findIndex((event) => event._id === action.payload.id);
      state[index] = action.payload.event;
    })
  },
});

export const {deleteEvent,updateEvent,logoutEvents}=eventSlice.actions
export default eventSlice.reducer;
