import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CityState {
    id: number | null;
    name: string;
}

const initialState: CityState = {
    id: Number(localStorage.getItem('cityId')) || null,
    name: localStorage.getItem('cityName') || '',
};

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setCity(state, action: PayloadAction<CityState>) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            localStorage.setItem('cityId', String(action.payload.id));
            localStorage.setItem('cityName', action.payload.name);
        },
    },
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;
