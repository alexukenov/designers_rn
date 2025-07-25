import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface PhoneState {
  phone: string;
}

const initialState: PhoneState = {
  phone: '',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
  },
});

export const {setPhone} = counterSlice.actions;

export default counterSlice.reducer;
