export const fetchTags = () => {
  return $.ajax({
    method: "GET",
    url: "/api/tags",
  });
};

export const fetchTag = (tagId) => {
  return $.ajax({
    method: "GET",
    url: `/api/tags/${tagId}`,
  });
};

export const createTag = (tag) => {
  return $.ajax({
    method: "POST",
    url: "/api/tags",
    data: { tag },
  });
};

export const updateTag = (tag) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/tags/${tag.id}`,
    data: { tag },
  });
};

export const deleteTag = (tagId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/tags/${tagId}`,
  });
};

//   create = api_note_tagged_notes
//   POST /api/notes/:note_id tagged_notes

//   DELETE /api/notes/:note_id/tagged_notes/:id
export const createTaggedNote = (taggedNote) => {
  return $.ajax({
    method: "POST",
    url: `api/notes/${taggedNote.note_id}/tagged_notes`,
  });
};

export const deleteTaggedNote = (taggedNote) => {
  return $.ajax({
    method: "DELETE",
    url: `api/notes/${taggedNote.note_id}/tagged_notes/${taggedNote.tag_id}`,
  });
};
