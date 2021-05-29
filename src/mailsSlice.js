import {
  createSlice
} from "@reduxjs/toolkit";

const mailsSlice = createSlice({
  name: "mails",
  initialState: {
    selectedFolder: "inbox",
    selectedMailsId: "",
    deletedMails: [],
  },
  reducers: {
    folderSelected(state, action) {
      state.selectedFolder = action.payload;
    },
    mailSelected(state, action) {
      state.selectedMailsId = action.payload;
    },
    deleteMail(state, action) {
      state.deletedMails.push(action.payload)
    }
  },
});

export const {
  folderSelected,
  mailSelected,
  deleteMail
} = mailsSlice.actions;
export default mailsSlice.reducer;