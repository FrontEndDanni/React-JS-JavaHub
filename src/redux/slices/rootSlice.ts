import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Jamaican Blue Mountain',
        roast: 'medium',
        price: "60.00",
        description: "Redefine what's possible",
        caffeine_level: 'high',
        place_of_origin: 'Blue Mountains, Jamaica',
        weight: 'Approx 795g',
        cost_of_production: 450.00,
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => { state.price = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, } = rootSlice.actions;