import { createSlice } from '@reduxjs/toolkit';
import { Facility } from '../../../interfaces';

type FacilitiesState = {
    facilities: Facility[];
};

const initialState: FacilitiesState = {
    facilities: [],
};

export const facilitiesSlice = createSlice({
    name: 'facilities',
    initialState: { facilities: [] } as FacilitiesState,
    reducers: {
        setFacilities: (state, action) => {
            state.facilities = action.payload;
        },
        addFacility: (state, action) => {
            state.facilities.push(action.payload);
        },
        removeFacility: (state, action) => {
            state.facilities = state.facilities.filter((facility) => facility.hotelId !== action.payload.hotelId && facility.name !== action.payload.name);
        },
    },
});

export const { setFacilities, addFacility, removeFacility } = facilitiesSlice.actions;
export default facilitiesSlice.reducer;