export const findNoteById = (notebook, noteId) => {
  return notebook.find((note) => {
    return note.id == noteId;
  });
};

export const compare = (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt);

export const filtered = (notebookId, state) => {
  let filteredNotes = [];
  for (let note of Object.values(state)) {
    if (note.notebookId == notebookId) {
      filteredNotes.push(note);
    } else if (notebookId == undefined) {
      filteredNotes = Object.values(state);
    }
  }
  return filteredNotes;
};
