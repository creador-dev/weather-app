import { createSlice } from "@reduxjs/toolkit";

// define interface for typescript validation
export interface ModalState {
  status: Boolean;
}

// intital state of modal
const initialState: ModalState = {
  status: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state: any) => {
      state.status = true;
    },
    hideModal: (state: any) => {
      state.status = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export const currentStatus = (state: any) => state.modal.status;

export default modalSlice.reducer;
