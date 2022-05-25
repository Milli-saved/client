import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addNewWorkerAsync = createAsyncThunk(
  "agent/addNewAgentAsync",
  async ({ worker }) => {
    console.log(worker);
    const response = await axios.post(
      "http://localhost:4000/api/agent/addnewworker",
      {
        workerName: worker.workerName,
        workerLocation: worker.workerLocation,
        workerType: worker.workerType,
        workingTime: worker.workingTime,
        agentId: worker.agentId,
      }
    );
    console.log("this is the response of add new agent.", response);
    return response;
  }
);

const workerSlice = createSlice({
  name: "worker",
  initialState: {
    addingNewWorkerLoading: false,
    addingNewWorkerError: null,
    worker: null,
    workers: null,
  },
  extraReducers: {
    [addNewWorkerAsync.pending]: (state) => {
      state.addingNewWorkerLoading = true;
    },
    [addNewWorkerAsync.fulfilled]: (state, action) => {
      let worker = action.payload.data;
      // console.log("this is the fulfilled in addNewWorkerAsync", action.payload);
      state.addingNewWorkerLoading = false;
      state.addingNewWorkerError = null;
      state.worker = worker.data;
    },
    [addNewWorkerAsync.rejected]: (state, action) => {
      console.log("this is the rejected in addNewWorker", action);
      state.addingNewWorkerLoading = false;
      state.addingNewWorkerError = action.error.message;
    },
  },
});

export default workerSlice;
