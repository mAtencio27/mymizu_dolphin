import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    refill_amount: 0,
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
            state.refill_amount += action.payload;
            state.CO2 += action.payload;
            state.Plastic += action.payload;
        },
        saveMoney: (state, action) => {
            state.Money += action.payload;
        }
    }
});

export const {refill, saveMoney} = milestoneSlice.actions;
export default milestoneSlice.reducer;