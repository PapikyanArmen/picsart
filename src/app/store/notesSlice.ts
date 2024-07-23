import { addNote, deleteNote, editNote, fetchNotes } from "@/api";
import { INotes } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  notes: [] as INotes[],
  error: null as null | string | undefined | "" | unknown,
};
const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.loading = false;
        state.notes.push(action.payload);
      })
      .addCase(addNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = state.notes.filter(
          (note) => note.id !== action.payload.id,
        );
      })
      .addCase(deleteNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(editNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editNote.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.notes.findIndex(
          (note) => note.id === action.payload.id,
        );
        if (index !== -1) {
          state.notes[index] = action.payload;
        }
      })
      .addCase(editNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default notesSlice.reducer;
