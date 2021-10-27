import { configureStore } from "@reduxjs/toolkit";
import milestoneReducer from "../slices/milestone";
import pageReducer from "../slices/pageSlice"

export default configureStore({
    reducer: {
        milestone: milestoneReducer,
        page: pageReducer
    }
});