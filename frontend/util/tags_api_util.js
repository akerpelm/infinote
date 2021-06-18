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

export const createTag = (tag) =>
  $.ajax({
    method: "POST",
    url: `/api/tags/`,
    data: { tag },
  });
export const updateTag = (tag) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/tags/${tag.id}`,
    data: { tag },
  });
};

export const deleteTag = (tagId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/tags/${tagId}`,
  });
