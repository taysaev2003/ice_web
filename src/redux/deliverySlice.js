import { createSlice } from '@reduxjs/toolkit';

const deliverySlice = createSlice({
  name: 'deliveryMethod',
  initialState: {
    address: false,
  },
  reducers: {
    setAddress(state, { payload }) {
      state.address = payload;
    },
    setResetAddress(state) {
      state.address = false;
    },
  },
});

export const { setAddress, setResetAddress } = deliverySlice.actions;

export default deliverySlice.reducer;
