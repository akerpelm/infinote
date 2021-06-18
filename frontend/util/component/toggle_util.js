export const toggleActive = () => {
  document
    .querySelector(".expanded-side-nav-action-dropdown-ul")
    .classList.toggle("active");
};

export const toggleTag = () => {
  document.querySelector(".footer-add-tag-input").classList.toggle("active");
  document.querySelector(".add-tag-form-btn").classList.toggle("active");
};
