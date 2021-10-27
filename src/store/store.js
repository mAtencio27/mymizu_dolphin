import { configureStore } from "@reduxjs/toolkit";
import milestoneReducer from "../slices/milestone";

export default configureStore({
    reducer: {
        milestone: milestoneReducer
    }
});