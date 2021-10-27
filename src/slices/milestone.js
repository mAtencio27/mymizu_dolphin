import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserInfo = createAsyncThunk(
    "user/getUser",
    async() => {
        try {
            const user = await axios.get("/api/me")
            // const data = user.data.refill_amount;
            const data = user.data
            console.log(data)
            return data;
        } catch (err) {
            console.log(err);
        }
    }
)


const initialState = {
    refill_amount: 0 ,
    Water: 0,
    CO2: 0,
    Plastic: 0,
    Money: 0
}


const milestoneSlice = createSlice({
    name: "milestones",
    initialState,
    reducers: {
        refill: (state, action) => {
            // state.refill_amount += action.payload;
            state.CO2 += action.payload;
            state.Plastic += action.payload;
        },
        saveMoney: (state, action) => {
            state.Money += action.payload;
        }
    },
    extraReducers: {
        [fetchUserInfo.fulfilled]: (state) => {
            // state.refill_amount += action.payload;
            return state
        }
    }
});

export const {refill, saveMoney} = milestoneSlice.actions;
export default milestoneSlice.reducer;