import { createSlice } from '@reduxjs/toolkit';

const deliverySlice = createSlice({
  name: 'deliveryMethod',
  initialState: {
    delMethod: 'pickup',
    address: false,
  },
  reducers: {
    setDeliveryMethod(state, { payload }) {
      state.delMethod = payload;
    },
    setAddress(state, { payload }) {
      state.address = payload;
    },
    setResetAddress(state) {
      state.address = false;
    },
  },
});

export const { setDeliveryMethod, setAddress, setResetAddress } =
  deliverySlice.actions;

export default deliverySlice.reducer;
